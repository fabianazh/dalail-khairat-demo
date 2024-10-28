import { activities } from "@/constants/model/activities";
import { duas } from "@/constants/model/duas";
import { essentials } from "@/constants/model/essentials";
import { guides } from "@/constants/model/guides";
import { pilgrimages } from "@/constants/model/pilgrimages";
import { trips } from "@/constants/model/trips";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;

    const activitiesData = activities.map((activity: TextContent) => ({
        url: `${baseUrl}/kegiatan/${activity.id}`,
        lastModified: new Date(),
        priority: 0.7,
    }));

    const tripsData = trips.map((trip: TextContent) => ({
        url: `${baseUrl}/perjalanan/${trip.id}`,
        lastModified: new Date(),
        priority: 0.7,
    }));

    const guidesData = guides.map((guide: TextContent) => ({
        url: `${baseUrl}/panduan/${guide.id}`,
        lastModified: new Date(),
        priority: 0.7,
    }));

    const pilgrimagesData = pilgrimages.map((pilgrimage: TextContent) => ({
        url: `${baseUrl}/panduan/${pilgrimage.id}`,
        lastModified: new Date(),
        priority: 0.7,
    }));

    const duasData = duas.map((dua: TabContent) => ({
        url: `${baseUrl}/doa/${dua.id}`,
        lastModified: new Date(),
        priority: 0.7,
    }));

    const essentialsItemData = essentials.map((essential: Essentials) => ({
        url: `${baseUrl}/panduan/${essential.id}`,
        lastModified: new Date(),
        priority: 0.7,
    }));

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/panduan/perbedaan-rukun-wajib-dan-sunat-haji`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseUrl}/panduan/larangan-larangan-ihram-dan-damnya`,
            lastModified: new Date(),
            priority: 0.5,
        },
        {
            url: `${baseUrl}/panduan/daftar-bawaan-jamaah-haji-laki-laki`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${baseUrl}/panduan/daftar-bawaan-jamaah-haji-perempuan`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${baseUrl}/doa/doa-umrah-imam-ghazali`,
            lastModified: new Date(),
            priority: 0.7,
        },
        ...activitiesData,
        ...tripsData,
        ...guidesData,
        ...essentialsItemData,
        ...pilgrimagesData,
        ...duasData,
    ];
}
