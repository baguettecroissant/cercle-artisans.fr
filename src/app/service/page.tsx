import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/data/service-content";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Nos Services d'Artisans - Le Cercle des Artisans",
    description: "Découvrez la liste complète de nos services de rénovation et d'installation. Trouvez un expert qualifié partout en France.",
};

export default function ServicesIndexPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 mb-8 capitalize">
                <Link href="/" className="hover:text-blue-600">Accueil</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="font-semibold text-gray-800">Nos Services</span>
            </nav>

            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Nos Services d'Artisans</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Accédez à notre réseau d'experts qualifiés pour tous vos travaux de rénovation et d'aménagement.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service) => (
                    <Link
                        key={service.slug}
                        href={`/service/${service.slug}`}
                        className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition duration-300"
                    >
                        <div className="h-48 bg-gray-100 relative overflow-hidden">
                            {/* Use a placeholder or color if image fails, but ideally we use service.hero.image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
                            <img
                                src={service.hero.image}
                                alt={service.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-2">
                                    {service.category}
                                </span>
                                <h2 className="text-2xl font-bold text-white">
                                    {service.name}
                                </h2>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                {service.directoryPageContent?.intro || service.hero.subtitle}
                            </p>

                            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                                Trouver un artisan
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
