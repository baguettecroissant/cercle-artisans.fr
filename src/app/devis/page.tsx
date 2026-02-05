"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function DevisPage() {
    useEffect(() => {
        // Just in case we need manual script injection as requested, 
        // but Next.js usually handles this better with the Script component 
        // or we can stick to the raw DOM manipulation if preferred for this specific widget.
        // The user provided raw JS code, so we'll adapt it to React.

        const vud_partenaire_id = '2353';
        const vud_categorie_id = '0';

        // Check if script already exists to avoid duplication
        const existingScript = document.querySelector(`script[src*="viteundevis.com"][src*="${vud_partenaire_id}"]`);

        if (!existingScript) {
            const vud_js = document.createElement('script');
            vud_js.type = 'text/javascript';
            vud_js.src = '//www.viteundevis.com/8501848b2b/' + vud_partenaire_id + '/' + vud_categorie_id + '/';
            // We append to body or head instead of "first script tag" which is safer in React
            document.body.appendChild(vud_js);
        }

        return () => {
            // Cleanup if necessary, though these widgets usually stick around
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
                        Demandez vos devis gratuits
                    </h1>
                    <p className="text-slate-600 text-center mb-8">
                        Remplissez le formulaire ci-dessous pour recevoir jusqu'à 3 devis d'artisans qualifiés près de chez vous.
                    </p>

                    {/* The specific div ID requested by the user */}
                    <div id="v8501848b2bd" className="min-h-[600px] flex justify-center">
                        {/* The script will inject content here or replace this div */}
                    </div>
                </div>
            </div>
        </div>
    );
}
