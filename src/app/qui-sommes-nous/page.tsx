import { Shield, Target, Heart, Award, Users, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Qui sommes-nous ? Le Cercle des Artisans - Réseau RGE",
    description: "Découvrez Le Cercle des Artisans, le premier réseau d'entreprises RGE sélectionnées pour vos travaux de rénovation énergétique en France.",
};

export default function QuiSommesNous() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        L'excellence artisanale au service de votre habitat
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Nous fédérons les meilleurs experts de la rénovation énergétique pour garantir la réussite de vos projets, partout en France.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 max-w-5xl">

                {/* Story Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/trust-badges.jpg"
                            alt="Illustration confiance et certifications RGE"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Pourquoi "Le Cercle des Artisans" ?
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                            <p>
                                La rénovation énergétique est un enjeu majeur, mais le parcours est souvent semé d'embûches pour les particuliers : artisans injoignables, devis opaques, malfaçons, arnaques aux aides de l'État...
                            </p>
                            <p>
                                C'est pour répondre à ce besoin de <strong>transparence</strong> et de <strong>sécurité</strong> que nous avons créé <em>Le Cercle des Artisans</em>.
                            </p>
                            <p>
                                Notre mission est simple : <strong>sélectionner, vérifier et recommander</strong>. Nous ne sommes pas une simple annuaire. Nous sommes un filtre d'exigence. Nous auditons chaque entreprise partenaire pour nous assurer qu'elle détient les labels requis (RGE, Qualibat, QualiPAC) et qu'elle partage nos valeurs de service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Charte Qualité */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Notre Charte Qualité et Sélection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex gap-4">
                            <div className="mt-1"><Award className="w-8 h-8 text-blue-600" /></div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Certifications à jour</h3>
                                <p className="text-slate-600">Nous vérifions systématiquement la validité des labels RGE (Reconnu Garant de l'Environnement) de nos partenaires. C'est la garantie sine qua non pour l'obtention de vos aides (MaPrimeRénov', CEE).</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex gap-4">
                            <div className="mt-1"><Shield className="w-8 h-8 text-emerald-600" /></div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Santé financière solide</h3>
                                <p className="text-slate-600">Un chantier qui dure est un chantier à risque. Nous privilégions les entreprises pérennes, avec un bilan financier sain, pour éviter les abandons de chantier.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex gap-4">
                            <div className="mt-1"><Users className="w-8 h-8 text-amber-500" /></div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Réputation locale</h3>
                                <p className="text-slate-600">Nous analysons les avis clients existants sur plusieurs plateformes. Un bon artisan est avant tout un artisan recommandé par ses voisins.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex gap-4">
                            <div className="mt-1"><CheckCircle className="w-8 h-8 text-purple-600" /></div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Assurances Décennales</h3>
                                <p className="text-slate-600">Copie de l'attestation d'assurance décennale et responsabilité civile professionnelle exigée pour chaque dossier.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-blue-600 rounded-2xl p-12 text-center text-white shadow-xl">
                    <h2 className="text-3xl font-bold mb-4">Rejoignez un réseau d'excellence</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Vous avez un projet de rénovation ? Ne laissez rien au hasard. Faites appel à un membre du Cercle.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/annuaire" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition">
                            Voir nos zones d'intervention
                        </Link>
                        <Link href="/service" className="bg-blue-700 text-white border border-blue-400 font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition">
                            Découvrir nos services
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
