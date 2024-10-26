import Trip from "@/components/Section/Content/Trip";
import { tripService } from "@/services/tripService";

export async function generateStaticParams() {
    const trip = tripService.getAllTrip();

    return trip.map((item: TextContent) => ({
        perjalananId: item.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        perjalananId: string;
    };
}) {
    const { perjalananId } = params;
    try {
        const trip: TextContent | undefined | null =
            tripService.getTripDetail(perjalananId);

        if (trip === undefined || trip === null) {
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
            title: `${trip?.title} | KBIHU Al-Muhajirin Purwakarta`,
            description: "KBIHU Al-Muhajirin PURWAKARTA",
            keywords: [
                "KBIHU Al-Muhajirin Purwakarta",
                "KBIHU Al-Muhajirin",
                "KBIHU",
                "Panduan Manasik",
                "Panduan Umrah",
                "Panduan Haji",
                "Panduan Umrah & Haji",
                "Panduan Perjalanan Umrah & Haji",
            ],
            robots: "index, follow",
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/perjalanan/${perjalananId}`,
            openGraph: {
                title: `${trip?.title} | KBIHU Al-Muhajirin Purwakarta`,
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

export default function TripPage({
    params,
}: {
    params: { perjalananId: string };
}) {
    const { perjalananId } = params;
    return (
        <>
            <Trip perjalananId={perjalananId} />
        </>
    );
}
