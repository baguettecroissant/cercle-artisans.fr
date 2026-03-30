/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // --- CATCH-ALL FOR LEGACY .html ---
            // Single pattern to redirect all legacy .html pages to homepage
            // This replaces the previous per-keyword wildcards that caused
            // Vercel edge router conflicts with blog post slugs containing
            // city/service names (e.g. /blog/monte-escalier-nice-paca-...)
            {
                source: '/:path*.html',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
