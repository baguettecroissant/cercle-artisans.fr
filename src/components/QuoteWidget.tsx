"use client";

import { useEffect, useRef } from "react";

export function QuoteWidget() {
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const vud_partenaire_id = '2353';
        const vud_box_id = '73ea5977e4';
        const widgetDivId = 'v73ea5977e4d';
        let vud_keyword = document.title;
        vud_keyword = encodeURI(vud_keyword);

        // Remove any previous widget scripts to allow re-injection
        const existingScripts = document.querySelectorAll(`script[src*="viteundevis.com"][src*="${vud_box_id}"]`);
        existingScripts.forEach((s) => s.remove());

        // Clear the widget container for fresh injection
        const targetDiv = document.getElementById(widgetDivId);
        if (targetDiv) {
            targetDiv.innerHTML = '';
        }

        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(() => {
            const vud_js = document.createElement('script');
            vud_js.type = 'text/javascript';
            vud_js.src = `//www.viteundevis.com/marqueblanche/?b=${vud_box_id}&p=${vud_partenaire_id}&c=${vud_keyword}`;
            vud_js.async = true;
            document.body.appendChild(vud_js);
            scriptLoadedRef.current = true;
        }, 100);

        return () => {
            clearTimeout(timer);
            const scripts = document.querySelectorAll(`script[src*="viteundevis.com"][src*="${vud_box_id}"]`);
            scripts.forEach((s) => s.remove());
        };
    }, []);

    return (
        <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-4 vud-widget-container">
            <div id="v73ea5977e4d"></div>
        </div>
    );
}

