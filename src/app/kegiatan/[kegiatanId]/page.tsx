import Kegiatan from "@/components/Section/Content/Activity";
import { activityService } from "@/services/activityService";

export async function generateStaticParams() {
    const activity = activityService.getAllActivity();

    return activity.map((item: TextContent) => ({
        kegiatanId: item.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        kegiatanId: string;
    };
}) {
    const { kegiatanId } = params;
    try {
        const activity: TextContent | undefined | null =
            activityService.getActivityDetail(kegiatanId);

        if (activity === undefined || activity === null) {
            return {
                title: "Halaman tidak dapat ditemukan!",
                description:
                    "Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.",
                openGraph: {
                    title: "Halaman tidak dapat ditemukan!",
                    description:
                        "Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.",
                    images: [],
                },
                robots: "noindex, nofollow",
            };
        }
        return {
            title: `${activity?.title} | KBIHU Al-Muhajirin Purwakarta`,
            description: "KBIHU Al-Muhajirin PURWAKARTA",
            keywords: [
                "KBIHU Al-Muhajirin Purwakarta",
                "KBIHU Al-Muhajirin",
                "KBIHU",
                "Panduan Manasik",
                "Panduan Umrah",
                "Panduan Haji",
                "Panduan Umrah & Haji",
                "Panduan Kegiatan Umrah & Haji",
            ],
            robots: "index, follow",
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/kegiatan/${kegiatanId}`,
            openGraph: {
                title: `${activity?.title} | KBIHU Al-Muhajirin Purwakarta`,
                description: "KBIHU Al-Muhajirin PURWAKARTA",
                images: [],
            },
        };
    } catch (error) {
        return {
            title: "Halaman tidak dapat ditemukan!",
            description:
                "Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.",
            openGraph: {
                title: "Halaman tidak dapat ditemukan!",
                description:
                    "Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.",
                images: [],
            },
            robots: "noindex, nofollow",
        };
    }
}

export default function KegiatanPage({
    params,
}: {
    params: { kegiatanId: string };
}) {
    const { kegiatanId } = params;
    return (
        <>
            <Kegiatan kegiatanId={kegiatanId} />
        </>
    );
}
