import Link from "next/link";
import { cities } from "@/data/cities";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Annuaire des Zones d'Intervention - Le Cercle des Artisans",
    description: "Retrouvez la liste de toutes les villes où nos artisans RGE interviennent pour vos travaux de rénovation.",
};

export default function DirectoryPage() {
    // Group cities by Region -> Department
    const regions: Record<string, Record<string, typeof cities>> = {};

    cities.forEach((city) => {
        if (!regions[city.region]) {
            regions[city.region] = {};
        }
        if (!regions[city.region][city.departmentName]) {
            regions[city.region][city.departmentName] = [];
        }
        regions[city.region][city.departmentName].push(city);
    });

    // Sort regions and departments alphabetically
    const sortedRegions = Object.keys(regions).sort();

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                    Nos Zones d'Intervention
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Nos artisans partenaires interviennent partout en France. Trouvez votre
                    ville ci-dessous pour découvrir les services disponibles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedRegions.map((region) => (
                    <div key={region} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="bg-slate-900 px-6 py-4">
                            <h2 className="text-xl font-bold text-white capitalize">
                                {region.replace(/-/g, " ")}
                            </h2>
                        </div>
                        <div className="p-6 space-y-6">
                            {Object.keys(regions[region])
                                .sort()
                                .map((deptName) => (
                                    <div key={deptName}>
                                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3 flex items-center">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {deptName}
                                        </h3>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {regions[region][deptName].map((city) => (
                                                <li key={city.slug}>
                                                    <Link
                                                        // Default entry point: Isolation or Monte Escalier (or generic if we had one)
                                                        // Using 'monte-escalier' as it's our flagship, but maybe 'isolation' is broader.
                                                        // Let's go with 'isolation-exterieur' which is very popular, or just 'monte-escalier' as per previous links.
                                                        // Let's actually randomize or stick to one. The header used monte-escalier.
                                                        href={`/ville/${city.slug}`}
                                                        className="text-slate-600 hover:text-blue-600 text-sm transition-colors flex items-center group"
                                                    >
                                                        <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-5px] group-hover:translate-x-0" />
                                                        {city.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
