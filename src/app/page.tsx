import Link from "next/link";
import Image from "next/image";

import { services } from "@/data/service-content";
import { cities } from "@/data/cities";
import { Star, ShieldCheck, Clock, MapPin, ArrowRight, CheckCircle, Shield, Users } from "lucide-react";

export default function Home() {
    // Top 12 major cities for the "Presence" section
    const topCities = cities.slice(0, 12);

    // A default city to link to from the service cards (Paris is usually the best default entry point)
    const defaultCitySlug = "paris";

    return (
        <div className="flex flex-col min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>

                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" />
                        <span className="text-blue-100 text-sm font-medium">1er réseau d'artisans certifiés de France</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                        Trouvez le bon artisan <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            près de chez vous
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Installation, dépannage et rénovation. Comparez les devis de professionnels qualifiés et certifiés RGE.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/devis"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:-translate-y-1 shadow-lg shadow-blue-900/50"
                        >
                            Demander un devis gratuit
                        </Link>
                        <a
                            href="#services"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg transition backdrop-blur-sm"
                        >
                            Voir nos services
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-slate-400">
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-400" /> Devis Gratuits</span>
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-400" /> Artisans Vérifiés</span>
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-400" /> Intervention Rapide</span>
                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos domaines d'intervention</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Nous sélectionnons les meilleures entreprises pour tous vos travaux de rénovation énergétique et d'accessibilité.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/service/${service.slug}`}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                            >
                                <div className="h-48 bg-slate-200 relative overflow-hidden">
                                    <Image
                                        src={service.hero.image}
                                        alt={service.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded tracking-wider">
                                            {service.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {service.name}
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                                        {service.hero.subtitle}
                                    </p>
                                    <div className="flex items-center text-xs text-slate-500 font-medium space-x-3">
                                        <span className="flex items-center">
                                            <ShieldCheck className="w-3 h-3 mr-1" /> Garantie décennale
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" /> Devis 24h
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. VALUE PROPOSITION */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Pourquoi passer par <span className="text-blue-600">Le Cercle des Artisans</span> ?
                            </h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Artisans rigoureusement sélectionnés</h4>
                                        <p className="text-slate-600">Nous vérifions les assurances, les certifications RGE et la santé financière de chaque partenaire.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Avis clients vérifiés</h4>
                                        <p className="text-slate-600">Consultez les retours d'expérience réels pour choisir votre artisan en toute confiance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Réactivité garantie</h4>
                                        <p className="text-slate-600">Obtenez jusqu'à 3 devis comparatifs sous 24 à 48h, gratuitement et sans engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 bg-slate-100 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src="/images/trust-badges.jpg"
                                    alt="Certifications RGE et Qualibat"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TOP CITIES GRID (SEO GATEWAYS) */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Nous intervenons partout en France</h2>
                        <p className="text-slate-600">Retrouvez nos artisans experts dans les plus grandes villes.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {topCities.map((city) => (
                            <Link
                                key={city.slug}
                                // Randomize generic entry point a bit, or just pick a popular service like 'isolation' 
                                // Creating a specific city page would be better, but we only have service/city pages.
                                // Linking to "Isolation" + City is a good generic entry.
                                href={`/ville/${city.slug}`}
                                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center group border border-slate-200"
                            >
                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition">
                                    {city.name}
                                </span>
                                <span className="text-xs text-slate-400 mt-1">{city.zipCode}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/annuaire"
                            className="inline-flex items-center text-slate-500 hover:text-blue-600 font-medium transition"
                        >
                            Voir toutes les villes couvertes <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
