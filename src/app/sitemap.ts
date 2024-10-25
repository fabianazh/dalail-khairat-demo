import { activities } from "@/constants/model/activities";
import { trips } from "@/constants/model/trips";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

    const activitiesData = activities.map((activity: TextContent) => ({
        url: `${baseUrl}/kegiatan/${activity.id}`,
        lastModified: new Date(),
        priority: 0.9,
    }));

    const tripsData = trips.map((trip: TextContent) => ({
        url: `${baseUrl}/perjalanan/${trip.id}`,
        lastModified: new Date(),
        priority: 0.9,
    }));

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        ...activitiesData,
        ...tripsData,
    ];
}
