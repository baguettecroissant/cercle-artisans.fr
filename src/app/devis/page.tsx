"use client";

import { useEffect, useCallback, useRef } from "react";

export default function DevisPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    const loadWidget = useCallback(() => {
        const vud_partenaire_id = '2353';
        const vud_categorie_id = '0';
        const widgetDivId = 'v8501848b2bd';

        // Ensure the target div exists
        const targetDiv = document.getElementById(widgetDivId);
        if (!targetDiv) return;

        // Remove any previous widget scripts to allow re-injection
        const existingScripts = document.querySelectorAll('script[src*="viteundevis.com"]');
        existingScripts.forEach((s) => s.remove());

        // Clear the widget container for fresh injection
        targetDiv.innerHTML = '';
        scriptLoadedRef.current = false;

        // Create and inject the widget script
        const vud_js = document.createElement('script');
        vud_js.type = 'text/javascript';
        vud_js.src = '//www.viteundevis.com/8501848b2b/' + vud_partenaire_id + '/' + vud_categorie_id + '/';
        vud_js.async = true;

        // Append the script to the widget container's parent so it runs near its target
        document.body.appendChild(vud_js);
        scriptLoadedRef.current = true;
    }, []);

    useEffect(() => {
        // Small delay to ensure DOM is fully rendered before script injection
        const timer = setTimeout(() => {
            loadWidget();
        }, 100);

        return () => {
            clearTimeout(timer);
            // Clean up script on unmount to allow fresh load on re-visit
            const existingScripts = document.querySelectorAll('script[src*="viteundevis.com"][src*="8501848b2b"]');
            existingScripts.forEach((s) => s.remove());
        };
    }, [loadWidget]);

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 md:p-12">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
                        Demandez vos devis gratuits
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 text-center mb-8">
                        Remplissez le formulaire ci-dessous pour recevoir jusqu&apos;à 3 devis d&apos;artisans qualifiés près de chez vous.
                    </p>

                    {/* ViteUnDevis widget container */}
                    <div
                        ref={containerRef}
                        id="v8501848b2bd"
                        className="vud-widget-container min-h-[400px] flex justify-center"
                    >
                        {/* The script will inject the widget content here */}
                    </div>
                </div>
            </div>
        </div>
    );
}
