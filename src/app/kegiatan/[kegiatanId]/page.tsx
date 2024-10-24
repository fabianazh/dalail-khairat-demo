import Kegiatan from "@/components/Section/Content/Kegiatan";
import { activityService } from "@/services/activityService";

export async function generateStaticParams() {
    const activity = activityService.getAllActivity();

    return activity.map((item: Activity) => ({
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
        const activity: Activity | undefined | null =
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
            keywords: `KBIHU Al-Muhajirin Purwakarta`,
            robots: "index, follow",
            canonical: `https://dalail-khairat-demo.vercel.app/kegiatan/${kegiatanId}`,
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

export default function KegiatanDiRumahPage({
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
