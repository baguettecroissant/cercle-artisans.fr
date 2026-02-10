import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
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
