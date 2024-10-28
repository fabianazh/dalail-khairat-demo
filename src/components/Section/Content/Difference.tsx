"use client";

import TableContainer from "@/components/Container/TableContainer";
import Title from "@/components/Typography/Title";

const content: Diff[] = [
    {
        index: "1",
        status: "Rukun",
        type: "1. Ihram",
        consequences: "Haji tidak sah, dan tidak bisa diganti dengan dam.",
    },
    {
        status: "",
        type: "2. Wuquf",
        consequences: "",
    },
    {
        status: "",
        type: "3. Thawaf Ifadhah",
        consequences: "",
    },
    {
        status: "",
        type: "4. Sa'i",
        consequences: "",
    },
    {
        status: "",
        type: "5. Cukur",
        consequences: "",
    },
    {
        status: "",
        type: "6. Tertib",
        consequences: "",
    },
    {
        index: "2",
        status: "Wajib",
        type: "1. Ihram di Miqat",
        consequences:
            "Haji tetap sah, akan tetapi harus diganti dengan dam. Jika ditinggalkan dengan sengaja maka hukumnya dosa.",
    },
    {
        status: "",
        type: "2. Mabit di Muzdalifah",
        consequences: "",
    },
    {
        status: "",
        type: "3. Jumrah Aqabah",
        consequences: "",
    },
    {
        status: "",
        type: "4. Jumrah di 3 hari tasyriq",
        consequences: "",
    },
    {
        status: "",
        type: "5. Mabit di Mina",
        consequences: "",
    },
    {
        status: "",
        type: "6. Thawaf Wada",
        consequences: "",
    },
    {
        index: "3",
        status: "Sunat",
        type: "Sangatlah banyak, diantaranya membaca tabliyah, thawaf qudum, mabit di Mina pada malam Arafah, dan lain-lain.",
        consequences:
            "Haji tetap sah dan tidak perlu melakukan dam. Hanya saja kehilangan keutamaan jika ditinggalkan.",
    },
];

export default function Difference() {
    return (
        <>
            <section className="w-full flex flex-col gap-8">
                <div className="w-full h-fit flex flex-col gap-2">
                    <Title>LARANGAN-LARANGAN SAAT IHRAM DAN DAMNYA</Title>
                    <TableContainer className="mb-4">
                        <TableContainer.THead>
                            <TableContainer.Tr>
                                <TableContainer.Th className="w-1/12">
                                    No
                                </TableContainer.Th>
                                <TableContainer.Th className="w-2/12">
                                    Status Hukum
                                </TableContainer.Th>
                                <TableContainer.Th className="w-4/12">
                                    Jenis-Jenis
                                </TableContainer.Th>
                                <TableContainer.Th className="w-5/12">
                                    Konsekuensi Ditinggalkan
                                </TableContainer.Th>
                            </TableContainer.Tr>
                        </TableContainer.THead>
                        <TableContainer.Tbody>
                            {content.map((data: Diff, index: number) => (
                                <TableContainer.Tr key={index}>
                                    <TableContainer.Td className="w-1/12">
                                        {data.consequences === ""
                                            ? "."
                                            : data.index}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-2/12">
                                        {data.status === "" ? "." : data.status}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-4/12">
                                        {data.type}
                                    </TableContainer.Td>
                                    <TableContainer.Td className="w-5/12">
                                        {data.consequences}
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
