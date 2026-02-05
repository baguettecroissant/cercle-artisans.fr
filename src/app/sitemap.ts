import { MetadataRoute } from "next";
import {
    getAllServiceCityCombinations,
    getAllRegions,
    getDepartmentsByRegion,
    getAllDepartments,
    getCitiesByDepartment,
    getCitiesByRegion
} from "@/lib/data";
import { services } from "@/data/service-content";
import { cities } from "@/data/cities";

// Base URL from environment or default
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://cercle-artisans.fr";

// We split sitemaps by Service to keep them small and avoid timeouts.
// ID "static" -> Static pages (Home, generic pages)
// ID "service-slug" -> Specific service pages (Service Home + Regions + Departments + Cities)

export async function generateSitemaps() {
    // 1. Static Sitemap
    const sitemaps = [{ id: "static" }];

    // 2. One sitemap per Service
    for (const service of services) {
        sitemaps.push({ id: service.slug });
    }

    return sitemaps;
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
    // ---------------------------------------------------------
    // 1. Static Pages Sitemap
    // ---------------------------------------------------------
    if (id === "static") {
        return [
            {
                url: BASE_URL,
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 1.0,
            },
            {
                url: `${BASE_URL}/annuaire`, // Index of service areas
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            },
            {
                url: `${BASE_URL}/devis`, // Dedicated quote page
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7,
            },
            // Add other static pages here (contact, privacy, etc.)
        ];
    }

    // ---------------------------------------------------------
    // 2. Service-Specific Sitemaps
    // ---------------------------------------------------------
    const service = services.find(s => s.slug === id);

    if (!service) {
        return [];
    }

    const entries: MetadataRoute.Sitemap = [];

    // A. The Main Service Page (/service/slug)
    entries.push({
        url: `${BASE_URL}/service/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
    });

    // B. Region Pages for this Service
    const regions = getAllRegions();
    for (const region of regions) {
        entries.push({
            url: `${BASE_URL}/service/${service.slug}/region/${region}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        });
    }

    // C. Department Pages for this Service
    const departments = getAllDepartments();
    for (const dept of departments) {
        entries.push({
            url: `${BASE_URL}/service/${service.slug}/departement/${dept.code}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        });
    }

    // D. City Pages for this Service
    // We filter cities to ensure we only generate pages for valid cities
    for (const city of cities) {
        entries.push({
            url: `${BASE_URL}/service/${service.slug}/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8, // High priority landing pages
        });
    }

    return entries;
}
