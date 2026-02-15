/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // --- CITIES (Top Priority) ---
            { source: '/:path*paris:path*.html', destination: '/ville/paris', permanent: true },
            { source: '/:path*marseille:path*.html', destination: '/ville/marseille', permanent: true },
            { source: '/:path*lyon:path*.html', destination: '/ville/lyon', permanent: true },
            { source: '/:path*toulouse:path*.html', destination: '/ville/toulouse', permanent: true },
            { source: '/:path*nice:path*.html', destination: '/ville/nice', permanent: true },
            { source: '/:path*nantes:path*.html', destination: '/ville/nantes', permanent: true },
            { source: '/:path*montpellier:path*.html', destination: '/ville/montpellier', permanent: true },
            { source: '/:path*strasbourg:path*.html', destination: '/ville/strasbourg', permanent: true },
            { source: '/:path*bordeaux:path*.html', destination: '/ville/bordeaux', permanent: true },
            { source: '/:path*lille:path*.html', destination: '/ville/lille', permanent: true },
            { source: '/:path*rennes:path*.html', destination: '/ville/rennes', permanent: true },
            { source: '/:path*reims:path*.html', destination: '/ville/reims', permanent: true },

            // --- SERVICES ---
            { source: '/:path*climatisation:path*.html', destination: '/service/climatisation', permanent: true },
            { source: '/:path*pompe-a-chaleur:path*.html', destination: '/service/pompe-a-chaleur-air-eau', permanent: true },
            { source: '/:path*isolation:path*.html', destination: '/service/isolation', permanent: true },
            { source: '/:path*fenetre:path*.html', destination: '/service/fenetre', permanent: true },
            { source: '/:path*menuiserie:path*.html', destination: '/service/menuiserie', permanent: true },
            { source: '/:path*ascenseur:path*.html', destination: '/service/ascenseur', permanent: true },
            { source: '/:path*monte-escalier:path*.html', destination: '/service/monte-escalier', permanent: true },

            // --- CATCH-ALL FOR LEGACY .html ---
            {
                source: '/:path*.html',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
