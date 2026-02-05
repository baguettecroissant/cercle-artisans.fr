import { LucideIcon, CheckCircle, MapPin, Clock } from "lucide-react";
import * as Icons from "lucide-react";
import { Service, City, LocalContent, RegionalContent } from "@/types";

// Helper to get icon by name
const getIcon = (name: string) => {
    const Icon = (Icons as any)[name];
    return Icon ? <Icon className="w-6 h-6 text-blue-600" /> : <CheckCircle className="w-6 h-6 text-blue-600" />;
};

export function SectionIntro({
    title,
    content,
    city,
    local,
}: {
    title: string;
    content: string;
    city: City;
    local: LocalContent | null;
}) {
    return (
        <section className="py-12 bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
            <div className="prose max-w-none text-gray-600 space-y-4">
                <p className="text-lg">{local?.intro || content}</p>

                {local?.historyAnecdote && (
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4 italic">
                        <h3 className="font-semibold text-amber-800 mb-1">Le saviez-vous ?</h3>
                        <p>{local.historyAnecdote}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export function SectionProcess({ process }: { process: Service["process"] }) {
    return (
        <section className="py-12 bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{process.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.steps.map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-md relative">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                            {idx + 1}
                        </div>
                        <h3 className="text-xl font-bold mb-2 mt-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function SectionBenefits({ benefits }: { benefits: Service["benefits"] }) {
    return (
        <section className="py-12 bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{benefits.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {benefits.items.map((item, idx) => (
                    <div key={idx} className="text-center p-4">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            {getIcon(item.icon)}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function SectionPricing({ pricing, regional }: { pricing: Service["pricing"], regional: RegionalContent }) {
    return (
        <section className="py-12 bg-slate-900 text-white rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{pricing.title}</h2>
            <div className="overflow-x-auto">
                <table className="w-full max-w-4xl mx-auto text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-700">
                            <th className="p-4">Prestation</th>
                            <th className="p-4">Prix Estimatif *</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricing.items.map((item, idx) => {
                            // Apply regional price modifier logic roughly (just logic visualization here)
                            // In a real app we'd parse the range, multiply, and reformat.
                            // For simplicity I'll just append a note or leave as is if complex parsing is needed.
                            // Let's do a simple string append for the demo or assume base price.

                            // Better: Just display the range and add an asterisk about regional variation
                            return (
                                <tr key={idx} className="border-b border-slate-700 hover:bg-slate-800">
                                    <td className="p-4 font-medium">{item.service}</td>
                                    <td className="p-4 text-blue-300">
                                        {item.price} {item.unit}
                                        {regional.priceModifier > 1 && (
                                            <span className="text-xs text-gray-400 ml-2 block sm:inline">
                                                (Ajusté région {regional.regionName})
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <p className="text-center text-gray-400 text-sm mt-4 italic">
                    * Les tarifs peuvent varier selon la complexité et l'urgence. {regional.priceModifier > 1 ? `Les prix incluent la majoration régionale de +${Math.round((regional.priceModifier - 1) * 100)}% pour ${regional.regionName}.` : ""}
                </p>
            </div>
        </section>
    );
}

export function SectionFAQ({
    genericFaq,
    localFaq,
    city,
}: {
    genericFaq: Service["faq"];
    localFaq: LocalContent["localFaq"] | undefined;
    city: City;
}) {
    return (
        <section className="py-12 bg-white rounded-lg shadow-sm p-8 mb-8" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Questions Fréquentes à {city.name}</h2>
            <div className="space-y-6">
                {localFaq && (
                    <div className="border hover:border-blue-500 rounded-lg p-6 transition-colors" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <h3 className="font-bold text-lg mb-2 flex items-start" itemProp="name">
                            <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                            {localFaq.question}
                        </h3>
                        <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <div itemProp="text">{localFaq.answer}</div>
                        </div>
                    </div>
                )}

                {genericFaq.map((item, idx) => (
                    <div key={idx} className="border rounded-lg p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <h3 className="font-bold text-lg mb-2" itemProp="name">{item.question}</h3>
                        <div className="text-gray-600" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <div itemProp="text">{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function NearbyCities({ cities }: { cities: City[] }) {
    return (
        <section className="py-8 border-t">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Artisans disponibles aux alentours</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {cities.map((city) => (
                    <a
                        key={city.slug}
                        href={`../${city.slug}`} // Relative link back to same service but different city
                        className="text-blue-600 hover:underline text-sm truncate"
                    >
                        {city.name} ({city.zipCode})
                    </a>
                ))}
            </div>
        </section>
    );
}
