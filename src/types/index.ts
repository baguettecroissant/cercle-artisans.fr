export interface Service {
    slug: string;
    name: string;
    seoTitle: string;
    category: string;
    hero: {
        title: string;
        subtitle: string;
        image: string;
    };
    process: {
        title: string;
        steps: {
            title: string;
            description: string;
        }[];
    };
    benefits: {
        title: string;
        items: {
            icon: string; // Lucide icon name
            title: string;
            description: string;
        }[];
    };
    pricing: {
        title: string;
        items: {
            service: string;
            price: string;
            unit: string;
        }[];
    };
    faq: {
        question: string;
        answer: string;
    }[];
    directoryPageContent: {
        intro: string;
        description: string;
    };
}

export interface City {
    slug: string;
    name: string;
    zipCode: string;
    departmentCode: string; // New field
    departmentName: string; // New field
    region: string; // slug-like: ile-de-france
    population: number;
    lat: number;
    lng: number;
}

export interface RegionalContent {
    regionName: string; // e.g., "Île-de-France"
    intro: {
        title: string;
        content: string; // Describes climate/architecture
    };
    specialties: {
        title: string;
        items: string[]; // e.g., "Toiture zinc" for Paris
    };
    priceModifier: number; // 1.0 = standard, 1.2 = +20% (Paris)
}

export interface LocalContent {
    intro: string; // Unique city intro
    localTip: string; // Urbanism/Mairie tip
    historyAnecdote: string;
    localFaq: {
        question: string;
        answer: string;
    };
}

// Combined Data for Page Rendering
export interface PageData {
    service: Service;
    city: City;
    regional: RegionalContent;
    local: LocalContent | null; // Null if no generated content yet (fallback)
}
