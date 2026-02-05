import { Service } from "@/types";

export const services: Service[] = [
    {
        slug: "monte-escalier",
        name: "Monte Escalier",
        seoTitle: "Installation Monte Escalier",
        category: "Accessibilité",
        hero: {
            title: "Retrouvez votre autonomie",
            subtitle: "Installation de monte-escaliers sur-mesure pour votre confort et sécurité.",
            image: "/images/monte-escalier-hero.png",
        },
        process: {
            title: "Votre installation en 3 étapes",
            steps: [
                { title: "Étude technique", description: "Relevé précis de vos escaliers (droit ou tournant)." },
                { title: "Fabrication sur-mesure", description: "Conception adaptée à votre intérieur." },
                { title: "Pose en 1 journée", description: "Installation propre et formation à l'utilisation." },
            ],
        },
        benefits: {
            title: "Pourquoi nous choisir ?",
            items: [
                { icon: "ShieldCheck", title: "Sécurité Totale", description: "Ceintures, capteurs d'obstacles et batteries de secours." },
                { icon: "Heart", title: "Confort Premium", description: "Siège ergonomique et pivotant pour un accès facile." },
                { icon: "Award", title: "Garantie Complète", description: "Pièces, main d'œuvre et déplacement inclus." },
            ],
        },
        pricing: {
            title: "Prix moyens constatés",
            items: [
                { service: "Monte-escalier droit", price: "2500 - 5000", unit: "€" },
                { service: "Monte-escalier tournant", price: "6000 - 12000", unit: "€" },
                { service: "Monte-escalier extérieur", price: "4000 - 9000", unit: "€" },
            ],
        },
        faq: [
            { question: "Combien de temps dure l'installation ?", answer: "L'installation prend généralement une demi-journée à une journée complète." },
            { question: "Existe-t-il des aides financières ?", answer: "Oui, vous pouvez être éligible au crédit d'impôt (25%), à l'APA ou aux aides de l'ANAH." },
        ],
        directoryPageContent: {
            intro: "Le monte-escalier est la solution idéale pour préserver votre maintien à domicile en toute sécurité. Que votre escalier soit droit, tournant ou extérieur, nos artisans partenaires vous proposent des solutions sur-mesure pour retrouver l'accès à l'étage sans effort.",
            description: `
                <h3>Le maintien à domicile : une priorité</h3>
                <p>Pour de nombreuses personnes âgées ou à mobilité réduite, l'escalier devient un obstacle quotidien majeur. L'installation d'un monte-escalier électrique permet de contourner cette difficulté sans avoir à déménager ou à engager de lourds travaux d'aménagement.</p>
                
                <h3>Comment choisir son monte-escalier ?</h3>
                <p>Le choix dépend principalement de la configuration de votre escalier :</p>
                <ul>
                    <li><strong>Monte-escalier droit :</strong> Pour les escaliers sans virage ni palier intermédiaire. C'est la solution la plus économique et la plus rapide à installer.</li>
                    <li><strong>Monte-escalier tournant :</strong> Conçu sur-mesure pour épouser les courbes de votre escalier, il optimise l'espace et garantit un trajet fluide.</li>
                    <li><strong>Monte-escalier extérieur :</strong> Résistant aux intempéries, il permet d'accéder à une entrée surélevée ou un jardin en pente.</li>
                </ul>

                <h3>Les aides financières disponibles</h3>
                <p>L'État encourage l'autonomie des seniors via plusieurs dispositifs. Vous pouvez bénéficier d'un <strong>crédit d'impôt de 25%</strong> sur les dépenses d'équipement, de la TVA réduite à 5,5%, ainsi que des subventions de l'ANAH (Habiter Facile) ou de l'APA (Allocation Personnalisée d'Autonomie).</p>
            `
        }
    },
    {
        slug: "isolation-exterieur",
        name: "Isolation par l'extérieur",
        seoTitle: "ITE - Isolation Thermique Extérieure",
        category: "Isolation",
        hero: {
            title: "Isolez et embellissez votre façade",
            subtitle: "Faites des économies d'énergie tout en rénovant votre façade.",
            image: "/images/ite-hero.png",
        },
        process: {
            title: "L'ITE pas à pas",
            steps: [
                { title: "Diagnostic thermique", description: "Analyse des déperditions actuelles." },
                { title: "Pose de l'isolant", description: "Fixation de panneaux polystyrène ou laine de roche." },
                { title: "Finition enduit", description: "Application du crépi ou bardage de finition." },
            ],
        },
        benefits: {
            title: "Les avantages de l'ITE",
            items: [
                { icon: "Thermometer", title: "Confort Thermique", description: "Fini les murs froids en hiver et la surchauffe en été." },
                { icon: "Euro", title: "Économies", description: "Jusqu'à 30% d'économie sur votre facture de chauffage." },
                { icon: "Home", title: "Surface préservée", description: "Aucune perte de surface habitable à l'intérieur." },
            ],
        },
        pricing: {
            title: "Coût de l'isolation extérieure",
            items: [
                { service: "ITE Polystyrène", price: "120 - 180", unit: "€/m²" },
                { service: "ITE Laine de Roche", price: "150 - 220", unit: "€/m²" },
                { service: "Finition Bardage", price: "180 - 300", unit: "€/m²" },
            ],
        },
        faq: [
            { question: "Faut-il une autorisation ?", answer: "Oui, une déclaration préalable de travaux en mairie est obligatoire car l'aspect de la façade change." },
        ],
        directoryPageContent: {
            intro: "L'Isolation Thermique par l'Extérieur (ITE) est la méthode la plus performante pour rénover une maison énergivore. Elle permet de traiter les ponts thermiques tout en offrant un ravalement de façade complet, sans réduire votre surface habitable.",
            description: `
                <h3>Pourquoi opter pour l'isolation par l'extérieur ?</h3>
                <p>Les murs représentent jusqu'à 25% des déperditions de chaleur dans une maison mal isolée. L'ITE agit comme un manteau protecteur autour du bâtiment, supprimant efficacement les ponts thermiques (zones de fuite de chaleur) au niveau des dalles et des refends.</p>
                
                <h3>Les techniques d'isolation</h3>
                <p>Deux principales méthodes existent :</p>
                <ul>
                    <li><strong>L'enduit sur isolant :</strong> Des panneaux (souvent en polystyrène expansé ou laine de roche) sont collés/chevillés sur le mur, puis recouverts d'un treillis et d'un enduit de finition.</li>
                    <li><strong>Le bardage (filière sèche) :</strong> Une ossature est fixée au mur, l'isolant est inséré entre les montants, et un bardage (bois, composite, PVC) vient recouvrir l'ensemble, laissant une lame d'air ventilée.</li>
                </ul>

                <h3>Une valorisation immédiate de votre patrimoine</h3>
                <p>En plus de réduire votre facture de chauffage de près de 30%, l'ITE modernise l'aspect extérieur de votre maison. C'est un argument de poids en cas de revente, améliorant significativement le Diagnostic de Performance Énergétique (DPE).</p>
            `
        }
    },
    {
        slug: "pompe-a-chaleur-air-eau",
        name: "Pompe à chaleur air/eau",
        seoTitle: "Installation PAC Air/Eau",
        category: "Chauffage",
        hero: {
            title: "Chauffez votre maison écologiquement",
            subtitle: "Remplacez votre chaudière fioul ou gaz par une PAC performante.",
            image: "/images/pac-air-eau-hero.jpg",
        },
        process: {
            title: "Installation de votre PAC",
            steps: [
                { title: "Dimensionnement", description: "Calcul de la puissance nécessaire selon votre volume." },
                { title: "Pose unité extérieure", description: "Installation du module de captation de calories." },
                { title: "Raccordement", description: "Liaison au circuit de chauffage central existant." },
            ],
        },
        benefits: {
            title: "Pourquoi passer à la PAC ?",
            items: [
                { icon: "Leaf", title: "Écologique", description: "Utilise les calories gratuites de l'air." },
                { icon: "Euro", title: "Rentable", description: "Divisez votre facture de chauffage par 3." },
                { icon: "Zap", title: "Polyvalent", description: "Chauffage et Eau Chaude Sanitaire (et rafraîchissement)." },
            ],
        },
        pricing: {
            title: "Tarifs PAC Air/Eau",
            items: [
                { service: "Fourniture et Pose (Maison 100m²)", price: "10000 - 16000", unit: "€" },
                { service: "Entretien annuel", price: "150 - 250", unit: "€" },
            ],
        },
        faq: [
            { question: "La PAC fonctionne-t-elle par grand froid ?", answer: "Les modèles récents fonctionnent efficacement jusqu'à -15°C ou -20°C." },
        ],
        directoryPageContent: {
            intro: "La Pompe à Chaleur (PAC) Air/Eau s'impose comme le remplacement idéal de votre ancienne chaudière fioul ou gaz. Elle récupère les calories gratuites présentes dans l'air extérieur pour chauffer votre circuit d'eau central, générant d'importantes économies.",
            description: `
                <h3>Fonctionnement de la PAC Air/Eau</h3>
                <p>Le principe est thermodynamique : l'unité extérieure capte l'énergie de l'air (même froid), la compresse pour en élever la température, et la transmet à l'eau de vos radiateurs ou plancher chauffant. Le coefficient de performance (COP) est souvent supérieur à 3, ce qui signifie que pour 1 kWh d'électricité consommé, la PAC restitue 3 kWh de chaleur.</p>
                
                <h3>Compatibilité avec votre installation</h3>
                <p>La PAC Air/Eau est particulièrement adaptée à la rénovation car elle se raccorde directement à votre système de chauffage hydraulique existant. Il existe deux types :</p>
                <ul>
                    <li><strong>Basse température :</strong> Idéale pour les planchers chauffants ou radiateurs surdimensionnés.</li>
                    <li><strong>Haute température :</strong> Conçue pour remplacer une chaudière sur d'anciens radiateurs nécessitant une eau à 65°C ou plus.</li>
                </ul>

                <h3>MaPrimeRénov' et Coup de Pouce</h3>
                <p>Le remplacement d'une chaudière fossile par une PAC Air/Eau est l'un des travaux les plus aidés par l'État. Cumulez MaPrimeRénov' et la Prime CEE (Coup de Pouce Chauffage) pour financer jusqu'à 90% de votre installation selon vos revenus.</p>
            `
        }
    },
    {
        slug: "isolation-combles",
        name: "Isolation des combles",
        seoTitle: "Isolation Combles Perdus & Aménagés",
        category: "Isolation",
        hero: {
            title: "Stoppez les pertes de chaleur par le toit",
            subtitle: "30% de la chaleur s'échappe par le toit. Isolez pour économiser.",
            image: "/images/combles-hero.jpg",
        },
        process: {
            title: "Techniques d'isolation",
            steps: [
                { title: "Soufflage (Perdus)", description: "Projection de laine minérale ou ouate de cellulose." },
                { title: "Rampants (Aménagés)", description: "Pose de rouleaux ou panneaux sous toiture." },
            ],
        },
        benefits: {
            title: "Bénéfices immédiats",
            items: [
                { icon: "TrendingDown", title: "Facture réduite", description: "L'investissement le plus rentable en rénovation." },
                { icon: "Clock", title: "Rapide", description: "Isolation des combles perdus réalisée en une demi-journée." },
            ],
        },
        pricing: {
            title: "Prix isolation toiture",
            items: [
                { service: "Soufflage combles perdus", price: "20 - 45", unit: "€/m²" },
                { service: "Isolation rampants", price: "50 - 90", unit: "€/m²" },
            ],
        },
        faq: [
            { question: "Quel isolant choisir ?", answer: "La laine de verre est performante et économique. La ouate de cellulose offre un meilleur déphasage d'été." },
        ],
        directoryPageContent: {
            intro: "Saviez-vous que 30% de la chaleur de votre maison s'échappe par le toit ? L'isolation des combles est le premier travail de rénovation énergétique à entreprendre pour un retour sur investissement immédiat et un confort accru été comme hiver.",
            description: `
                <h3>Combles perdus ou aménagés ?</h3>
                <p>La technique d'isolation diffère selon l'usage de vos combles :</p>
                <ul>
                    <li><strong>Combles perdus :</strong> Pour ces espaces non habitables, la technique du <strong>soufflage</strong> est privilégiée. Des flocons de laine minérale ou de ouate de cellulose sont projetés uniformément sur le sol, supprimant tous les ponts thermiques. C'est rapide et très efficace.</li>
                    <li><strong>Combles aménagés :</strong> L'isolation se fait sous les rampants de la toiture (entre et sous les chevrons) à l'aide de panneaux ou de rouleaux semi-rigides, habillés ensuite par des plaques de plâtre.</li>
                </ul>

                <h3>Confort d'été et déphasage</h3>
                <p>Si l'isolation protège du froid, elle doit aussi protéger du chaud. Le choix de l'isolant est crucial : un isolant dense comme la ouate de cellulose ou la laine de bois offre un meilleur déphasage thermique, retardant l'entrée de la chaleur dans les chambres sous toiture pendant les canicules.</p>
            `
        }
    },
    {
        slug: "climatisation",
        name: "Climatisation",
        seoTitle: "Installation Climatisation Réversible",
        category: "Confort Thermique",
        hero: {
            title: "Fraîcheur en été, douceur en hiver",
            subtitle: "Installation de climatisation réversible pour un confort toute l'année.",
            image: "/images/clim-hero.jpg",
        },
        process: {
            title: "Votre projet clim",
            steps: [
                { title: "Bilan thermique", description: "Pour choisir la bonne puissance." },
                { title: "Installation soignée", description: "Pose des unités et goulottes discrètes." },
                { title: "Mise en service", description: "Tests d'étanchéité et explications." },
            ],
        },
        benefits: {
            title: "Atouts de la clim réversible",
            items: [
                { icon: "Sun", title: "Confort d'été", description: "Dormez au frais même pendant les canicules." },
                { icon: "Zap", title: "Chauffage économique", description: "Une restitution de chaleur très performante en hiver." },
            ],
        },
        pricing: {
            title: "Tarifs climatisation",
            items: [
                { service: "Mono-split (1 pièce)", price: "1200 - 2500", unit: "€" },
                { service: "Multi-split (3 pièces)", price: "3500 - 6000", unit: "€" },
            ],
        },
        faq: [
            { question: "Est-ce bruyant ?", answer: "Les unités modernes sont très silencieuses (autour de 20dB en mode nuit)." },
        ],
        directoryPageContent: {
            intro: "La climatisation réversible est un équipement 2-en-1 indispensable pour faire face aux étés de plus en plus chauds tout en se chauffant économiquement l'hiver. Profitez d'une température idéale pièce par pièce, toute l'année.",
            description: `
                <h3>Comment fonctionne une clim réversible ?</h3>
                <p>C'est en réalité une pompe à chaleur air/air. En été, elle capte les calories de votre intérieur pour les rejeter dehors, rafraîchissant ainsi l'air. En hiver, elle inverse son cycle : elle puise les calories gratuites de l'air extérieur pour chauffer votre logement.</p>
                
                <h3>Mono-split ou Multi-split ?</h3>
                <ul>
                    <li><strong>Mono-split :</strong> Composé d'une unité extérieure et d'une seule unité intérieure. Parfait pour équiper une pièce de vie principale ou une chambre.</li>
                    <li><strong>Multi-split :</strong> Une seule unité extérieure connectée à plusieurs unités intérieures (jusqu'à 5). Cela permet de climatiser toute la maison avec un contrôle de température indépendant dans chaque pièce.</li>
                </ul>

                <h3>Économies d'énergie</h3>
                <p>Contrairement aux idées reçues, la climatisation réversible est un mode de chauffage très économique. Avec un SCOP (Coefficient de Performance Saisonnier) souvent supérieur à 4, elle restitue 4 fois plus d'énergie qu'elle n'en consomme en électricité.</p>
            `
        }
    },
    {
        slug: "fenetre",
        name: "Fenêtre",
        seoTitle: "Pose de Fenêtres & Baies Vitrées",
        category: "Menuiserie",
        hero: {
            title: "Lumière et isolation",
            subtitle: "Remplacement de fenêtres PVC, Alu ou Bois pour une meilleure isolation.",
            image: "/images/fenetre-hero.jpg",
        },
        process: {
            title: "Changement de fenêtres",
            steps: [
                { title: "Métrage précis", description: "Prise de cotes millimétrée." },
                { title: "Dépose", description: "Retrait de l'ancien ouvrant (et dormant si rénovation totale)." },
                { title: "Pose et étanchéité", description: "Installation et joints de finition." },
            ],
        },
        benefits: {
            title: "Gagnez en confort",
            items: [
                { icon: "VolumeX", title: "Silence", description: "Réduction significative des bruits extérieurs." },
                { icon: "Shield", title: "Sécurité", description: "Vitrages retardateurs d'effraction disponibles." },
            ],
        },
        pricing: {
            title: "Prix fourniture et pose",
            items: [
                { service: "Fenêtre PVC double vitrage", price: "400 - 800", unit: "€" },
                { service: "Baie vitrée Alu", price: "1500 - 3000", unit: "€" },
            ],
        },
        faq: [
            { question: "Rénovation ou dépose totale ?", answer: "La rénovation sur bâti existant est plus rapide et moins salissante, la dépose totale offre plus de lumière." },
        ],
        directoryPageContent: {
            intro: "Le remplacement de vos fenêtres est un levier essentiel pour améliorer l'isolation thermique et acoustique de votre habitat. PVC, Aluminium ou Bois, nos menuisiers vous guident vers les vitrages les plus performants.",
            description: `
                <h3>Quel matériau choisir ?</h3>
                <ul>
                    <li><strong>Le PVC :</strong> Le champion du rapport qualité/prix. Excellent isolant, sans entretien, il s'adapte à tous les styles grâce aux nouveaux coloris plaxés.</li>
                    <li><strong>L'Aluminium :</strong> Privilégié pour les grandes ouvertures et baies vitrées grâce à la finesse de ses montants. Il apporte une touche contemporaine et un maximum de lumière.</li>
                    <li><strong>Le Bois :</strong> Matériau noble et isolant naturel, il est incontournable pour les bâtiments classés ou pour apporter de la chaleur à votre intérieur.</li>
                </ul>
                
                <h3>Double ou Triple vitrage ?</h3>
                <p>Le <strong>double vitrage</strong> classique (4/16/4 avec gaz argon) est aujourd'hui la norme et suffit pour la majorité des régions françaises. Le <strong>triple vitrage</strong> est recommandé pour les façades exposées au nord dans les régions très froides ou pour les maisons passives. N'oubliez pas l'option vitrage acoustique si vous habitez sur une rue passante.</p>
            `
        }
    },
    {
        slug: "decrassage-toiture",
        name: "Décrassage ou démoussage de toiture",
        seoTitle: "Nettoyage & Démoussage Toiture",
        category: "Toiture",
        hero: {
            title: "Redonnez vie à votre toiture",
            subtitle: "Nettoyage, démoussage et traitement hydrofuge pour prolonger la durée de vie de vos tuiles.",
            image: "/images/toiture-hero.jpg",
        },
        process: {
            title: "Notre méthode de nettoyage",
            steps: [
                { title: "Nettoyage mécanique", description: "Brossage ou basse pression pour retirer les grosses mousses." },
                { title: "Traitement", description: "Application d'un produit antimousse et algicide." },
                { title: "Protection", description: "Pose d'un hydrofuge pour imperméabiliser." },
            ],
        },
        benefits: {
            title: "Pourquoi entretenir ?",
            items: [
                { icon: "Droplet", title: "Étanchéité", description: "Évite que les tuiles ne deviennent poreuses." },
                { icon: "Home", title: "Esthétique", description: "Votre maison retrouve son aspect neuf." },
            ],
        },
        pricing: {
            title: "Tarifs nettoyage toiture",
            items: [
                { service: "Démoussage simple", price: "15 - 25", unit: "€/m²" },
                { service: "Nettoyage + Hydrofuge", price: "30 - 50", unit: "€/m²" },
            ],
        },
        faq: [
            { question: "L'eau de Javel est-elle utilisée ?", answer: "Jamais. Le chlore abîme les tuiles. Nous utilisons des produits professionnels biocides respectueux des matériaux." },
        ],
        directoryPageContent: {
            intro: "Une toiture envahie par les mousses et lichens n'est pas seulement inesthétique, elle devient vulnérable. Le démoussage et l'hydrofugation sont essentiels pour préserver l'étanchéité de votre couverture et éviter de coûteuses réparations.",
            description: `
                <h3>Les risques d'une toiture négligée</h3>
                <p>Les mousses et lichens retiennent l'humidité. En hiver, sous l'effet du gel, cette eau gorgée dans la mousse se dilate et peut micro-fissurer les tuiles (terre cuite ou béton) ou déliter les ardoises. À terme, cela conduit à des infiltrations d'eau et à une porosité accrue du matériau.</p>
                
                <h3>Le traitement hydrofuge : une barrière invisible</h3>
                <p>Après un nettoyage minutieux (sans haute pression excessive pour ne pas abîmer le support), l'application d'un produit hydrofuge est fortement recommandée. Ce traitement imperméabilise la tuile : l'eau de pluie perle à la surface au lieu d'imprégner le matériau, emportant avec elle les salissures. C'est ce qu'on appelle l'effet auto-nettoyant.</p>

                <h3>Quand réaliser cet entretien ?</h3>
                <p>L'idéal est d'intervenir au printemps (après les gels de l'hiver) ou à la fin de l'automne (après la chute des feuilles). Un entretien régulier tous les 5 à 10 ans permet de prolonger la durée de vie de votre toit de plusieurs décennies.</p>
            `
        }
    },
    {
        slug: "menuiserie",
        name: "Menuiserie",
        seoTitle: "Menuiserie Intérieure & Extérieure",
        category: "Menuiserie",
        hero: {
            title: "Vos projets bois, alu et PVC",
            subtitle: "Portes, volets, placards, parquets : l'expertise du sur-mesure.",
            image: "/images/menuiserie-hero.jpg",
        },
        process: {
            title: "Du conseil à la pose",
            steps: [
                { title: "Conception", description: "Choix des matériaux et du design." },
                { title: "Fabrication", description: "Découpe et assemblage en atelier ou usine partenaire." },
                { title: "Installation", description: "Ajustements finaux sur place." },
            ],
        },
        benefits: {
            title: "L'art de la menuiserie",
            items: [
                { icon: "PenTool", title: "Sur-mesure", description: "Adapté au millimètre à votre configuration." },
                { icon: "Layers", title: "Durabilité", description: "Matériaux robustes et quincaillerie de qualité." },
            ],
        },
        pricing: {
            title: "Exemples de prix",
            items: [
                { service: "Porte d'entrée Alu", price: "1500 - 4000", unit: "€" },
                { service: "Volet roulant électrique", price: "400 - 800", unit: "€" },
            ],
        },
        faq: [
            { question: "Faites-vous des placards aménagés ?", answer: "Oui, nous concevons des dressings et placards sur-mesure optimisés." },
        ],
        directoryPageContent: {
            intro: "La menuiserie englobe un large éventail de travaux essentiels à l'aménagement et à la sécurité de votre habitat. Que ce soit pour une porte d'entrée sécurisée, des volets roulants motorisés ou un dressing sur-mesure, nos artisans menuisiers allient esthétisme et fonctionnalité.",
            description: `
                <h3>Menuiserie extérieure : Sécurité et Isolation</h3>
                <p>La porte d'entrée et les volets jouent un rôle clé dans la sécurité de votre maison mais aussi dans son isolation. Opter pour des volets roulants en aluminium avec âme isolante permet de créer un matelas d'air protecteur devant vos fenêtres, réduisant les pertes thermiques la nuit.</p>
                
                <h3>Menuiserie intérieure : Optimisation de l'espace</h3>
                <p>Gagnez de la place et organisez votre intérieur grâce à des solutions sur-mesure :</p>
                <ul>
                    <li><strong>Dressings et placards :</strong> Exploitez chaque recoin, même sous pente, avec des aménagements pensés pour vos besoins.</li>
                    <li><strong>Portes intérieures :</strong> De la porte à galandage qui disparaît dans la cloison à la verrière style atelier, la menuiserie structure vos espaces.</li>
                    <li><strong>Parquets et escaliers :</strong> Le bois apporte une chaleur incomparable. La restauration ou la pose d'un nouveau parquet transforme radicalement une pièce.</li>
                </ul>
            `
        }
    },
    {
        slug: "pompe-a-chaleur-air-air",
        name: "Pompe à chaleur air/air",
        seoTitle: "Installation PAC Air/Air",
        category: "Chauffage",
        hero: {
            title: "Chauffage dynamique et économique",
            subtitle: "La solution idéale pour chauffer rapidement et climatiser.",
            image: "/images/pac-air-air-hero.jpg",
        },
        process: {
            title: "Fonctionnement",
            steps: [
                { title: "Captation", description: "L'unité extérieure puise les calories." },
                { title: "Diffusion", description: "Les splits intérieurs soufflent l'air chaud (ou froid)." },
            ],
        },
        benefits: {
            title: "Avantages PAC Air/Air",
            items: [
                { icon: "Zap", title: "Réactivité", description: "Montée en température très rapide." },
                { icon: "Filter", title: "Assainissement", description: "Filtre l'air ambiant et réduit l'humidité." },
            ],
        },
        pricing: {
            title: "Budget PAC Air/Air",
            items: [
                { service: "Installation complète (3 splits)", price: "5000 - 8000", unit: "€" },
            ],
        },
        faq: [
            { question: "Quelle différence avec la clim réversible ?", answer: "C'est la même technologie. Le terme PAC air/air est souvent utilisé quand la fonction principale recherchée est le chauffage." },
        ],
        directoryPageContent: {
            intro: "Souvent confondue avec la climatisation réversible, la Pompe à Chaleur Air/Air est avant tout un système de chauffage ultra-performant. Elle est particulièrement adaptée aux maisons équipées de radiateurs électriques, offrant une alternative bien moins énergivore.",
            description: `
                <h3>Un chauffage réactif et pilotable</h3>
                <p>L'un des grands atouts de la PAC Air/Air est sa réactivité. Contrairement à un plancher chauffant qui a une grande inertie, la diffusion d'air chaud permet d'augmenter la température d'une pièce en quelques minutes seulement. Idéal pour les résidences secondaires ou les modes de vie actifs.</p>
                
                <h3>Qualité de l'air intérieur</h3>
                <p>Les unités intérieures (splits ou consoles) sont équipées de systèmes de filtration performants. Elles retiennent les poussières, pollens et allergènes, et déshumidifient l'air. C'est un confort supplémentaire pour les personnes sensibles.</p>

                <h3>Une installation flexible</h3>
                <p>Il existe plusieurs types d'unités pour s'intégrer à votre décoration :</p>
                <ul>
                    <li><strong>Mural :</strong> Fixé en hauteur, le plus classique et économique.</li>
                    <li><strong>Console :</strong> Posée au sol comme un radiateur, idéale en rénovation.</li>
                    <li><strong>Gainable :</strong> Dissimulé dans les combles ou un faux-plafond, seules des grilles de diffusion discrètes sont visibles. C'est la solution haut de gamme par excellence.</li>
                </ul>
            `
        }
    },
    {
        slug: "ascenseur",
        name: "Ascenseur",
        seoTitle: "Installation Ascenseur Privatif",
        category: "Accessibilité",
        hero: {
            title: "Le luxe et l'accessibilité chez vous",
            subtitle: "Installation d'ascenseurs privatifs pour maison individuelle.",
            image: "/images/ascenseur-hero.jpg",
        },
        process: {
            title: "Votre projet d'élévation",
            steps: [
                { title: "Faisabilité", description: "Étude de la structure et de l'espace disponible." },
                { title: "Génie civil", description: "Ouverture de trémie ou création de gaine." },
                { title: "Installation", description: "Montage de la cabine et machinerie." },
            ],
        },
        benefits: {
            title: "Valorisez votre bien",
            items: [
                { icon: "TrendingUp", title: "Plus-value", description: "Augmente significativement la valeur immobilière." },
                { icon: "User", title: "Maintien à domicile", description: "Solution pérenne pour vieillir chez soi." },
            ],
        },
        pricing: {
            title: "Coût ascenseur particulier",
            items: [
                { service: "Ascenseur privatif (2 niveaux)", price: "15000 - 25000", unit: "€" },
            ],
        },
        faq: [
            { question: "Quelle maintenance ?", answer: "Une visite de maintenance annuelle est recommandée (et souvent obligatoire selon le contrat)." },
        ],
        directoryPageContent: {
            intro: "L'ascenseur privatif n'est plus un luxe réservé aux grandes demeures. Compacts, silencieux et design, les modèles actuels s'intègrent dans de nombreuses maisons individuelles, apportant une réponse définitive aux problèmes de mobilité verticale.",
            description: `
                <h3>Sécurité et Confort Absolu</h3>
                <p>Contrairement au monte-escalier où l'on reste assis dans un espace ouvert, l'ascenseur de maison offre une cabine fermée et sécurisée. C'est la solution idéale pour le transport des personnes en fauteuil roulant, mais aussi pour monter les courses, les bagages ou la poussette.</p>
                
                <h3>Intégration architecturale</h3>
                <p>L'installation peut se faire de deux manières :</p>
                <ul>
                    <li><strong>En gaine maçonnée :</strong> L'ascenseur circule à l'intérieur d'un mur porteur ou d'une structure créée pour l'occasion. C'est la solution la plus discrète.</li>
                    <li><strong>En structure autoportante (pylône) :</strong> Une structure en métal et/ou verre est installée, souvent au cœur de l'escalier existant ou même en façade extérieure. Cela apporte une touche architecturale moderne et lumineuse à votre intérieur.</li>
                </ul>

                <h3>Technologie hydraulique ou électrique ?</h3>
                <p>La plupart des ascenseurs privatifs utilisent une technologie hydraulique ou à vis sans fin, plus compacte et moins énergivore que les ascenseurs d'immeubles collectifs (pas de local machinerie encombrant nécessaire). Ils se branchent souvent sur une simple prise électrique domestique.</p>
            `
        }
    },
    {
        slug: "isolation",
        name: "Isolation",
        seoTitle: "Travaux d'Isolation Générale",
        category: "Isolation",
        hero: {
            title: "Améliorez votre confort thermique",
            subtitle: "Solutions globales d'isolation pour murs, sols et plafonds.",
            image: "/images/isolation-hero.jpg",
        },
        process: {
            title: "Approche globale",
            steps: [
                { title: "Audit énergétique", description: "Identifier les ponts thermiques." },
                { title: "Préconisation", description: "Mix de solutions (ITI, sols, etc.)." },
            ],
        },
        benefits: {
            title: "Pourquoi isoler ?",
            items: [
                { icon: "Thermometer", title: "Bien-être", description: "Température homogène dans toute la maison." },
                { icon: "Euro", title: "Économies", description: "Réduisez drastiquement vos besoins en chauffage." },
            ],
        },
        pricing: {
            title: "Prix au m²",
            items: [
                { service: "Isolation intérieure (cloisons)", price: "40 - 80", unit: "€/m²" },
                { service: "Isolation plancher bas", price: "30 - 60", unit: "€/m²" },
            ],
        },
        faq: [
            { question: "Par où commencer ?", answer: "La toiture est souvent la priorité (30% des pertes), suivie des murs (25%)." },
        ],
        directoryPageContent: {
            intro: "Une maison bien isolée est la clé du confort et des économies d'énergie. L'isolation globale permet de traiter l'enveloppe du bâtiment dans son ensemble pour supprimer les parois froides et maintenir une température stable.",
            description: `
                <h3>Isolation des planchers bas et caves</h3>
                <p>On l'oublie souvent, mais 10% des pertes de chaleur se font par le sol. Isoler le plafond de votre cave, garage ou vide-sanitaire est une opération rapide qui coupe le froid remontant du sol. C'est indispensable pour le confort de marche (plus de sensation de carrelage glacé).</p>
                
                <h3>L'Isolation Thermique par l'Intérieur (ITI)</h3>
                <p>Si un ravalement de façade n'est pas prévu, l'isolation des murs par l'intérieur reste une solution efficace et moins onéreuse que par l'extérieur. Elle consiste à poser des panneaux isolants (laine de verre, polystyrène) contre les murs froids, recouverts d'une contre-cloison. Attention toutefois à la légère perte de surface habitable.</p>

                <h3>Matériaux biosourcés : l'alternative écologique</h3>
                <p>De plus en plus de propriétaires se tournent vers des isolants naturels comme la fibre de bois, le chanvre, le liège ou la ouate de cellulose. Plus respectueux de l'environnement, ils offrent souvent de meilleures performances en termes de gestion de l'humidité (perspirance) et de confort acoustique.</p>
            `
        }
    },
];
