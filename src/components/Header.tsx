"use client";

import { useState } from "react";
import Link from "next/link";
import { Hammer, Phone, Menu, X } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:scale-110 transition-transform">
                        <Hammer className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                            Le Cercle
                        </span>
                        <span className="block text-xs font-semibold text-blue-600 uppercase tracking-widest leading-none">
                            des Artisans
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Accueil
                    </Link>
                    <Link href="/service" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Nos Services
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Blog
                    </Link>
                    <Link href="/annuaire" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Zones d'intervention
                    </Link>
                </nav>

                <Link
                    href="/devis"
                    className="hidden md:flex items-center bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                >
                    <Phone className="w-4 h-4 mr-2" />
                    Demander un devis
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col space-y-4">
                    <Link
                        href="/"
                        className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/service"
                        className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Nos Services
                    </Link>
                    <Link
                        href="/blog"
                        className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/annuaire"
                        className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Zones d'intervention
                    </Link>
                    <Link
                        href="/devis"
                        className="bg-blue-600 text-white font-bold p-3 rounded-lg text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Demander un devis
                    </Link>
                </div>
            )}
        </header>
    );
}
