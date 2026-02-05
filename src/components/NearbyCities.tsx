import Link from "next/link";
import { getNearbyCities } from "@/lib/data";
import { City } from "@/types";
import { ArrowRight, MapPin } from "lucide-react";

interface NearbyCitiesProps {
    currentCity: City;
    serviceSlug?: string;
}

export function NearbyCities({ currentCity, serviceSlug = "monte-escalier" }: NearbyCitiesProps) {
    const nearbyCities = getNearbyCities(currentCity.slug);

    if (nearbyCities.length === 0) return null;

    return (
        <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                Artisans RGE à proximité de {currentCity.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {nearbyCities.map((city) => (
                    <Link
                        key={city.slug}
                        // If we are on a service page, link to neighbor service page.
                        // If generic (serviceSlug not provided or default), ideally link to City Hub?
                        // For now let's stick to the requested logic: linking to service pages is good for conversion.
                        // But if we want to link city-to-city, we could use /ville/[slug].
                        // Adding a check: if serviceSlug is "monte-escalier" (default) maybe we link to /ville/[slug]?
                        // Let's keep it simple: Link to the SAME service in the neighbor city.
                        href={serviceSlug ? `/service/${serviceSlug}/${city.slug}` : `/ville/${city.slug}`}
                        className="flex items-center text-slate-600 hover:text-blue-600 transition-colors group bg-white p-3 rounded-lg shadow-sm hover:shadow-md"
                    >
                        <ArrowRight className="w-3 h-3 mr-2 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <span className="text-sm font-medium">{city.name}</span>
                        <span className="text-xs text-slate-400 ml-auto">{city.distance.toFixed(0)}km</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
