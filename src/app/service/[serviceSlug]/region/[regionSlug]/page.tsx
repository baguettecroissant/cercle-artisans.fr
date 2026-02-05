import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services } from "@/data/service-content";
import { getAllRegions, getServiceBySlug, getDepartmentsByRegion } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
    const params = [];
    const regions = getAllRegions();
    for (const service of services) {
        for (const region of regions) {
            params.push({
                serviceSlug: service.slug,
                regionSlug: region,
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: { params: { serviceSlug: string; regionSlug: string } }): Promise<Metadata> {
    const service = getServiceBySlug(params.serviceSlug);
    if (!service) return {};
    const regionName = params.regionSlug.replace(/-/g, " "); // Simple formatting

    return {
        title: `${service.name} en ${regionName} - Annuaire Départements`,
        description: `Trouvez un expert ${service.name} en région ${regionName}. Sélectionnez votre département.`,
    };
}

export default function RegionIndexPage({ params }: { params: { serviceSlug: string; regionSlug: string } }) {
    const service = getServiceBySlug(params.serviceSlug);
    if (!service) notFound();

    const regionName = params.regionSlug.replace(/-/g, " ");
    const departments = getDepartmentsByRegion(params.regionSlug);

    if (departments.length === 0) {
        // If no departments mapped (e.g. data issue), handle gracefully or 404
        // For now, let's just show empty or notFound if strict
        // notFound(); 
    }

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 mb-8 capitalize">
                <Link href="/" className="hover:text-blue-600">Accueil</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href={`/service/${service.slug}`} className="hover:text-blue-600">{service.name}</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-semibold text-gray-800">{regionName}</span>
            </nav>

            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4 capitalize">{service.name} en {regionName}</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Sélectionnez votre département pour accéder à la liste des villes couvertes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {departments.map((dept) => (
                    <Link
                        key={dept.code}
                        href={`/service/${service.slug}/departement/${dept.code}`}
                        className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-400 transition group"
                    >
                        <div>
                            <span className="block text-xs font-bold text-blue-600 mb-1">Département {dept.code}</span>
                            <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
                                {dept.name}
                            </h2>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600" />
                    </Link>
                ))}
            </div>
        </div>
    );
}
