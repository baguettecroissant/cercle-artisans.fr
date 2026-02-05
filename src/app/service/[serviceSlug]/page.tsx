import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services } from "@/data/service-content";
import { getAllRegions, getServiceBySlug } from "@/lib/data";
import { cities } from "@/data/cities";
import { ChevronRight, MapPin } from "lucide-react";

export async function generateStaticParams() {
    return services.map((service) => ({
        serviceSlug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: { serviceSlug: string } }): Promise<Metadata> {
    const service = getServiceBySlug(params.serviceSlug);
    if (!service) return {};

    return {
        title: `${service.name} : Trouvez un artisan qualifié en France`,
        description: `Annuaire des ${service.name}s certifiés par région et département. Devis gratuit et intervention rapide partout en France.`,
    };
}

export default function ServiceIndexPage({ params }: { params: { serviceSlug: string } }) {
    const service = getServiceBySlug(params.serviceSlug);
    if (!service) notFound();

    const regions = getAllRegions();

    // Top cities for shortcuts
    const topCities = cities.slice(0, 20);

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-blue-600">Accueil</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-semibold text-gray-800">{service.name}</span>
            </nav>

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">{service.name} : Zone d'intervention</h1>
                {service.directoryPageContent?.intro ? (
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {service.directoryPageContent.intro}
                    </p>
                ) : (
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Sélectionnez votre région pour trouver un artisan {service.name.toLowerCase()} certifié près de chez vous.
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {regions.map((region) => (
                    <Link
                        key={region}
                        href={`/service/${service.slug}/region/${region}`}
                        className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition group"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 capitalize">
                                {region.replace(/-/g, " ")}
                            </h2>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600" />
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Voir les départements
                        </p>
                    </Link>
                ))}
            </div>

            {/* SEO Content Section */}
            {service.directoryPageContent?.description && (
                <div className="prose prose-lg max-w-4xl mx-auto mb-16 text-gray-700 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div dangerouslySetInnerHTML={{ __html: service.directoryPageContent.description }} />
                </div>
            )}

            {/* Quick Links to Major Cities */}
            <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Top Villes</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {topCities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/service/${service.slug}/${city.slug}`}
                            className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:border-blue-500 hover:text-blue-600 transition"
                        >
                            <MapPin className="w-3 h-3 mr-2" />
                            {city.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
