import { Service, City, PageData, LocalContent } from "@/types";
import { services } from "@/data/service-content";
import { cities } from "@/data/cities";
import { regionalContent } from "@/data/regional-content";
import localContentJson from "@/data/generated-local-content.json";

// Typed cast of the JSON import
const generatedLocalContent = localContentJson as Record<string, LocalContent>;

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
    return cities.find((c) => c.slug === slug);
}

// --- NEW HIERARCHY HELPERS ---

export function getCitiesByDepartment(departmentCode: string): City[] {
    return cities.filter((c) => c.departmentCode === departmentCode);
}

export function getCitiesByRegion(regionSlug: string): City[] {
    return cities.filter((c) => c.region === regionSlug);
}

// Helper to deduce departments in a region from the cities list
export function getDepartmentsByRegion(regionSlug: string): { code: string; name: string }[] {
    const regionCities = getCitiesByRegion(regionSlug);
    const departments = new Map<string, string>();

    regionCities.forEach(c => {
        departments.set(c.departmentCode, c.departmentName);
    });

    return Array.from(departments.entries()).map(([code, name]) => ({ code, name }));
}

export function getAllRegions(): string[] {
    const regions = new Set<string>();
    cities.forEach((c) => regions.add(c.region));
    return Array.from(regions);
}

export function getAllDepartments(): { code: string; name: string }[] {
    const departments = new Map<string, string>();
    cities.forEach((c) => departments.set(c.departmentCode, c.departmentName));
    return Array.from(departments.entries()).map(([code, name]) => ({ code, name }));
}

// -----------------------------

export async function getPageData(serviceSlug: string, citySlug: string): Promise<PageData | null> {
    const service = getServiceBySlug(serviceSlug);
    const city = getCityBySlug(citySlug);

    if (!service || !city) return null;

    // 1. Resolve Regional Content
    const regionalKey = city.region;
    // Fallback to "default" if region specific content doesn't exist
    const regional = regionalContent[regionalKey] || regionalContent["default"];

    // 2. Resolve Local Content (The "Hyper-Local" layer)
    // Key format must match the generation script: service_city (underscore)
    const contentKey = `${service.slug}_${city.slug}`;
    const local = generatedLocalContent[contentKey] || null;

    return {
        service,
        city,
        regional,
        local,
    };
}

export function getAllServiceCityCombinations() {
    const combinations = [];
    for (const service of services) {
        for (const city of cities) {
            combinations.push({
                serviceSlug: service.slug,
                citySlug: city.slug,
            });
        }
    }
    return combinations;
}

// Haversine formula to calculate distance
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat1)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}

export function getNearbyCities(citySlug: string, limit: number = 6): (City & { distance: number })[] {
    const currentCity = getCityBySlug(citySlug);
    if (!currentCity) return [];

    const otherCities = cities.filter((c) => c.slug !== citySlug);

    const citiesWithDist = otherCities.map(c => ({
        ...c,
        distance: getDistanceFromLatLonInKm(currentCity.lat, currentCity.lng, c.lat, c.lng)
    }));

    const sortedCities = citiesWithDist.sort((a, b) => a.distance - b.distance);

    return sortedCities.slice(0, limit);
}

export function getOtherServices(serviceSlug: string): Service[] {
    return services.filter((s) => s.slug !== serviceSlug);
}
