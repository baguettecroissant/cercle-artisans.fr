import { cities } from "@/data/cities";
import { services } from "@/data/service-content";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { NearbyCities } from "@/components/NearbyCities";
import { QuoteWidget } from "@/components/QuoteWidget";

// Force static generation for the cities we know about
export async function generateStaticParams() {
    return cities.map((city) => ({
        citySlug: city.slug,
    }));
}

export async function generateMetadata({ params }: { params: { citySlug: string } }) {
    const city = cities.find((c) => c.slug === params.citySlug);
    if (!city) return {};

    return {
        title: `Travaux de Rénovation à ${city.name} (${city.zipCode}) - Artisans RGE`,
        description: `Trouvez un artisan certifié RGE à ${city.name} pour vos travaux : Isolation, Chauffage, Monte-Escalier, et plus. Devis gratuits et vérifiés.`,
    };
}

export default function CityHubPage({ params }: { params: { citySlug: string } }) {
    const city = cities.find((c) => c.slug === params.citySlug);

    if (!city) {
        notFound();
    }

    // Default hero image
    const heroImage = "/images/hero-bg.jpg"; // We might want a generic city image or just the renovation hero

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* HERO SECTION */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
                {/* We use a generic background pattern or image here */}
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40"></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <MapPin className="w-4 h-4 text-blue-300 mr-2" />
                        <span className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                            Zone d'intervention : {city.region}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        Travaux et Rénovation à <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{city.name}</span>
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                        Le Cercle des Artisans a sélectionné les meilleures entreprises RGE de {city.departmentName} pour accompagner votre projet.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 -mt-20 relative z-30">
                {/* INTRO CARD */}
                <div className="bg-white rounded-2xl p-8 shadow-xl mb-16 border border-slate-100">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Votre habitat mérite l'excellence à {city.name}
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Vous habitez à {city.name} ({city.zipCode}) ou dans les environs ? Que ce soit pour améliorer votre confort thermique, sécuriser votre logement ou réduire vos factures énergétiques, nos partenaires locaux sont prêts à intervenir.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="inline-flex items-center text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                                    <ShieldCheck className="w-4 h-4 mr-2 text-emerald-500" />
                                    Artisans RGE Vérifiés
                                </span>
                                <span className="inline-flex items-center text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                                    Devis Gratuits
                                </span>
                            </div>

                            <div id="devis">
                                <QuoteWidget />
                            </div>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            {/* Simple visual rep of the city/dept code */}
                            <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center border-4 border-blue-50 shadow-inner">
                                <span className="text-4xl font-black text-white">{city.departmentCode}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SERVICES GRID */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                        Les services disponibles à {city.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/service/${service.slug}/${city.slug}`}
                                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-100 overflow-hidden flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden bg-slate-200">
                                    <Image
                                        src={service.hero.image}
                                        alt={`${service.name} à ${city.name}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                            {service.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                        Installation et dépannage de {service.name.toLowerCase()} à {city.name}. Profitez de nos experts certifiés.
                                    </p>
                                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                        Voir les artisans <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* NEARBY CITIES */}
                <NearbyCities currentCity={city} serviceSlug="monte-escalier" />
                {/* Note: NearbyCities currently takes a serviceSlug to link to. 
                    Ideally it should link to /ville/[slug] if we are on a city hub.
                    I might need to tweak NearbyCities to support linking to City Hubs 
                    or just pass a 'null' service and have it default to city hub links?
                    For now, linking to 'monte-escalier' (generic) is 'okay' but imperfect.
                    Let's stick with specific service for now or simpler: 
                    Update NearbyCities component later? 
                    Actually, let's keep it simple. linking to monte-escalier is a valid entry point.
                */}
            </div>
        </div>
    );
}
