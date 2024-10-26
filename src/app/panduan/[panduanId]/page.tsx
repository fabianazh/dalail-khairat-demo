import Guide from "@/components/Section/Content/Guide";
import { guideService } from "@/services/guideService";

export async function generateStaticParams() {
    const guide = guideService.getAllGuide();

    return guide.map((item: TextContent) => ({
        panduanId: item.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        panduanId: string;
    };
}) {
    const { panduanId } = params;
    try {
        const guide: TextContent | undefined | null =
            guideService.getGuideDetail(panduanId);

        if (guide === undefined || guide === null) {
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
            title: `${guide?.title} | KBIHU Al-Muhajirin Purwakarta`,
            description: "KBIHU Al-Muhajirin PURWAKARTA",
            keywords: [
                "KBIHU Al-Muhajirin Purwakarta",
                "KBIHU Al-Muhajirin",
                "KBIHU",
                "Panduan Manasik",
                "Panduan Umrah",
                "Panduan Haji",
                "Panduan Umrah & Haji",
                "Panduan Panduan Umrah & Haji",
            ],
            robots: "index, follow",
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/panduan/${panduanId}`,
            openGraph: {
                title: `${guide?.title} | KBIHU Al-Muhajirin Purwakarta`,
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

export default function GuidePage({
    params,
}: {
    params: { panduanId: string };
}) {
    const { panduanId } = params;
    return (
        <>
            <Guide panduanId={panduanId} />
        </>
    );
}
