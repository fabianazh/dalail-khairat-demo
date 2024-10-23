import KegiatanDiRumah from '@/components/Section/Kegiatan/KegiatanDiRumah';

export async function generateMetadata() {
    return {
        title: 'Kegiatan di Rumah',
        description:
            'Kelompok Peru adalah kelompok mahasiswa yang penuh semangat dan tekad untuk meraih kesuksesan bersama. Sebagai bagian dari MABIM (Masa Bimbingan) Universitas Nusa Putra, kelompok kami terbentuk dari berbagai latar belakang dan keahlian, namun disatukan oleh tujuan yang sama: belajar, berkolaborasi, dan saling mendukung dalam perjalanan akademik dan kehidupan kampus.',
    };
}

export default function KegiatanDiRumahPage() {
    return (
        <>
            <KegiatanDiRumah />
        </>
    );
}
