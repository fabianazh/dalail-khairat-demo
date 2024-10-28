import Prohibition from "@/components/Section/Content/Prohibition";

export async function generateMetadata() {
    return {
        title: "Larangan-Larangan Ihram dan Damnya",
        description: "KBIHU Al-Muhajirin Purwakarta",
        keywords: [
            "KBIHU Al-Muhajirin Purwakarta",
            "KBIHU Al-Muhajirin",
            "KBIHU",
            "Panduan Manasik",
            "Panduan Umrah",
            "Panduan Haji",
            "Panduan Umrah & Haji",
            "Panduan Kegiatan Umrah & Haji",
            "Panduan Perjalanan Umrah & Haji",
        ],
        robots: "index, follow",
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        openGraph: {
            title: `KBIHU Al-Muhajirin Purwakarta`,
            description: "KBIHU Al-Muhajirin PURWAKARTA",
            images: [],
        },
    };
}

export default function ProhibitionPage() {
    return (
        <>
            <Prohibition />
        </>
    );
}
