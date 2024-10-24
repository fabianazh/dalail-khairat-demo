import { activities } from "@/constants/model";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://dalail-khairat-demo.vercel.app";

    const activitiesData = activities.map((activity: Activity) => ({
        url: `${baseUrl}/kegiatan/${activity.id}`,
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
    ];
}
