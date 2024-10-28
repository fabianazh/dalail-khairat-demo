"use client";

import TableContainer from "@/components/Container/TableContainer";
import Note from "@/components/Typography/Note";
import Title from "@/components/Typography/Title";

const content: Prohibition[] = [
    {
        prohibition:
            "Menggunakan pakaian yang meliputi atau melingkari badan (muhith)",
        male: "v",
        female: "-",
        desc: "Penggunaan sendal, sabuk, jam tangan, dan cincin diperbolehkan",
        dam: "Kambing / puasa 3 hari / sedekah 1/2 sho kepada 6 miskin",
    },
    {
        prohibition: "Menutup kepala atau sebagiannya",
        male: "v",
        female: "-",
        desc: "Penggunaan payung, berteduh di bawah atap diperbolehkan",
        dam: "Kambing / puasa 3 hari / sedekah 1/2 sho kepada 6 miskin",
    },
    {
        prohibition: "Menutup wajah dan telapak tangan",
        male: "-",
        female: "v",
        desc: "Tidak boleh memakai sarung tangan, cadar dan masker kecuali jika darurat.",
        dam: "Kambing / puasa 3 hari/sedekah 1/2 sho kepada 6 miskin",
    },
    {
        prohibition: "Mencukur atau mencabut rambut",
        male: "v",
        female: "v",
        desc: "Semua jenis rambut pada tubuh.",
        dam: "Kambing / puasa 3 hari/sedekah 1/2 sho kepada 6 miskin",
    },
    {
        prohibition: "Memotong kuku",
        male: "v",
        female: "v",
        desc: "Kecuali jika lepas sendiri atau mudharat jika tidak dipotong",
        dam: "Kambing / puasa 3 hari/sedekah 1/2 sho kepada 6 miskin",
    },
    {
        prohibition: "Memakai wewangian",
        male: "v",
        female: "v",
        desc: "Termasuk menggunakan minyak rambut pada kepala dan janggut",
        dam: "Kambing / puasa 3 hari / sedekah 1/2 sho kepada 6 miskin",
    },
    {
        prohibition: "Membunuh binatang liar darat yang halal dikonsumsi",
        male: "v",
        female: "v",
        desc: "-",
        dam: "Sembelih hewan / sedekah / puasa",
    },
    {
        prohibition: "Mencabut atau memotong tanaman di tanah haram",
        male: "v",
        female: "v",
        desc: "Kecuali jika rumput atau tanaman yang sudah kering",
        dam: "Pohon besar sapi, pohon kecil kambing / sedekah / puasa",
    },
    {
        prohibition: "Melangsungkan akad nikah",
        male: "v",
        female: "v",
        desc: "Baik menikah atau menikahkan",
        dam: "Dosa, nikah tidak sah, dan tidak ada dam.",
    },
    {
        prohibition: "Berhubungan badan",
        male: "v",
        female: "v",
        desc: "Akibat jimak, umrah bisa rusak, harus menyelesaikan haji, dan wajib membayar fidyah.",
        dam: "Unta, lalu sapi, lalu 7 kambing, lalu sedekah seharga unta, jika tak mampu puasa sejumlah mud makanan harga unta.",
    },
];

export default function Prohibition() {
    return (
        <>
            <section className="w-full flex flex-col gap-8">
                <div className="w-full h-fit flex flex-col gap-2">
                    <Title>LARANGAN-LARANGAN SAAT IHRAM DAN DAMNYA</Title>
                    <Note
                        className="block my-2"
                        notes={["LK = Laki-Laki", "PR = Perempuan"]}
                    />

                    <TableContainer className="mb-4">
                        <TableContainer.THead>
                            <TableContainer.Tr>
                                <TableContainer.Th className="w-1/12">
                                    No
                                </TableContainer.Th>
                                <TableContainer.Th className="w-3/12">
                                    Larangan Ihram
                                </TableContainer.Th>
                                <TableContainer.Th className="w-1/12">
                                    Lk
                                </TableContainer.Th>
                                <TableContainer.Th className="w-1/12">
                                    Pr
                                </TableContainer.Th>
                                <TableContainer.Th className="w-3/12">
                                    Keterangan
                                </TableContainer.Th>
                                <TableContainer.Th className="w-3/12">
                                    Dam
                                </TableContainer.Th>
                            </TableContainer.Tr>
                        </TableContainer.THead>
                        <TableContainer.Tbody>
                            {content.map((data: Prohibition, index: number) => (
                                <TableContainer.Tr key={index}>
                                    <TableContainer.Td className="w-1/12">
                                        {index + 1}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-3/12">
                                        {data.prohibition}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-1/12">
                                        {data.male}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-1/12">
                                        {data.female}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-3/12">
                                        {data.desc}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-3/12">
                                        {data.dam}
                                    </TableContainer.Td>
                                </TableContainer.Tr>
                            ))}
                        </TableContainer.Tbody>
                    </TableContainer>
                </div>
            </section>
        </>
    );
}
