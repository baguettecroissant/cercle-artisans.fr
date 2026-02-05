export const metadata = {
    title: "Mentions Légales - Le Cercle des Artisans",
    description: "Mentions légales et informations éditoriales du site Le Cercle des Artisans.",
};

export default function MentionsLegales() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-900">
                Mentions Légales
            </h1>

            <div className="space-y-8 text-slate-700">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        1. Éditeur du site
                    </h2>
                    <p className="mb-2">
                        Le site <strong>cercle-artisans.fr</strong> est édité par la société
                        :
                    </p>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <p className="font-bold text-lg mb-2">WADE STUDIO LTD</p>
                        <p>
                            Société enregistrée auprès du Registrar of Companies de Maurice.
                        </p>
                        <p>
                            <strong>Business Registration Number (BRN) :</strong> C25227533
                        </p>
                        <p>
                            <strong>File No :</strong> C227533
                        </p>
                        <p>
                            <strong>Siège social :</strong> 432 Ave Bounty, Morcellement
                            Balaclava, MAURITIUS.
                        </p>
                        <p className="mt-4">
                            <strong>Email de contact :</strong> contact@cercle-artisans.fr
                        </p>
                        <p>
                            <strong>Directeur de la publication :</strong> Wade Timothy
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        2. Hébergement
                    </h2>
                    <p className="mb-2">Le site est hébergé par la société :</p>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <p className="font-bold">Vercel Inc.</p>
                        <p>Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
                        <p className="text-sm mt-2 text-slate-500">
                            Le stockage des données est assuré sur des serveurs sécurisés.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        3. Propriété intellectuelle
                    </h2>
                    <p>
                        L'ensemble de ce site relève de la législation internationale sur le
                        droit d'auteur et la propriété intellectuelle. Tous les droits de
                        reproduction sont réservés. La marque "WADE STUDIO LTD" et le nom de
                        domaine "cercle-artisans.fr" sont la propriété exclusive de
                        l'éditeur.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">
                        4. Limitation de responsabilité
                    </h2>
                    <p className="mb-4">
                        Le site <strong>cercle-artisans.fr</strong> agit en tant
                        qu'intermédiaire technique (apporteur d'affaires). Il a pour but de
                        faciliter la mise en relation entre des particuliers et des
                        professionnels du bâtiment via des partenaires affiliés.
                    </p>
                    <p className="mb-4">
                        La société <strong>WADE STUDIO LTD</strong> n'est pas une entreprise
                        de bâtiment et n'effectue aucun travaux.
                    </p>
                    <p>
                        En conséquence, la responsabilité de l'éditeur ne saurait être
                        engagée en cas de litige relatif à l'exécution des travaux (malfaçon,
                        retard, prix) qui reste de la responsabilité exclusive de l'artisan
                        sélectionné par l'utilisateur.
                    </p>
                </section>
            </div>
        </div>
    );
}
