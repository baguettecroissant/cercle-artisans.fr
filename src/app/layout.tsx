import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.cercle-artisans.fr"),
    title: {
        default: "Le Cercle des Artisans — Artisans Certifiés RGE en France",
        template: "%s | Le Cercle des Artisans",
    },
    description:
        "Trouvez un artisan certifié RGE près de chez vous. Devis gratuits pour isolation, pompe à chaleur, climatisation, monte-escalier et rénovation énergétique.",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: "Le Cercle des Artisans",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen pt-20 pb-16 md:pb-0">{children}</main>
                <Footer />
                <StickyMobileCTA />
                <Script src="https://nhmvgsrwhjsjnpncpiaj.supabase.co/functions/v1/analytics-collect?script=1" />
            </body>
        </html>
    );
}
