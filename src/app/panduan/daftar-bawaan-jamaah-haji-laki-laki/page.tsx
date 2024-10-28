import Essentials from "@/components/Section/Content/Essentials";

export async function generateMetadata() {
    return {
        title: "Daftar Bawaan Jama'ah Haji Laki-Laki",
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

export default function EssentialsItemPage() {
    return (
        <>
            <Essentials id="daftar-bawaan-jamaah-haji-laki-laki" />
        </>
    );
}
