import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
    getPageData,
    getAllServiceCityCombinations,
    getNearbyCities,
    getOtherServices,
    getCitiesByDepartment,
    getCitiesByRegion
} from "@/lib/data";
import { SectionIntro, SectionProcess, SectionBenefits, SectionPricing, SectionFAQ, NearbyCities } from "@/components/programmatic/Sections";

import Link from "next/link";
import Image from "next/image";
import { QuoteWidget } from "@/components/QuoteWidget";
import { ChevronRight } from "lucide-react";

// 1. Generate Static Params (The "Programmatic" part)
export async function generateStaticParams() {
    const combinations = getAllServiceCityCombinations();
    return combinations;
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: { params: { serviceSlug: string; citySlug: string } }): Promise<Metadata> {
    const data = await getPageData(params.serviceSlug, params.citySlug);
    if (!data) return {};

    const { service, city } = data;

    return {
        title: `${service.seoTitle} à ${city.name} (${city.zipCode}) - Devis Gratuit`,
        description: `Trouvez le meilleur ${service.name} à ${city.name}. ${service.hero.subtitle} Intervention rapide sur ${city.region}.`,
        alternates: {
            canonical: `/service/${params.serviceSlug}/${params.citySlug}`,
        },
    };
}

// 3. Helper for Deterministic Shuffling (Seeded Random)
function seededRandom(seed: number) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function shuffleArray<T>(array: T[], seedStr: string): T[] {
    // Simple hash of seedStr
    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) {
        seed += seedStr.charCodeAt(i);
    }

    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed + i) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 4. Page Component
export default async function ProgrammaticPage({ params }: { params: { serviceSlug: string; citySlug: string } }) {
    const data = await getPageData(params.serviceSlug, params.citySlug);

    if (!data) {
        notFound();
    }

    const { service, city, regional, local } = data;
    const nearbyCities = getNearbyCities(city.slug);
    const otherServices = getOtherServices(service.slug);

    // NEW: Hierarchical Mesh Data
    const departmentCities = getCitiesByDepartment(city.departmentCode).filter(c => c.slug !== city.slug).slice(0, 10);
    const regionCities = getCitiesByRegion(city.region).filter(c => c.slug !== city.slug).slice(0, 12);

    // Deterministic H1 Variation
    const h1Variants = [
        `${service.name} à ${city.name}`,
        `Trouver un ${service.name} - ${city.name}`,
        `${city.name} : Votre ${service.name} Qualifié`,
        `Besoin d'un ${service.name} à ${city.name} ?`,
    ];
    // Pick specific variant based on city length (simple deterministic choice)
    const h1Index = city.slug.length % h1Variants.length;
    const dynamicH1 = h1Variants[h1Index];

    // Sections to Shuffle
    const shuffledSections = shuffleArray(["process", "benefits"], city.slug);

    // Schema.org
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": service.name,
                "areaServed": {
                    "@type": "City",
                    "name": city.name
                },
                "description": service.hero.subtitle,
                "provider": {
                    "@type": "Organization",
                    "name": "Le Cercle des Artisans"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": "https://www.cercle-artisans.fr"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": service.name,
                        "item": `https://www.cercle-artisans.fr/service/${service.slug}/paris` // Ideal: /service/slug/
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": city.departmentName, // Region/Dept in Breadcrumb
                        "item": `https://www.cercle-artisans.fr` // Placeholders for now until directory pages exist
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": city.name
                    }
                ]
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* JSON-LD Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumbs UI */}
            <nav className="flex text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap capitalize">
                <Link href="/" className="hover:text-blue-600">Accueil</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href={`/service/${service.slug}`} className="hover:text-blue-600">{service.name}</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href={`/service/${service.slug}/region/${city.region}`} className="hover:text-blue-600">{city.region.replace(/-/g, " ")}</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href={`/service/${service.slug}/departement/${city.departmentCode}`} className="hover:text-blue-600">{city.departmentName} ({city.departmentCode})</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-semibold text-gray-800">{city.name}</span>
            </nav>

            {/* Hero Section (Always Top) */}
            <div className="mb-12 text-center py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10 px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4 border border-white/30">
                        {regional.regionName} — Intervention Immédiate
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        {dynamicH1}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                        {service.hero.subtitle}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/devis" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1 inline-block">
                            Demander un Devis Gratuit
                        </Link>
                        {/* Phone number removed as per request */}
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-8">
                {/* Main Content */}
                <div className="lg:w-2/3">

                    {/* 1. Intro (Always First) */}
                    <SectionIntro
                        title={`Expertise et savoir-faire à ${city.name}`}
                        content={service.hero.subtitle} // fallback content
                        city={city}
                        local={local}
                    />

                    {/* 2. Shuffled Sections */}
                    {shuffledSections.map(key => {
                        if (key === "process") return <SectionProcess key="process" process={service.process} />;
                        if (key === "benefits") return <SectionBenefits key="benefits" benefits={service.benefits} />;
                        return null;
                    })}

                    {/* 3. Pricing (Fixed position for clarity) */}
                    <SectionPricing pricing={service.pricing} regional={regional} />

                    {/* 4. FAQ */}
                    <SectionFAQ genericFaq={service.faq} localFaq={local?.localFaq} city={city} />

                    {/* ---------------- MEILLEURSAGENTS STYLE MESH ---------------- */}
                    <div className="mt-16 space-y-12">

                        {/* Department Mesh */}
                        {departmentCities.length > 0 && (
                            <div className="pt-8 border-t border-gray-200">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                                    {service.name} dans le département {city.departmentName} ({city.departmentCode})
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {departmentCities.map(c => (
                                        <Link
                                            key={c.slug}
                                            href={`/service/${service.slug}/${c.slug}`}
                                            className="text-gray-600 hover:text-blue-600 hover:underline text-sm flex items-center"
                                        >
                                            <ChevronRight className="w-3 h-3 mr-1 text-gray-300" />
                                            {c.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Region Mesh */}
                        <div className="pt-8 border-t border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">
                                {service.name} en région {city.region}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {regionCities.map(c => (
                                    <Link
                                        key={c.slug}
                                        href={`/service/${service.slug}/${c.slug}`}
                                        className="px-3 py-1 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full text-sm transition"
                                    >
                                        {c.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Semantic Mesh (Other Services) */}
                        <div className="pt-8 border-t border-gray-200">
                            <h3 className="text-2xl font-bold mb-6">Autres services disponibles à {city.name}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {otherServices.map(s => (
                                    <Link
                                        key={s.slug}
                                        href={`/service/${s.slug}/${city.slug}`}
                                        className="flex items-center p-4 bg-white border rounded-lg hover:shadow-md transition group"
                                    >
                                        <span className="font-semibold text-gray-700 group-hover:text-blue-600">{s.name}</span>
                                        <span className="ml-auto text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition">Voir</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="mt-8">
                        <NearbyCities cities={nearbyCities} serviceSlug={service.slug} />
                    </div>

                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24">
                        <QuoteWidget />
                    </div>

                    {local?.localTip && (
                        <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                            <h4 className="font-bold text-green-800 mb-2">Conseil Local</h4>
                            <p className="text-green-700 text-sm">{local.localTip}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
