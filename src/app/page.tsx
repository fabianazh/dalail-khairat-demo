import Hero from "@/components/Section/Home/Hero";
import PageList from "@/components/Section/Home/PageList";

export async function generateMetadata() {
    return {
        title: "KBIHU Al-Muhajirin Purwakarta",
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

export default function HomePage() {
    return (
        <>
            <main className="relative w-screen h-screen flex flex-col shadow-inner items-center p-5 pb-8 lg:p-8 gap-5 lg:gap-8">
                <div className="background absolute w-screen h-screen top-0 left-0 -z-10" />
                <Hero />
                <PageList />
            </main>
        </>
    );
}
