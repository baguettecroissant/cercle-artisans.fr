import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services } from "@/data/service-content";
import { getServiceBySlug, getAllDepartments, getCitiesByDepartment } from "@/lib/data";
import { ChevronRight, MapPin } from "lucide-react";

export async function generateStaticParams() {
    const params = [];
    const departments = getAllDepartments();
    for (const service of services) {
        for (const dept of departments) {
            params.push({
                serviceSlug: service.slug,
                departmentCode: dept.code,
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: { params: { serviceSlug: string; departmentCode: string } }): Promise<Metadata> {
    const service = getServiceBySlug(params.serviceSlug);
    if (!service) return {};

    // We need to fetch the dept name again or pass it, but simpler to just fetch cities and take the first one's dept name
    const cities = getCitiesByDepartment(params.departmentCode);
    const deptName = cities.length > 0 ? cities[0].departmentName : params.departmentCode;

    return {
        title: `${service.name} dans le ${deptName} (${params.departmentCode}) - Annuaire Villes`,
        description: `Tous les artisans ${service.name} intervenant dans le ${deptName}. Trouvez votre ville.`,
        alternates: {
            canonical: `/service/${params.serviceSlug}/departement/${params.departmentCode}`,
        },
    };
}

export default function DepartmentIndexPage({ params }: { params: { serviceSlug: string; departmentCode: string } }) {
    const service = getServiceBySlug(params.serviceSlug);
    if (!service) notFound();

    const cities = getCitiesByDepartment(params.departmentCode);
    if (cities.length === 0) {
        // If no cities in this department in our DB, handle gracefully
        return notFound();
    }

    const deptName = cities[0].departmentName;
    const regionSlug = cities[0].region;

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 mb-8 capitalize overflow-x-auto whitespace-nowrap">
                <Link href="/" className="hover:text-blue-600">Accueil</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href={`/service/${service.slug}`} className="hover:text-blue-600">{service.name}</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href={`/service/${service.slug}/region/${regionSlug}`} className="hover:text-blue-600">{regionSlug.replace(/-/g, " ")}</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-semibold text-gray-800">{deptName} ({params.departmentCode})</span>
            </nav>

            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">{service.name} - {deptName}</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Nos artisans interviennent dans toutes les villes du département. Sélectionnez votre commune.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {cities.map((city) => (
                    <Link
                        key={city.slug}
                        href={`/service/${service.slug}/${city.slug}`}
                        className="flex items-center p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md hover:border-blue-400 transition"
                    >
                        <MapPin className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium truncate">{city.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
