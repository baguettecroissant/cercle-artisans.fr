import { FileText, Users, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Comment ça marche ? Devis Travaux RGE - Le Cercle des Artisans",
    description: "Processus simple en 3 étapes : description du projet, sélection de l'expert, réalisation des travaux. Service gratuit et sans engagement.",
    alternates: {
        canonical: "/comment-ca-marche",
    },
};

export default function CommentCaMarche() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-16 max-w-5xl">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        Votre projet de rénovation,<br />simplement et sereinement
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Fini le parcours du combattant. Nous avons simplifié la mise en relation avec des artisans de confiance.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-24">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-slate-200 -z-0"></div>

                    {/* Step 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center h-full">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 border-4 border-white shadow-sm">
                            <FileText className="w-10 h-10" />
                        </div>
                        <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Étape 1</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Qualifiez votre besoin
                        </h3>
                        <p className="text-slate-600">
                            Utilisez nos formulaires intelligents pour décrire votre projet (Isolation, Pompe à chaleur, Fenêtres...). Cela prend moins de 2 minutes et nous permet de comprendre les spécificités techniques de votre logement.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center h-full">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 border-4 border-white shadow-sm">
                            <Users className="w-10 h-10" />
                        </div>
                        <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Étape 2</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Matching expert
                        </h3>
                        <p className="text-slate-600">
                            Notre algorithme de correspondance géolocalisé identifie instantanément les artisans RGE disponibles dans votre zone (Département/Ville) qui possèdent les qualifications requises pour VOTRE type de chantier.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center h-full">
                        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6 border-4 border-white shadow-sm">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <div className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Étape 3</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Comparaison & Choix
                        </h3>
                        <p className="text-slate-600">
                            Vous êtes contacté par téléphone sous 24h à 48h. Les artisans se déplacent pour une visite technique si nécessaire et vous remettent leurs devis. Vous comparez les prix et les prestations en toute liberté.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center">
                        <HelpCircle className="w-8 h-8 mr-3 text-blue-600" />
                        Questions Fréquentes
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Est-ce que le service est vraiment gratuit ?</h3>
                            <p className="text-slate-600">Oui, totalement. Le service de mise en relation est 100% gratuit pour les particuliers. Nous sommes rémunérés par les professionnels pour les opportunités de chantiers que nous leur apportons (modèle d'apporteur d'affaires).</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Suis-je obligé de signer avec l'un des artisans ?</h3>
                            <p className="text-slate-600">Absolument pas. Les demandes de devis sont sans engagement. Si aucune proposition ne vous convient, vous êtes libre de ne pas donner suite.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Pourquoi exiger la mention RGE ?</h3>
                            <p className="text-slate-600">Le label RGE (Reconnu Garant de l'Environnement) est indispensable pour bénéficier des aides de l'État comme MaPrimeRénov', les primes CEE ou l'Éco-PTZ. C'est aussi un gage de compétence technique.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    {/* decorative circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-emerald-600 rounded-full opacity-20 blur-3xl"></div>

                    <h2 className="text-3xl font-bold mb-6 relative z-10">Convaincu ? Lancez votre projet maintenant</h2>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
                        Ne perdez plus de temps à chercher des professionnels au hasard sur internet. Passez par Le Cercle.
                    </p>
                    <Link
                        href="/service/monte-escalier/paris"
                        className="relative z-10 inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition shadow-lg shadow-blue-900/50"
                    >
                        Trouver un artisan certifié <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
