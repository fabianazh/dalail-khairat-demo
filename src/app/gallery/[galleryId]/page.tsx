import { surahService } from '@/services/surahService';

export async function generateStaticParams() {
    const surah = surahService.getAllSurah();

    return surah.map((item: Surah) => ({
        surahId: item.nomor,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        surahId: number;
    };
}) {
    const { surahId } = params;
    try {
        const surah: Surah | undefined | null =
            surahService.getSurahDetail(surahId);

        if (surah === undefined || surah === null) {
            return {
                title: 'Galeri tidak dapat ditemukan!',
                description:
                    'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                openGraph: {
                    title: 'Galeri tidak dapat ditemukan!',
                    description:
                        'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                    images: [],
                },
                robots: 'noindex, nofollow',
            };
        }
        return {
            title: `${surah?.namaLatin} | Galeri Kelompok Peru`,
            description:
                'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
            keywords: `Galeri Kelompok Peru`,
            robots: 'index, follow',
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${surahId}`,
            openGraph: {
                title: `${surah?.namaLatin} | Galeri Kelompok Peru`,
                description:
                    'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
                images: [],
            },
        };
    } catch (error) {
        return {
            title: 'Galeri tidak dapat ditemukan!',
            description:
                'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
            openGraph: {
                title: 'Galeri tidak dapat ditemukan!',
                description:
                    'Galeri yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                images: [],
            },
            robots: 'noindex, nofollow',
        };
    }
}

export default function SurahDetailPage({
    params: { surahId },
}: {
    params: { surahId: string };
}) {
    return <></>;
}
