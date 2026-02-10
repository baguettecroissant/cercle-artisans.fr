import Link from "next/link";
import { Hammer, Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="bg-blue-600 p-2 rounded-lg text-white">
                                <Hammer className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xl font-extrabold text-white tracking-tight leading-none">
                                    Le Cercle
                                </span>
                                <span className="block text-xs font-semibold text-blue-400 uppercase tracking-widest leading-none">
                                    des Artisans
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Le premier réseau d'artisans certifiés RGE en France. Nous connectons les particuliers avec des professionnels de confiance pour tous travaux de rénovation énergétique.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Nos Services Phares</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/service/monte-escalier/paris" className="hover:text-blue-400 transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                                    Monte Escalier
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/isolation-exterieur/paris" className="hover:text-blue-400 transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                                    Isolation Extérieure
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/pompe-a-chaleur-air-eau/paris" className="hover:text-blue-400 transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                                    Pompe à Chaleur
                                </Link>
                            </li>
                            <li>
                                <Link href="/service/climatisation/paris" className="hover:text-blue-400 transition-colors flex items-center">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                                    Climatisation Réversible
                                </Link>
                            </li>
                            <li>
                                <Link href="/service" className="text-blue-400 hover:text-white transition-colors font-medium mt-2 inline-block">
                                    Voir tous les services &rarr;
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Useful Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Informations</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/qui-sommes-nous" className="hover:text-white transition-colors">Qui sommes-nous ?</Link></li>
                            <li><Link href="/comment-ca-marche" className="hover:text-white transition-colors">Comment ça marche ?</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Conseils</Link></li>
                            <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                            <li><Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
                            <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Plan du site</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                <a href="mailto:contact@cercle-artisans.fr" className="hover:text-white transition-colors">contact@cercle-artisans.fr</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Le Cercle des Artisans. Tous droits réservés.</p>
                    <p>Fait avec <span className="text-red-500">♥</span> en France.</p>
                </div>
            </div>
        </footer>
    );
}
