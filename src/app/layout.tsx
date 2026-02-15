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
    title: "Le Cercle des Artisans",
    description: "Trouvez un artisan qualifié près de chez vous.",
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
