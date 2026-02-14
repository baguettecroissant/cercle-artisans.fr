"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 400px down
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isDismissed || !isVisible) return null;

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-slide-up">
            <div className="flex items-center gap-2">
                <Link
                    href="/devis"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3.5 px-6 rounded-full text-sm hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30"
                >
                    <Phone className="w-4 h-4" />
                    Demander un devis gratuit
                </Link>
                <button
                    onClick={() => setIsDismissed(true)}
                    className="p-2 text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                    aria-label="Fermer"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
