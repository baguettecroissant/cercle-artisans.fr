"use client";

import { useEffect } from "react";

export function QuoteWidget() {
    useEffect(() => {
        const vud_partenaire_id = '2353';
        const vud_box_id = '73ea5977e4';
        let vud_keyword = document.title;
        vud_keyword = encodeURI(vud_keyword);

        // Check if script already exists to avoid duplication
        const existingScript = document.querySelector(`script[src*="viteundevis.com"][src*="${vud_box_id}"]`);

        if (!existingScript) {
            const vud_js = document.createElement('script');
            vud_js.type = 'text/javascript';
            // The user provided script: 
            // vud_js.src = '//www.viteundevis.com/marqueblanche/?b='+vud_box_id+'&p='+vud_partenaire_id+'&c='+vud_keyword;
            vud_js.src = `//www.viteundevis.com/marqueblanche/?b=${vud_box_id}&p=${vud_partenaire_id}&c=${vud_keyword}`;

            // Append to body
            document.body.appendChild(vud_js);
        }

        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-4 min-h-[400px]">
            <div id="v73ea5977e4d"></div>
        </div>
    );
}
