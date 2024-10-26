import Dua from "@/components/Section/Content/Dua";
import { duaService } from "@/services/duaService";

export async function generateStaticParams() {
    const dua = duaService.getAllDua();

    return dua.map((item: TabContent) => ({
        doaId: item.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        doaId: string;
    };
}) {
    const { doaId } = params;
    try {
        const dua: TabContent | undefined | null =
            duaService.getDuaDetail(doaId);

        if (dua === undefined || dua === null) {
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
            title: `${dua?.title} | KBIHU Al-Muhajirin Purwakarta`,
            description: "KBIHU Al-Muhajirin PURWAKARTA",
            keywords: [
                "KBIHU Al-Muhajirin Purwakarta",
                "KBIHU Al-Muhajirin",
                "KBIHU",
                "Panduan Manasik",
                "Panduan Umrah",
                "Panduan Haji",
                "Panduan Umrah & Haji",
                "Panduan Doa Umrah & Haji",
            ],
            robots: "index, follow",
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/doa/${doaId}`,
            openGraph: {
                title: `${dua?.title} | KBIHU Al-Muhajirin Purwakarta`,
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

export default function DoaPage({ params }: { params: { doaId: string } }) {
    const { doaId } = params;
    return (
        <>
            <Dua doaId={doaId} />
        </>
    );
}
