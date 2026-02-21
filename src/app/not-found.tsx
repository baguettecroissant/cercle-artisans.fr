import Link from "next/link";
import { Home, Search, ArrowRight, BookOpen, Wrench } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="max-w-xl text-center">
                <div className="text-8xl font-black text-blue-600 mb-4">404</div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">
                    Page introuvable
                </h1>
                <p className="text-lg text-slate-600 mb-10">
                    La page que vous cherchez n'existe pas ou a été déplacée. Mais pas de panique, voici quelques liens utiles :
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <Link
                        href="/"
                        className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition group"
                    >
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <Home className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition">Accueil</span>
                            <p className="text-xs text-slate-500">Retour à la page principale</p>
                        </div>
                    </Link>

                    <Link
                        href="/service"
                        className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition group"
                    >
                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                            <Wrench className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition">Nos Services</span>
                            <p className="text-xs text-slate-500">Isolation, PAC, climatisation…</p>
                        </div>
                    </Link>

                    <Link
                        href="/blog"
                        className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition group"
                    >
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition">Blog & Guides</span>
                            <p className="text-xs text-slate-500">Conseils et aides financières</p>
                        </div>
                    </Link>

                    <Link
                        href="/devis"
                        className="flex items-center gap-3 p-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition group text-white"
                    >
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <span className="font-semibold">Demander un Devis</span>
                            <p className="text-xs text-blue-100">Gratuit et sans engagement</p>
                        </div>
                    </Link>
                </div>

                <Link
                    href="/annuaire"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition"
                >
                    <Search className="w-4 h-4 mr-2" />
                    Rechercher par ville dans notre annuaire
                </Link>
            </div>
        </div>
    );
}
