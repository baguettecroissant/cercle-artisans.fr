import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
    {
        slug: "maprimerenov-2026-guide-changements-baremes",
        title: "MaPrimeRénov' 2026 : Le guide ultime des changements et nouveaux barèmes",
        metaDescription: "MaPrimeRénov' 2026 : découvrez tous les changements, les nouveaux barèmes par profil de revenus, les travaux éligibles et comment maximiser vos aides à la rénovation énergétique.",
        heroImage: "/images/blog/maprimerenov-2026-hero.png",
        category: "Aides & Financement",
        publishedAt: "2026-02-11",
        readTime: "12 min",
        excerpt: "Le dispositif MaPrimeRénov' évolue en 2026 avec de nouveaux barèmes, des conditions renforcées et des montants revalorisés. Voici tout ce qui change et comment en profiter.",
        relatedServices: ["isolation-exterieur", "pompe-a-chaleur-air-eau", "isolation-combles", "fenetre", "climatisation"],
        content: `
            <p class="text-lg leading-relaxed">Votre facture de chauffage explose ? Votre logement est classé F ou G au DPE ? Vous n'êtes pas seul : <strong>plus de 5 millions de logements en France sont considérés comme des passoires thermiques</strong>. La bonne nouvelle, c'est que l'État a considérablement renforcé le dispositif <strong>MaPrimeRénov'</strong> en 2026 pour accélérer la rénovation du parc immobilier français. Nouveaux barèmes, plafonds revalorisés, conditions d'éligibilité modifiées… Ce guide complet vous explique tout ce qui change et comment maximiser vos aides.</p>

            <h2>Pourquoi MaPrimeRénov' évolue en 2026 ?</h2>
            <p>Le gouvernement a tiré les leçons des années précédentes. L'objectif est clair : <strong>rénover 700 000 logements par an</strong> d'ici 2030 pour atteindre la neutralité carbone. Les changements de 2026 visent à :</p>
            <ul>
                <li><strong>Simplifier les démarches</strong> : un guichet unique France Rénov' renforcé avec un accompagnement personnalisé obligatoire pour les projets supérieurs à 5 000 €.</li>
                <li><strong>Cibler les passoires thermiques</strong> : les logements classés F et G au DPE bénéficient désormais de bonifications majorées pouvant atteindre +20% sur les montants de base.</li>
                <li><strong>Encourager la rénovation globale</strong> : le « parcours accompagné » devient la voie principale avec des plafonds plus élevés pour les bouquets de travaux.</li>
                <li><strong>Interdire progressivement les mono-gestes</strong> : à partir de juillet 2026, les aides pour un seul type de travaux seront réduites de 30% pour inciter aux rénovations d'ampleur.</li>
            </ul>
            <p>Pour les propriétaires, c'est une opportunité majeure : <strong>les montants n'ont jamais été aussi élevés</strong>, mais les conditions sont plus strictes, notamment sur la certification RGE de l'artisan et l'accompagnement obligatoire.</p>

            <h2>Les nouveaux barèmes MaPrimeRénov' 2026 par profil</h2>
            <p>Les montants varient selon votre catégorie de revenus (Bleu, Jaune, Violet, Rose) et le type de travaux. Voici les barèmes actualisés pour 2026 :</p>

            <h3>Chauffage et eau chaude sanitaire</h3>
            <table class="w-full border-collapse my-6 text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 text-left font-bold border-b">Type de travaux</th>
                        <th class="p-3 text-left font-bold border-b">Bleu (très modestes)</th>
                        <th class="p-3 text-left font-bold border-b">Jaune (modestes)</th>
                        <th class="p-3 text-left font-bold border-b">Violet (intermédiaires)</th>
                        <th class="p-3 text-left font-bold border-b">Rose (aisés)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b"><td class="p-3"><a href="/service/pompe-a-chaleur-air-eau" class="text-blue-600 hover:underline font-medium">PAC air/eau</a></td><td class="p-3">11 000 €</td><td class="p-3">8 500 €</td><td class="p-3">4 500 €</td><td class="p-3">—</td></tr>
                    <tr class="border-b"><td class="p-3">PAC géothermique</td><td class="p-3">12 000 €</td><td class="p-3">10 000 €</td><td class="p-3">5 000 €</td><td class="p-3">—</td></tr>
                    <tr class="border-b"><td class="p-3">Chaudière biomasse (label Flamme Verte 7★)</td><td class="p-3">10 000 €</td><td class="p-3">8 000 €</td><td class="p-3">4 000 €</td><td class="p-3">—</td></tr>
                    <tr class="border-b"><td class="p-3">Chauffe-eau thermodynamique</td><td class="p-3">1 400 €</td><td class="p-3">1 100 €</td><td class="p-3">800 €</td><td class="p-3">—</td></tr>
                    <tr class="border-b"><td class="p-3">Poêle à granulés (NF EN 14785)</td><td class="p-3">2 500 €</td><td class="p-3">2 000 €</td><td class="p-3">1 500 €</td><td class="p-3">—</td></tr>
                </tbody>
            </table>

            <h3>Isolation thermique</h3>
            <table class="w-full border-collapse my-6 text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 text-left font-bold border-b">Type d'isolation</th>
                        <th class="p-3 text-left font-bold border-b">Bleu</th>
                        <th class="p-3 text-left font-bold border-b">Jaune</th>
                        <th class="p-3 text-left font-bold border-b">Violet</th>
                        <th class="p-3 text-left font-bold border-b">Rose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b"><td class="p-3"><a href="/service/isolation-exterieur" class="text-blue-600 hover:underline font-medium">ITE (murs extérieurs)</a> — R ≥ 3,7 m²·K/W</td><td class="p-3">80 €/m²</td><td class="p-3">65 €/m²</td><td class="p-3">45 €/m²</td><td class="p-3">—</td></tr>
                    <tr class="border-b"><td class="p-3"><a href="/service/isolation-combles" class="text-blue-600 hover:underline font-medium">Combles perdus</a> — R ≥ 7 m²·K/W</td><td class="p-3">30 €/m²</td><td class="p-3">25 €/m²</td><td class="p-3">20 €/m²</td><td class="p-3">—</td></tr>
                    <tr class="border-b"><td class="p-3">Rampants de toiture — R ≥ 6 m²·K/W</td><td class="p-3">30 €/m²</td><td class="p-3">25 €/m²</td><td class="p-3">20 €/m²</td><td class="p-3">—</td></tr>
                    <tr class="border-b"><td class="p-3"><a href="/service/fenetre" class="text-blue-600 hover:underline font-medium">Fenêtres double vitrage</a> (Uw ≤ 1,3 W/m²·K)</td><td class="p-3">100 €/équip.</td><td class="p-3">80 €/équip.</td><td class="p-3">40 €/équip.</td><td class="p-3">—</td></tr>
                </tbody>
            </table>
            <p><strong>Point technique important :</strong> Le coefficient de résistance thermique <strong>R</strong> est le critère clé pour l'éligibilité. Pour l'<a href="/service/isolation-exterieur" class="text-blue-600 hover:underline font-medium">isolation thermique par l'extérieur</a>, la norme exige un R minimum de 3,7 m²·K/W, ce qui correspond à environ <strong>14 cm de polystyrène expansé (PSE)</strong> ou <strong>12 cm de laine de roche</strong> haute densité. Nos artisans RGE utilisent des matériaux certifiés <strong>ACERMI</strong> conformes à la norme <strong>NF EN 13162</strong>.</p>

            <h2>Le parcours « Rénovation d'ampleur » 2026 : les nouveaux plafonds</h2>
            <p>C'est LE changement majeur de 2026. Le parcours accompagné est désormais la voie royale pour maximiser vos aides. Les plafonds de dépenses éligibles sont revalorisés :</p>
            <table class="w-full border-collapse my-6 text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 text-left font-bold border-b">Gain énergétique visé</th>
                        <th class="p-3 text-left font-bold border-b">Plafond de dépenses</th>
                        <th class="p-3 text-left font-bold border-b">Taux de financement (Bleu)</th>
                        <th class="p-3 text-left font-bold border-b">Taux de financement (Jaune)</th>
                        <th class="p-3 text-left font-bold border-b">Taux (Violet)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b"><td class="p-3">2 classes DPE (ex : F → D)</td><td class="p-3">40 000 €</td><td class="p-3">80%</td><td class="p-3">60%</td><td class="p-3">45%</td></tr>
                    <tr class="border-b"><td class="p-3">3 classes DPE (ex : G → D)</td><td class="p-3">55 000 €</td><td class="p-3">80%</td><td class="p-3">60%</td><td class="p-3">50%</td></tr>
                    <tr class="border-b"><td class="p-3">4 classes DPE ou plus</td><td class="p-3">70 000 €</td><td class="p-3">90%</td><td class="p-3">75%</td><td class="p-3">60%</td></tr>
                    <tr class="border-b bg-slate-50 font-bold"><td class="p-3">Bonus sortie passoire (F/G → D+)</td><td class="p-3" colspan="4">+10% sur le taux de financement</td></tr>
                </tbody>
            </table>
            <p><strong>Concrètement :</strong> un ménage aux revenus très modestes (profil Bleu) qui rénove sa maison classée G pour atteindre la classe C peut bénéficier de <strong>jusqu'à 63 000 €</strong> d'aides MaPrimeRénov' seule (90% de 70 000 €), auxquelles s'ajoutent les primes CEE et la TVA à 5,5%.</p>

            <h2>Les aides complémentaires cumulables en 2026</h2>
            <h3>Les Certificats d'Économies d'Énergie (CEE)</h3>
            <p>Financées par les énergéticiens (EDF, Engie, TotalEnergies), les primes CEE restent cumulables avec MaPrimeRénov'. Les montants 2026 pour les opérations les plus courantes :</p>
            <ul>
                <li><strong><a href="/service/isolation-combles" class="text-blue-600 hover:underline font-medium">Isolation des combles</a> :</strong> 8 à 14 €/m² selon la zone climatique (H1, H2, H3)</li>
                <li><strong><a href="/service/pompe-a-chaleur-air-eau" class="text-blue-600 hover:underline font-medium">Pompe à chaleur air/eau</a> :</strong> jusqu'à 5 500 € via le dispositif « Coup de Pouce Chauffage »</li>
                <li><strong><a href="/service/isolation-exterieur" class="text-blue-600 hover:underline font-medium">Isolation des murs par l'extérieur</a> :</strong> 10 à 18 €/m²</li>
                <li><strong><a href="/service/fenetre" class="text-blue-600 hover:underline font-medium">Remplacement de fenêtres</a> :</strong> 50 à 120 € par fenêtre</li>
            </ul>

            <h3>L'éco-prêt à taux zéro (éco-PTZ)</h3>
            <p>L'éco-PTZ reste un levier essentiel pour financer le reste à charge <strong>sans intérêts</strong> :</p>
            <ul>
                <li><strong>15 000 €</strong> pour un geste unique</li>
                <li><strong>25 000 €</strong> pour deux types de travaux combinés</li>
                <li><strong>50 000 €</strong> pour une rénovation globale (durée de remboursement : 20 ans max)</li>
            </ul>

            <h3>MaPrimeAdapt' : l'aide pour l'accessibilité</h3>
            <p>Si vous êtes senior ou en situation de handicap, <strong>MaPrimeAdapt'</strong> peut financer jusqu'à <strong>70% des travaux d'adaptation</strong> de votre logement (plafond de 22 000 €). Cela comprend l'installation d'un <a href="/service/monte-escalier" class="text-blue-600 hover:underline font-medium">monte-escalier</a>, d'un <a href="/service/ascenseur-privatif" class="text-blue-600 hover:underline font-medium">ascenseur privatif</a>, ou la pose de douches à l'italienne. Cette aide est <strong>cumulable</strong> avec MaPrimeRénov' si les travaux d'accessibilité s'inscrivent dans une rénovation globale.</p>

            <h3>TVA à 5,5% et aides locales</h3>
            <p>La TVA réduite à 5,5% s'applique automatiquement sur tous les travaux de rénovation énergétique réalisés par un artisan RGE (au lieu de 20%). De plus, de nombreuses <strong>collectivités locales</strong> (régions, départements, communes) proposent des aides complémentaires allant de 500 à 3 000 € selon les territoires.</p>

            <h2>Les travaux éligibles : quelles solutions techniques ?</h2>
            <h3>L'isolation thermique performante</h3>
            <p>L'isolation est le premier geste à réaliser. Par ordre de priorité :</p>
            <ul>
                <li><strong><a href="/service/isolation-combles" class="text-blue-600 hover:underline font-medium">Isolation des combles perdus</a></strong> : soufflage de laine de verre (λ = 0,032 W/m·K) ou laine de roche. Épaisseur recommandée : <strong>30 à 40 cm</strong> pour atteindre R ≥ 7 m²·K/W. Coût : 20 à 50 €/m² pose comprise.</li>
                <li><strong><a href="/service/isolation-exterieur" class="text-blue-600 hover:underline font-medium">ITE (Isolation Thermique par l'Extérieur)</a></strong> : pose de panneaux de polystyrène expansé (PSE graphité), laine de roche ou fibre de bois sous enduit. Épaisseur : 14 à 20 cm. Coût : 120 à 220 €/m² TTC. Supprime 100% des ponts thermiques de façade.</li>
                <li><strong><a href="/service/fenetre" class="text-blue-600 hover:underline font-medium">Fenêtres à haute performance</a></strong> : double vitrage VIR (Vitrage à Isolation Renforcée) avec Uw ≤ 1,3 W/m²·K, voire triple vitrage (Uw ≤ 0,8) en zone H1. Cadres PVC ou aluminium à rupture de pont thermique. Coût : 500 à 1 200 € par fenêtre posée.</li>
            </ul>

            <h3>Le chauffage performant</h3>
            <ul>
                <li><strong><a href="/service/pompe-a-chaleur-air-eau" class="text-blue-600 hover:underline font-medium">Pompe à chaleur air/eau</a></strong> : COP moyen de 3,5 à 4,2 (pour 1 kWh consommé, elle produit 3,5 à 4,2 kWh de chaleur). Compatible avec les radiateurs existants haute température ou plancher chauffant. Coût : 10 000 à 16 000 € installée.</li>
                <li><strong><a href="/service/climatisation" class="text-blue-600 hover:underline font-medium">PAC air/air (climatisation réversible)</a></strong> : idéale en complément pour le confort d'été. SCOP minimum de 4,0 pour la classe A+++. Coût : 3 000 à 6 000 € pour un multisplit.</li>
            </ul>

            <h3>La ventilation</h3>
            <p>Un point souvent négligé : <strong>une maison bien isolée DOIT être bien ventilée</strong>. La VMC double flux récupère jusqu'à 90% de la chaleur de l'air sortant. Coût : 4 000 à 8 000 € installée, éligible aux CEE.</p>

            <h2>Le processus pour obtenir MaPrimeRénov' 2026 : étape par étape</h2>
            <p>Voici le parcours complet pour obtenir vos aides, de la première idée au versement :</p>
            <ul>
                <li><strong>Étape 1 — Audit énergétique :</strong> Faites réaliser un audit par un bureau d'études certifié. Coût : 800 à 1 500 € (partiellement pris en charge par MaPrimeRénov' : 500 € pour les profils Bleu/Jaune). L'audit identifie les travaux prioritaires et le gain de classes DPE visé.</li>
                <li><strong>Étape 2 — Accompagnement Mon Accompagnateur Rénov' :</strong> Obligatoire pour le parcours accompagné. Cet expert agréé par l'État vous guide dans le choix des travaux, le montage financier et les démarches administratives. Son coût est intégré dans le plafond de dépenses.</li>
                <li><strong>Étape 3 — Devis d'artisans RGE :</strong> <strong>Condition sine qua non :</strong> seuls les artisans certifiés <strong>RGE (Reconnu Garant de l'Environnement)</strong> permettent d'accéder aux aides. Demandez au minimum 2 à 3 devis comparatifs.</li>
                <li><strong>Étape 4 — Dépôt du dossier :</strong> Créez votre compte sur <strong>maprimerenov.gouv.fr</strong> et déposez votre dossier AVANT le début des travaux (joindre les devis, l'avis d'imposition, le DPE).</li>
                <li><strong>Étape 5 — Accord et lancement des travaux :</strong> Après validation (délai moyen : 4 à 6 semaines), vous recevez la notification d'accord. Vous pouvez alors signer les devis et lancer le chantier.</li>
                <li><strong>Étape 6 — Fin de chantier et versement :</strong> À la fin des travaux, téléversez les factures sur votre espace. L'aide est versée directement sur votre compte bancaire sous 2 à 4 semaines.</li>
            </ul>

            <h2>Tableau récapitulatif : coût d'une rénovation type et aides 2026</h2>
            <p>Exemple pour une <strong>maison de 100 m²</strong> classée F au DPE, ménage aux revenus modestes (profil Jaune) :</p>
            <table class="w-full border-collapse my-6 text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 text-left font-bold border-b">Travaux</th>
                        <th class="p-3 text-left font-bold border-b">Coût TTC</th>
                        <th class="p-3 text-left font-bold border-b">MaPrimeRénov'</th>
                        <th class="p-3 text-left font-bold border-b">CEE</th>
                        <th class="p-3 text-left font-bold border-b">Reste à charge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b"><td class="p-3">Isolation combles (80 m²)</td><td class="p-3">2 800 €</td><td class="p-3">2 000 €</td><td class="p-3">640 €</td><td class="p-3">160 €</td></tr>
                    <tr class="border-b"><td class="p-3">ITE façades (120 m²)</td><td class="p-3">19 200 €</td><td class="p-3">7 800 €</td><td class="p-3">1 800 €</td><td class="p-3">9 600 €</td></tr>
                    <tr class="border-b"><td class="p-3">PAC air/eau</td><td class="p-3">13 500 €</td><td class="p-3">8 500 €</td><td class="p-3">4 000 €</td><td class="p-3">1 000 €</td></tr>
                    <tr class="border-b"><td class="p-3">Fenêtres (6 unités)</td><td class="p-3">4 800 €</td><td class="p-3">480 €</td><td class="p-3">360 €</td><td class="p-3">3 960 €</td></tr>
                    <tr class="border-b bg-slate-50 font-bold"><td class="p-3">TOTAL</td><td class="p-3">40 300 €</td><td class="p-3">18 780 €</td><td class="p-3">6 800 €</td><td class="p-3">14 720 €</td></tr>
                </tbody>
            </table>
            <p>Soit un financement de <strong>63% par les aides publiques</strong>. Avec le <strong>bonus sortie de passoire thermique</strong> (+10%), le taux peut grimper à 73%. Le reste à charge est finançable par un <strong>éco-PTZ à taux zéro</strong> sur 20 ans, soit environ <strong>61 €/mois</strong> — largement compensé par la baisse de la facture énergétique estimée à 100-150 €/mois.</p>

            <h2>FAQ : Les questions les plus fréquentes sur MaPrimeRénov' 2026</h2>

            <h3>Suis-je éligible à MaPrimeRénov' 2026 en tant que propriétaire bailleur ?</h3>
            <p>Oui. Les propriétaires bailleurs sont éligibles depuis 2021, pour un maximum de <strong>3 logements mis en location</strong>. Vous devez vous engager à louer le bien comme résidence principale pendant au moins 6 ans après les travaux. Les barèmes sont identiques à ceux des propriétaires occupants.</p>

            <h3>Peut-on cumuler MaPrimeRénov' avec les primes CEE et MaPrimeAdapt' ?</h3>
            <p>Oui, <strong>le cumul est possible et même recommandé</strong>. MaPrimeRénov' + CEE + éco-PTZ + TVA 5,5% + aides locales sont cumulables. Pour <a href="/service/monte-escalier" class="text-blue-600 hover:underline font-medium">l'installation d'un monte-escalier</a> ou d'un <a href="/service/ascenseur-privatif" class="text-blue-600 hover:underline font-medium">ascenseur privatif</a>, MaPrimeAdapt' peut être ajoutée si vous remplissez les conditions d'âge (70+ ans) ou de handicap (GIR 1 à 6).</p>

            <h3>Pourquoi faut-il impérativement choisir un artisan RGE ?</h3>
            <p>La certification <strong>RGE (Reconnu Garant de l'Environnement)</strong> est une condition obligatoire pour bénéficier de MaPrimeRénov', des CEE et de la TVA à 5,5%. Un artisan non-RGE vous fait perdre <strong>100% de vos droits aux aides</strong>. La certification garantit que l'artisan a suivi une formation spécifique et que ses chantiers sont contrôlés par des organismes indépendants (Qualibat, Qualit'EnR, Qualifelec).</p>

            <h3>Que se passe-t-il si mon DPE est déjà classé D ou mieux ?</h3>
            <p>Vous restez éligible aux gestes individuels (par exemple, le remplacement d'une chaudière fioul par une <a href="/service/pompe-a-chaleur-air-eau" class="text-blue-600 hover:underline font-medium">pompe à chaleur</a>), mais les montants sont réduits et le bonus « sortie de passoire » ne s'applique pas. Le parcours accompagné reste accessible si vous visez un gain d'au moins 2 classes DPE.</p>

            <h3>Combien de temps faut-il pour recevoir l'aide MaPrimeRénov' ?</h3>
            <p>Le délai moyen constaté en 2025 était de <strong>4 à 6 semaines</strong> pour la validation du dossier, puis <strong>2 à 4 semaines</strong> après le dépôt des factures pour le versement. Soit un total d'environ <strong>3 à 4 mois</strong> entre le dépôt et le versement final. En passant par un artisan RGE expérimenté, les dossiers sont mieux montés et traités plus rapidement.</p>

            <h2>Conclusion : 2026, l'année idéale pour rénover votre logement</h2>
            <p>Les <strong>barèmes MaPrimeRénov' 2026</strong> sont les plus avantageux jamais proposés. Avec le cumul des aides (MaPrimeRénov' + CEE + éco-PTZ + TVA 5,5%), il est possible de financer jusqu'à <strong>90% du coût total</strong> d'une rénovation globale pour les ménages modestes. Mais attention : les conditions se durcissent sur la certification RGE et l'accompagnement obligatoire.</p>
            <p>Ne tardez pas. Les budgets alloués sont limités et les délais de traitement s'allongent en fin d'année. <strong>Le meilleur moment pour lancer votre projet, c'est maintenant.</strong></p>
            <p><strong><a href="/devis" class="text-blue-600 hover:underline">→ Demandez votre devis gratuit auprès de nos artisans RGE certifiés</a></strong> — Le Cercle des Artisans vous accompagne de l'audit énergétique au versement de vos aides, avec un <strong>interlocuteur unique</strong> et des artisans locaux qualifiés.</p>
        `
    },
    {
        slug: "renovation-energetique-aides-2025",
        title: "Rénovation énergétique : Le guide complet des aides en 2025",
        metaDescription: "MaPrimeRénov', CEE, éco-PTZ, TVA réduite… Découvrez toutes les aides financières pour vos travaux de rénovation énergétique en 2025 et comment en bénéficier.",
        heroImage: "/images/blog/renovation-energetique-hero.jpg",
        category: "Aides & Financement",
        publishedAt: "2025-02-10",
        readTime: "8 min",
        excerpt: "MaPrimeRénov', primes CEE, éco-PTZ… Le paysage des aides à la rénovation évolue chaque année. Voici le récapitulatif complet pour financer vos travaux en 2025.",
        relatedServices: ["isolation-exterieur", "pompe-a-chaleur-air-eau", "fenetre", "isolation-combles"],
        content: `
            <p class="text-lg leading-relaxed">Rénover son logement coûte cher, mais l'État et les fournisseurs d'énergie ont mis en place un arsenal d'aides cumulables qui peuvent financer <strong>jusqu'à 90% de vos travaux</strong>. Encore faut-il connaître ses droits et les démarches. Ce guide fait le point complet sur toutes les aides disponibles en 2025.</p>

            <h2>1. MaPrimeRénov' : L'aide phare de l'État</h2>
            <p>Depuis 2020, MaPrimeRénov' est devenue le dispositif central de la rénovation énergétique en France. Elle est accessible à tous les propriétaires (occupants ou bailleurs) sans condition de revenus, mais le montant varie selon vos ressources :</p>
            <ul>
                <li><strong>Bleu (très modestes) :</strong> Jusqu'à 10 000 € pour une PAC air/eau et 75 €/m² pour l'<a href="/service/isolation-exterieur" class="text-blue-600 hover:underline font-medium">isolation par l'extérieur</a>.</li>
                <li><strong>Jaune (modestes) :</strong> Jusqu'à 8 000 € pour une PAC et 60 €/m² pour l'ITE.</li>
                <li><strong>Violet (intermédiaires) :</strong> Jusqu'à 4 000 € pour une PAC et 40 €/m² pour l'ITE.</li>
                <li><strong>Rose (aisés) :</strong> Éligible uniquement en rénovation globale (parcours accompagné).</li>
            </ul>
            <p><strong>Nouveauté 2025 :</strong> Le parcours « Rénovation d'ampleur » est renforcé avec un accompagnement obligatoire par un Accompagnateur Rénov' agréé pour les projets combinant au moins 2 gestes.</p>

            <h2>2. Les Primes CEE (Certificats d'Économies d'Énergie)</h2>
            <p>Financées par les fournisseurs d'énergie (EDF, Engie, TotalEnergies…), ces primes sont cumulables avec MaPrimeRénov'. Elles concernent notamment :</p>
            <ul>
                <li>L'<a href="/service/isolation-combles" class="text-blue-600 hover:underline font-medium">isolation des combles</a> perdus (soufflage)</li>
                <li>Le remplacement de chaudière par une <a href="/service/pompe-a-chaleur-air-eau" class="text-blue-600 hover:underline font-medium">pompe à chaleur air/eau</a></li>
                <li>Le changement de <a href="/service/fenetre" class="text-blue-600 hover:underline font-medium">fenêtres simple vitrage</a> par du double ou triple vitrage</li>
            </ul>
            <p>Le montant dépend de la zone climatique et de la surface traitée. Comptez entre 5 et 12 €/m² pour l'isolation des combles et jusqu'à 5 000 € pour une PAC via le dispositif « Coup de Pouce Chauffage ».</p>

            <h2>3. L'Éco-Prêt à Taux Zéro (éco-PTZ)</h2>
            <p>L'éco-PTZ permet de financer le reste à charge de vos travaux <strong>sans payer d'intérêts</strong>. En 2025, vous pouvez emprunter jusqu'à :</p>
            <ul>
                <li><strong>15 000 €</strong> pour un seul type de travaux</li>
                <li><strong>25 000 €</strong> pour deux types de travaux</li>
                <li><strong>50 000 €</strong> pour une rénovation globale (parcours accompagné)</li>
            </ul>
            <p>La durée de remboursement est de 20 ans maximum. L'éco-PTZ est cumulable avec toutes les autres aides.</p>

            <h2>4. La TVA réduite à 5,5%</h2>
            <p>Tous les travaux de rénovation énergétique bénéficient automatiquement d'un taux de TVA réduit à 5,5% (au lieu de 20%) lorsqu'ils sont réalisés par un artisan RGE. Cette réduction s'applique à la fois sur la fourniture des matériaux et sur la main d'œuvre. C'est l'artisan qui applique directement le bon taux sur sa facture.</p>

            <h2>5. Les aides locales et régionales</h2>
            <p>En plus des dispositifs nationaux, de nombreuses collectivités proposent des aides complémentaires :</p>
            <ul>
                <li>Les <strong>Régions</strong> offrent souvent des primes de 500 à 2 000 € pour l'isolation ou le changement de chauffage.</li>
                <li>Certaines <strong>agglomérations</strong> proposent des chèques énergie supplémentaires.</li>
                <li>L'<strong>ANAH</strong> (Agence Nationale de l'Habitat) propose le programme « Habiter Mieux » pour les logements très dégradés.</li>
            </ul>
            <p>Consultez le site <strong>france-renov.gouv.fr</strong> pour connaître les aides disponibles dans votre commune.</p>

            <h2>6. Exemple concret : combien pour une rénovation complète ?</h2>
            <p>Prenons l'exemple d'une maison de 100 m² à <a href="/ville/lyon" class="text-blue-600 hover:underline font-medium">Lyon</a> avec un DPE classé F :</p>
            <table class="w-full border-collapse my-6 text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 text-left font-bold border-b">Travaux</th>
                        <th class="p-3 text-left font-bold border-b">Coût estimé</th>
                        <th class="p-3 text-left font-bold border-b">Aides cumulées</th>
                        <th class="p-3 text-left font-bold border-b">Reste à charge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b"><td class="p-3">Isolation combles (80 m²)</td><td class="p-3">2 800 €</td><td class="p-3">2 240 €</td><td class="p-3">560 €</td></tr>
                    <tr class="border-b"><td class="p-3">ITE (120 m²)</td><td class="p-3">18 000 €</td><td class="p-3">12 600 €</td><td class="p-3">5 400 €</td></tr>
                    <tr class="border-b"><td class="p-3">PAC Air/Eau</td><td class="p-3">13 000 €</td><td class="p-3">9 100 €</td><td class="p-3">3 900 €</td></tr>
                    <tr class="border-b bg-slate-50 font-bold"><td class="p-3">TOTAL</td><td class="p-3">33 800 €</td><td class="p-3">23 940 €</td><td class="p-3">9 860 €</td></tr>
                </tbody>
            </table>
            <p>Soit un financement de <strong>71% par les aides</strong>, et le reste finançable par un éco-PTZ à taux zéro.</p>

            <h2>Conclusion : Par où commencer ?</h2>
            <p>La première étape est toujours l'<strong>audit énergétique</strong>. Il identifie les travaux prioritaires et ouvre le droit aux aides les plus importantes. Ensuite, faites appel à des artisans certifiés RGE — condition indispensable pour accéder aux financements publics.</p>
            <p><strong><a href="/devis" class="text-blue-600 hover:underline">Demandez votre devis gratuit</a></strong> et nos artisans partenaires vous accompagnent dans toutes les démarches administratives.</p>
        `
    },
    {
        slug: "monte-escalier-ou-ascenseur-privatif",
        title: "Monte-escalier ou ascenseur privatif : Comment choisir ?",
        metaDescription: "Monte-escalier ou mini-ascenseur ? Comparez les prix, avantages et inconvénients de chaque solution pour le maintien à domicile des seniors.",
        heroImage: "/images/blog/monte-escalier-vs-ascenseur-hero.jpg",
        category: "Accessibilité",
        publishedAt: "2025-02-05",
        readTime: "6 min",
        excerpt: "Face à la perte de mobilité, deux solutions principales existent pour garder l'accès à l'étage : le monte-escalier et l'ascenseur privatif. Comparons-les.",
        relatedServices: ["monte-escalier", "ascenseur"],
        content: `
            <p class="text-lg leading-relaxed">Quand l'escalier devient un obstacle au quotidien, la question se pose : faut-il investir dans un <a href="/service/monte-escalier" class="text-blue-600 hover:underline font-medium">monte-escalier</a> ou opter directement pour un <a href="/service/ascenseur" class="text-blue-600 hover:underline font-medium">ascenseur privatif</a> ? La réponse dépend de votre budget, de la configuration de votre maison et de l'évolution prévisible de vos besoins.</p>

            <h2>Le monte-escalier : la solution accessible</h2>
            <h3>Comment ça fonctionne ?</h3>
            <p>Un siège motorisé circule le long d'un rail fixé sur l'escalier (ou le mur). L'utilisateur s'assoit, attache la ceinture de sécurité et actionne la commande. Le trajet se fait en douceur, à environ 0,15 m/s.</p>

            <h3>Les avantages</h3>
            <ul>
                <li><strong>Prix abordable :</strong> De 2 500 € (droit) à 12 000 € (tournant), installation comprise.</li>
                <li><strong>Installation rapide :</strong> Une demi-journée à une journée maximum, sans travaux de gros œuvre.</li>
                <li><strong>Encombrement minimal :</strong> Le siège se replie contre le mur quand il n'est pas utilisé.</li>
                <li><strong>Aides financières :</strong> Crédit d'impôt de 25%, APA, ANAH cumulables.</li>
            </ul>

            <h3>Les limites</h3>
            <ul>
                <li>Nécessite de pouvoir s'asseoir et se lever du siège (mobilité partielle requise).</li>
                <li>Ne permet pas de transporter un fauteuil roulant.</li>
                <li>Moins adapté aux escaliers très étroits (largeur minimum ~70 cm).</li>
            </ul>

            <h2>L'ascenseur privatif : la solution pérenne</h2>
            <h3>Comment ça fonctionne ?</h3>
            <p>Une cabine fermée se déplace verticalement entre les niveaux de votre maison, comme un ascenseur d'immeuble mais en version compacte. Les technologies modernes (vis sans fin, hydraulique) permettent une installation dans un espace réduit.</p>

            <h3>Les avantages</h3>
            <ul>
                <li><strong>Accessibilité totale :</strong> Compatible fauteuil roulant, déambulateur, transport de charges.</li>
                <li><strong>Valorisation immobilière :</strong> Augmente significativement la valeur de votre bien.</li>
                <li><strong>Confort premium :</strong> Cabine fermée, sécurisée, silencieuse.</li>
                <li><strong>Solution définitive :</strong> S'adapte à l'évolution des besoins de mobilité.</li>
            </ul>

            <h3>Les limites</h3>
            <ul>
                <li><strong>Prix élevé :</strong> De 15 000 € à 25 000 € pour 2 niveaux.</li>
                <li><strong>Travaux de génie civil :</strong> Création d'une trémie ou d'une gaine (2 à 5 jours de travaux).</li>
                <li><strong>Maintenance obligatoire :</strong> Entretien annuel recommandé (150-300 €/an).</li>
            </ul>

            <h2>Tableau comparatif</h2>
            <table class="w-full border-collapse my-6 text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 text-left font-bold border-b">Critère</th>
                        <th class="p-3 text-left font-bold border-b">Monte-escalier</th>
                        <th class="p-3 text-left font-bold border-b">Ascenseur privatif</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b"><td class="p-3 font-medium">Budget</td><td class="p-3">2 500 – 12 000 €</td><td class="p-3">15 000 – 25 000 €</td></tr>
                    <tr class="border-b"><td class="p-3 font-medium">Installation</td><td class="p-3">½ journée</td><td class="p-3">2 à 5 jours</td></tr>
                    <tr class="border-b"><td class="p-3 font-medium">Travaux</td><td class="p-3">Aucun</td><td class="p-3">Trémie / gaine</td></tr>
                    <tr class="border-b"><td class="p-3 font-medium">Fauteuil roulant</td><td class="p-3">❌ Non</td><td class="p-3">✅ Oui</td></tr>
                    <tr class="border-b"><td class="p-3 font-medium">Plus-value immobilière</td><td class="p-3">Faible</td><td class="p-3">Forte</td></tr>
                    <tr class="border-b"><td class="p-3 font-medium">Escalier tournant</td><td class="p-3">✅ Sur-mesure</td><td class="p-3">N/A (vertical)</td></tr>
                </tbody>
            </table>

            <h2>Notre recommandation</h2>
            <p>Si votre budget est limité et que vous conservez une bonne mobilité assise, le <a href="/service/monte-escalier" class="text-blue-600 hover:underline font-medium">monte-escalier</a> est le choix le plus rationnel. Rapide à installer, finançable par les aides de l'État, il résout le problème immédiatement.</p>
            <p>En revanche, si vous anticipez une perte d'autonomie importante, que vous êtes en fauteuil roulant, ou que vous souhaitez valoriser votre patrimoine, l'<a href="/service/ascenseur" class="text-blue-600 hover:underline font-medium">ascenseur privatif</a> est un investissement pérenne qui s'adaptera à toutes les situations.</p>
            <p>Dans les deux cas, commencez par <strong><a href="/devis" class="text-blue-600 hover:underline">demander un devis gratuit</a></strong> pour obtenir une étude personnalisée adaptée à la configuration de votre maison.</p>
        `
    },
    {
        slug: "isolation-thermique-par-ou-commencer",
        title: "Isolation thermique : Par où commencer vos travaux ?",
        metaDescription: "Combles, murs, sol, fenêtres… Découvrez l'ordre optimal pour isoler votre maison, les prix au m² et les erreurs à éviter pour maximiser vos économies d'énergie.",
        heroImage: "/images/blog/isolation-thermique-hero.jpg",
        category: "Isolation",
        publishedAt: "2025-01-28",
        readTime: "7 min",
        excerpt: "Combles, murs, fenêtres ou sol ? L'ordre dans lequel vous isolez votre maison a un impact direct sur le retour sur investissement. Voici la bonne stratégie.",
        relatedServices: ["isolation-combles", "isolation-exterieur", "isolation", "fenetre"],
        content: `
            <p class="text-lg leading-relaxed">Vous savez que votre maison est une passoire thermique, mais par quoi commencer ? L'erreur la plus courante est de changer les fenêtres en premier — alors que c'est rarement la priorité. Voici l'ordre optimal recommandé par les experts pour <strong>maximiser vos économies dès le premier hiver</strong>.</p>

            <h2>La hiérarchie des déperditions thermiques</h2>
            <p>Avant de foncer tête baissée, il faut comprendre par où la chaleur s'échappe. Dans une maison d'avant 1975 non rénovée, la répartition moyenne est :</p>
            <ul>
                <li><strong>Toiture et combles :</strong> 30% des pertes (l'air chaud monte !)</li>
                <li><strong>Murs :</strong> 20 à 25% des pertes</li>
                <li><strong>Renouvellement d'air :</strong> 20% (ventilation, fuites)</li>
                <li><strong>Fenêtres et vitrages :</strong> 10 à 15% des pertes</li>
                <li><strong>Planchers bas :</strong> 7 à 10% des pertes</li>
                <li><strong>Ponts thermiques :</strong> 5% des pertes</li>
            </ul>
            <p>La logique est donc simple : <strong>traitez d'abord les postes les plus déficitaires</strong>.</p>

            <h2>Étape 1 : L'isolation des combles (priorité n°1)</h2>
            <p>C'est le geste le plus rentable et le plus rapide. L'<a href="/service/isolation-combles" class="text-blue-600 hover:underline font-medium">isolation des combles perdus</a> par soufflage coûte entre <strong>20 et 45 €/m²</strong> et se réalise en une demi-journée. Le retour sur investissement est souvent inférieur à 3 ans.</p>
            <p>Pour les combles aménagés, la pose de panneaux sous rampants est plus coûteuse (50-90 €/m²) mais indispensable si vos chambres sont sous les toits — c'est aussi la meilleure arme contre la surchauffe estivale.</p>

            <h2>Étape 2 : L'isolation des murs</h2>
            <p>Deuxième poste de déperdition, les murs doivent être traités après la toiture. Deux options :</p>
            <ul>
                <li><strong><a href="/service/isolation-exterieur" class="text-blue-600 hover:underline font-medium">L'ITE (Isolation Thermique par l'Extérieur)</a> :</strong> La méthode reine. Elle supprime les ponts thermiques, rénove la façade et ne réduit pas la surface habitable. Budget : 120-220 €/m².</li>
                <li><strong><a href="/service/isolation" class="text-blue-600 hover:underline font-medium">L'ITI (Isolation Thermique par l'Intérieur)</a> :</strong> Moins chère (40-80 €/m²) mais empiète sur la surface et ne traite pas les ponts thermiques aux jonctions murs/dalles.</li>
            </ul>
            <p><strong>Notre conseil :</strong> Si un ravalement de façade est prévu, profitez-en pour faire l'ITE — les deux chantiers se combinent parfaitement et les aides sont maximales.</p>

            <h2>Étape 3 : Les fenêtres</h2>
            <p>Contrairement aux idées reçues, le <a href="/service/fenetre" class="text-blue-600 hover:underline font-medium">changement de fenêtres</a> n'est pertinent qu'<strong>après</strong> l'isolation des combles et des murs. Pourquoi ? Car isoler les parois opaques (murs et toit) a un impact 3 à 5 fois supérieur sur votre facture.</p>
            <p>Cela dit, si vos fenêtres sont en simple vitrage, la sensation de paroi froide et les courants d'air justifient un remplacement rapide. Le double vitrage économise 10 à 15% sur le chauffage, et le confort acoustique est immédiat.</p>

            <h2>Étape 4 : Le plancher bas</h2>
            <p>Souvent oubliée, l'isolation du sol est pourtant simple et peu coûteuse quand il y a un vide-sanitaire ou un garage en dessous. Coller des panneaux de polystyrène extrudé au plafond du garage coûte environ 30-60 €/m² et supprime la sensation désagréable de carrelage glacé.</p>

            <h2>Les erreurs à éviter</h2>
            <ul>
                <li><strong>Ne pas faire d'audit énergétique :</strong> Sans diagnostic précis, vous risquez de traiter les mauvais postes en premier.</li>
                <li><strong>Choisir un artisan non certifié RGE :</strong> Vous perdrez le droit à toutes les aides financières.</li>
                <li><strong>Isoler sans ventiler :</strong> Une maison bien isolée DOIT avoir une VMC performante pour éviter l'humidité et garantir la qualité de l'air.</li>
                <li><strong>Sous-dimensionner l'épaisseur :</strong> Mettre 10 cm quand la réglementation recommande 30 cm pour les combles est une fausse économie.</li>
            </ul>

            <h2>Combien ça coûte au total ?</h2>
            <p>Pour une maison individuelle de 100 m² à <a href="/ville/toulouse" class="text-blue-600 hover:underline font-medium">Toulouse</a> classée F au DPE :</p>
            <table class="w-full border-collapse my-6 text-sm">
                <thead>
                    <tr class="bg-slate-100">
                        <th class="p-3 text-left font-bold border-b">Poste</th>
                        <th class="p-3 text-left font-bold border-b">Surface</th>
                        <th class="p-3 text-left font-bold border-b">Prix/m²</th>
                        <th class="p-3 text-left font-bold border-b">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b"><td class="p-3">Combles perdus (soufflage)</td><td class="p-3">100 m²</td><td class="p-3">30 €</td><td class="p-3">3 000 €</td></tr>
                    <tr class="border-b"><td class="p-3">ITE (façades)</td><td class="p-3">120 m²</td><td class="p-3">150 €</td><td class="p-3">18 000 €</td></tr>
                    <tr class="border-b"><td class="p-3">Fenêtres (6 unités)</td><td class="p-3">—</td><td class="p-3">—</td><td class="p-3">4 200 €</td></tr>
                    <tr class="border-b"><td class="p-3">Plancher bas</td><td class="p-3">100 m²</td><td class="p-3">45 €</td><td class="p-3">4 500 €</td></tr>
                    <tr class="border-b bg-slate-50 font-bold"><td class="p-3">TOTAL</td><td class="p-3"></td><td class="p-3"></td><td class="p-3">29 700 €</td></tr>
                </tbody>
            </table>
            <p>Avec les aides (MaPrimeRénov' + CEE + TVA 5,5%), le reste à charge peut descendre à <strong>8 000 – 12 000 €</strong> selon vos revenus, finançable par éco-PTZ.</p>

            <h2>Conclusion</h2>
            <p>La stratégie gagnante est : <strong>combles → murs → fenêtres → sols</strong>. Commencez toujours par un audit énergétique et faites appel à des <strong>artisans certifiés RGE</strong> pour bénéficier de toutes les aides.</p>
            <p><strong><a href="/devis" class="text-blue-600 hover:underline">Demandez votre devis gratuit</a></strong> pour obtenir une étude personnalisée et un chiffrage précis adapté à votre maison.</p>
        `
    },
];
