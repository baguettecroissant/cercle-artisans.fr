export const metadata = {
    title: "Politique de Confidentialité - Le Cercle des Artisans",
    description:
        "Transparence sur la collecte et l'usage de vos données personnelles.",
    alternates: {
        canonical: "/politique-confidentialite",
    },
};

export default function PolitiqueConfidentialite() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-2 text-slate-900">
                Politique de Confidentialité et Données Personnelles
            </h1>
            <p className="text-slate-500 mb-10">Dernière mise à jour : 14 Janvier 2026</p>

            <div className="space-y-8 text-slate-700">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        1. Responsable du traitement
                    </h2>
                    <p>
                        Le responsable du traitement des données collectées sur ce site est la
                        société <strong>WADE STUDIO LTD</strong>, sise au 432 Ave Bounty,
                        Morcellement Balaclava, MAURITIUS (BRN: C25227533).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        2. Nature des données collectées
                    </h2>
                    <p className="mb-4">
                        Dans le cadre de l'utilisation du service de demande de devis, nous
                        sommes amenés à collecter les données suivantes :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Identité :</strong> Nom, Prénom.
                        </li>
                        <li>
                            <strong>Coordonnées :</strong> Adresse email, Numéro de téléphone,
                            Code postal, Ville.
                        </li>
                        <li>
                            <strong>Projet :</strong> Type de travaux, surface, échéance.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        3. Finalité du traitement
                    </h2>
                    <p className="mb-4">Vos données sont collectées pour :</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Mise en relation :</strong> Transmettre votre demande de
                            devis à nos partenaires professionnels (artisans et régies
                            d'affiliation) en France afin qu'ils puissent chiffrer votre
                            projet.
                        </li>
                        <li>
                            <strong>Gestion de la relation client :</strong> Suivi de votre
                            demande.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        4. Transmission des données à des tiers
                    </h2>
                    <p className="mb-4">
                        En utilisant le service de demande de devis, l'utilisateur accepte
                        expressément que ses données soient transmises à des partenaires
                        commerciaux situés en France (Entreprises de BTP, Courtiers,
                        Plateformes de mise en relation type Travaux.com/HabitatPresto) dans
                        le seul but de répondre à sa demande.
                    </p>
                    <p>
                        WADE STUDIO LTD s'engage à ne pas vendre vos données à des tiers
                        pour des usages sans lien avec votre projet de travaux.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        5. Transfert de données hors UE
                    </h2>
                    <p>
                        L'éditeur du site étant établi à Maurice, les données peuvent
                        transiter techniquement hors de l'Union Européenne. WADE STUDIO LTD
                        s'engage à prendre toutes les mesures de sécurité nécessaires pour
                        garantir un niveau de protection des données conforme aux standards
                        du RGPD lors de ces traitements techniques.
                    </p>
                </section>
            </div>
        </div>
    );
}
