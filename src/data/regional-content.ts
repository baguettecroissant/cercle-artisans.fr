import { RegionalContent } from "@/types";

export const regionalContent: Record<string, RegionalContent> = {
    "ile-de-france": {
        regionName: "Île-de-France",
        intro: {
            title: "Services en Île-de-France",
            content: "L'Île-de-France, avec sa forte densité urbaine et son habitat varié allant de l'haussmannien aux pavillons de banlieue, nécessite une expertise particulière. Nos artisans sont habitués aux contraintes d'accès et aux spécificités des copropriétés parisiennes.",
        },
        specialties: {
            title: "Spécificités régionales",
            items: [
                "Rénovation en copropriété ancienne",
                "Interventions sur colonnes d'immeubles",
                "Contraintes de stationnement et d'accès gérées",
            ],
        },
        priceModifier: 1.25, // +25% in Paris region
    },
    "provence-alpes-cote-d-azur": {
        regionName: "PACA",
        intro: {
            title: "Interventions en Région PACA",
            content: "Sous le soleil du Sud, les besoins en climatisation et en étanchéité (tuiles canal) sont primordiaux. Nos équipes couvrent toute la région, de la côte aux terres, avec une parfaite connaissance des matériaux locaux.",
        },
        specialties: {
            title: "Expertise locale",
            items: [
                "Toiture en tuile canal",
                "Installation et entretien de climatisation",
                "Protection contre le soleil et la chaleur",
            ],
        },
        priceModifier: 1.1, // +10% in PACA
    },
    "default": {
        regionName: "France",
        intro: {
            title: "Service Partout en France",
            content: "Nos artisans partenaires interviennent avec le même professionnalisme, quelle que soit votre région. Nous nous adaptons aux spécificités locales de l'habitat.",
        },
        specialties: {
            title: "Notre engagement",
            items: ["Respect des traditions locales", "Adaptabilité aux matériaux régionaux"],
        },
        priceModifier: 1.0,
    },
};
