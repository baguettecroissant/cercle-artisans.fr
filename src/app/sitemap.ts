import { MetadataRoute } from "next";
import {
    getAllRegions,
    getAllDepartments,
} from "@/lib/data";
import { services } from "@/data/service-content";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blog-posts";

// Base URL from environment or default
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://cercle-artisans.fr";

export default function sitemap(): MetadataRoute.Sitemap {
    // ---------------------------------------------------------
    // 1. Static Pages
    // ---------------------------------------------------------
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/annuaire`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/devis`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    const entries: MetadataRoute.Sitemap = [...staticPages];

    const regions = getAllRegions();
    const departments = getAllDepartments();

    // ---------------------------------------------------------
    // 2. Dynamic Pages (Services x Locations)
    // ---------------------------------------------------------
    for (const service of services) {
        // A. Main Service Page
        entries.push({
            url: `${BASE_URL}/service/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        });

        // B. Region Pages for this Service
        for (const region of regions) {
            entries.push({
                url: `${BASE_URL}/service/${service.slug}/region/${region}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            });
        }

        // C. Department Pages for this Service
        for (const dept of departments) {
            entries.push({
                url: `${BASE_URL}/service/${service.slug}/departement/${dept.code}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            });
        }

        // D. City Landing Pages for this Service
        for (const city of cities) {
            entries.push({
                url: `${BASE_URL}/service/${service.slug}/${city.slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            });
        }
    }

    // ---------------------------------------------------------
    // 3. Blog Pages
    // ---------------------------------------------------------
    entries.push({
        url: `${BASE_URL}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    });

    for (const post of blogPosts) {
        entries.push({
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        });
    }

    return entries;
}
