export function StickyCTA({ serviceName, cityName }: { serviceName: string; cityName: string }) {
    return (
        <div className="sticky top-24 bg-white p-6 rounded-lg shadow-xl border border-blue-100">
            <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
                Besoin d'un {serviceName} à {cityName} ?
            </h3>
            <p className="text-sm text-center text-gray-500 mb-6">
                Recevez 3 devis gratuits sous 24h. Sans engagement.
            </p>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Code Postal</label>
                    <input
                        type="text"
                        placeholder="Ex: 75001"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de travaux</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                        <option>Urgence / Dépannage</option>
                        <option>Installation neuve</option>
                        <option>Rénovation</option>
                        <option>Autre</option>
                    </select>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors shadow-lg">
                    Voir mes tarifs
                </button>
            </form>

            <div className="mt-4 pt-4 border-t text-xs text-center text-gray-400">
                <p>🔒 Vos données sont protégées</p>
                <p>Plus de 1500 artisans partenaires</p>
            </div>
        </div>
    );
}
