import Pilgrimage from "@/components/Section/Content/Pilgrimage";
import { pilgrimageService } from "@/services/pilgrimageService";

export async function generateStaticParams() {
    const pilgrimage = pilgrimageService.getAllPilgrimage();

    return pilgrimage.map((item: TextContent) => ({
        ziarahId: item.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        ziarahId: string;
    };
}) {
    const { ziarahId } = params;
    try {
        const pilgrimage: TextContent | undefined | null =
            pilgrimageService.getPilgrimageDetail(ziarahId);

        if (pilgrimage === undefined || pilgrimage === null) {
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
            title: `${pilgrimage?.title} | KBIHU Al-Muhajirin Purwakarta`,
            description: "KBIHU Al-Muhajirin PURWAKARTA",
            keywords: [
                "KBIHU Al-Muhajirin Purwakarta",
                "KBIHU Al-Muhajirin",
                "KBIHU",
                "Panduan Manasik",
                "Panduan Umrah",
                "Panduan Haji",
                "Panduan Umrah & Haji",
                "Panduan Ziarah Umrah & Haji",
            ],
            robots: "index, follow",
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/ziarah/${ziarahId}`,
            openGraph: {
                title: `${pilgrimage?.title} | KBIHU Al-Muhajirin Purwakarta`,
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

export default function PilgrimagePage({
    params,
}: {
    params: { ziarahId: string };
}) {
    const { ziarahId } = params;
    return (
        <>
            <Pilgrimage ziarahId={ziarahId} />
        </>
    );
}
