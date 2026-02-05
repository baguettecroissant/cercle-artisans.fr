import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- CONFIGURATION ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.0-flash"; // Available on your API key
const BATCH_SIZE = 5; // Conservative to avoid rate limits
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds

// Paths
const CITIES_PATH = path.join(process.cwd(), 'src/data/cities.ts');
const SERVICES_PATH = path.join(process.cwd(), 'src/data/service-content.ts');
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/generated-local-content.json');

// --- HELPERS ---

function extractSlugs(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /slug:\s*"([^"]+)"/g;
    const slugs = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    return slugs;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- MAIN ---

async function main() {
    const DRY_RUN = process.argv.includes('--dry-run');

    if (!GEMINI_API_KEY && !DRY_RUN) {
        console.error("❌ ERREUR: La variable d'environnement GEMINI_API_KEY est manquante.");
        console.error("Usage: export GEMINI_API_KEY=votre_cle && node scripts/generate-content.mjs");
        process.exit(1);
    }

    // Initialize the official SDK
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
        model: MODEL,
        generationConfig: {
            responseMimeType: "application/json",
        }
    });

    console.log(`🚀 Démarrage avec le SDK officiel Google (${MODEL})...`);

    // Load slugs
    const citySlugs = extractSlugs(CITIES_PATH);
    const serviceSlugs = extractSlugs(SERVICES_PATH);
    console.log(`✅ Trouvé ${citySlugs.length} villes et ${serviceSlugs.length} services.`);
    console.log(`   Total potentiel: ${citySlugs.length * serviceSlugs.length} pages`);

    // Load existing content
    let existingContent = {};
    if (fs.existsSync(OUTPUT_PATH)) {
        try {
            existingContent = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf8'));
        } catch (e) {
            console.warn("⚠️ Fichier JSON existant corrompu, on repart de zéro.");
            existingContent = {};
        }
    }

    // Identify missing tasks
    const tasks = [];
    for (const service of serviceSlugs) {
        for (const city of citySlugs) {
            const key = `${service}_${city}`;
            if (!existingContent[key]) {
                tasks.push({ key, service, city });
            }
        }
    }

    console.log(`📝 Reste ${tasks.length} pages à générer.`);

    if (tasks.length === 0) {
        console.log("Tout est déjà généré ! 🎉");
        return;
    }

    if (DRY_RUN) {
        console.log("[DRY RUN] Voici les 5 premières tâches:");
        tasks.slice(0, 5).forEach(t => console.log(`  - ${t.key}`));
        console.log("Arrêt DRY RUN.");
        return;
    }

    // Process tasks sequentially in batches
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < tasks.length; i += BATCH_SIZE) {
        const batch = tasks.slice(i, i + BATCH_SIZE);
        console.log(`\nLot ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(tasks.length / BATCH_SIZE)} (${i + 1}-${Math.min(i + BATCH_SIZE, tasks.length)})`);

        // Process batch items one by one (safer for rate limits)
        for (const task of batch) {
            try {
                const prompt = `Tu es un expert SEO local français. Génère un contenu JSON pour un artisan "${task.service}" à "${task.city}" (France).

Format JSON STRICT attendu:
{
    "intro": "Une introduction unique de 40-50 mots mentionnant ${task.city} (quartiers, monuments, ambiance) adaptée au métier ${task.service}.",
    "localTip": "Un conseil pratique lié aux travaux de ${task.service} à ${task.city} (stationnement, copropriété, climat, aides mairie).",
    "historyAnecdote": "Une phrase courte d'anecdote historique ou culturelle sur ${task.city}.",
    "localFaq": {
        "question": "Une question fréquente d'un habitant de ${task.city} concernant ${task.service}?",
        "answer": "Une réponse rassurante et professionnelle."
    }
}

Réponds UNIQUEMENT avec le JSON valide, sans texte autour.`;

                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();

                // Parse and validate JSON
                const parsedContent = JSON.parse(text);

                // Validate structure
                if (!parsedContent.intro || !parsedContent.localTip || !parsedContent.localFaq) {
                    throw new Error("Structure JSON invalide");
                }

                existingContent[task.key] = parsedContent;
                successCount++;
                console.log(`  ✅ ${task.key}`);

            } catch (err) {
                errorCount++;
                console.error(`  ❌ ${task.key}: ${err.message}`);

                // If rate limited, wait longer
                if (err.message.includes('429') || err.message.includes('quota')) {
                    console.log("  ⏳ Rate limit détecté, pause de 30s...");
                    await delay(30000);
                }
            }

            // Small delay between each request
            await delay(300);
        }

        // Save progress after each batch
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(existingContent, null, 2));
        console.log(`  💾 Sauvegardé (${successCount} OK, ${errorCount} erreurs)`);

        // Wait between batches
        if (i + BATCH_SIZE < tasks.length) {
            console.log(`  ⏳ Pause ${DELAY_BETWEEN_BATCHES / 1000}s...`);
            await delay(DELAY_BETWEEN_BATCHES);
        }
    }

    console.log(`\n✨ Terminé ! ${successCount} générés, ${errorCount} erreurs.`);
}

main().catch(console.error);
