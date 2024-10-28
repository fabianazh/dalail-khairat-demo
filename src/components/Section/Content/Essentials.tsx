"use client";

import TableContainer from "@/components/Container/TableContainer";
import Text from "@/components/Typography/Text";
import Title from "@/components/Typography/Title";
import { essentialservice } from "@/services/essentialsService";

export default function Essentials({ id }: { id: string }) {
    const essentials: Essentials | null | undefined =
        essentialservice.getEssentialsDetail(id);

    return (
        <>
            <section className="w-full flex flex-col gap-8">
                {essentials?.content.map(
                    (
                        content: {
                            title?: string;
                            data:
                                | {
                                      desc: string;
                                      total: string;
                                  }[]
                                | string;
                        },
                        index: number
                    ) =>
                        Array.isArray(content.data) ? (
                            <div
                                key={index}
                                className="w-full h-fit flex flex-col gap-2"
                            >
                                <Title>{content.title}</Title>
                                <TableContainer className="mb-4">
                                    <TableContainer.THead>
                                        <TableContainer.Tr>
                                            <TableContainer.Th className="w-1/12">
                                                No
                                            </TableContainer.Th>
                                            <TableContainer.Th className="w-9/12">
                                                Uraian
                                            </TableContainer.Th>
                                            <TableContainer.Th className="w-2/12">
                                                Jumlah
                                            </TableContainer.Th>
                                        </TableContainer.Tr>
                                    </TableContainer.THead>
                                    <TableContainer.Tbody>
                                        {content.data.map(
                                            (
                                                data: {
                                                    desc: string;
                                                    total: string;
                                                },
                                                index: number
                                            ) => (
                                                <TableContainer.Tr key={index}>
                                                    <TableContainer.Td className="w-1/12">
                                                        {data.total === ""
                                                            ? "."
                                                            : index + 1}
                                                    </TableContainer.Td>
                                                    <TableContainer.Td className="w-9/12">
                                                        {data.desc}
                                                    </TableContainer.Td>
                                                    <TableContainer.Td className="w-2/12">
                                                        {data.total}
                                                    </TableContainer.Td>
                                                </TableContainer.Tr>
                                            )
                                        )}
                                    </TableContainer.Tbody>
                                </TableContainer>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="w-full flex flex-col gap-2"
                            >
                                <div className="w-full flex flex-col">
                                    <Title>YANG DIBAWA KE ARMUZNA</Title>
                                    <Title size="sm">
                                        (Enam hari di tenda Armuzna)
                                    </Title>
                                </div>
                                <Text text={content.data} />
                            </div>
                        )
                )}
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex flex-col">
                        <Title>YANG DIBAWA KE JAMAROT</Title>
                        <Title size="sm">(Berjalan kaki 6 km PP)</Title>
                    </div>
                    <Text
                        text={`Tas selempang, batu Jamarot, air minum botol, buah-buahan tissue, handuk kecil, semprotan air, topi lebar, uang riyal receh, kacamata hitam, masker, payung, HP, Spanduk (per rombongan)`}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Title>AGAR TIDAK TERTUKAR, SEMUA BARANG DIBERI NAMA</Title>
                    <Text
                        text={`(Tanda* jika suami istri, cukup salah satu saja)`}
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Title>
                        PERSIAPAN DARI RUMAH MENUJU MAKODIM DAN EMBARKASI
                    </Title>
                    <Text
                        text={`Memakai setelan baju batik, syal hijau, tas tenteng, tas paspor`}
                    />
                </div>
            </section>
        </>
    );
}
