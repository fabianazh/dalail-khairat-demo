"use client";

import TabContainer from "@/components/Container/TabContainer";
import TextContainer from "@/components/Container/TextContainer";
import Title from "@/components/Typography/Title";
import { duaService } from "@/services/duaService";

export default function Dua({ doaId }: { doaId: string }) {
    const dua: TabContent | null | undefined = duaService.getDuaDetail(doaId);

    return (
        <>
            <section className="w-full py-4 text-center h-fit">
                <Title>{dua?.title}</Title>
            </section>
            <section className="px-4 pb-6 lg:px-32 w-full">
                {dua?.tabLayout === true ? (
                    <TabContainer contents={dua?.tab ?? []} />
                ) : (
                    <div className={`flex flex-col w-full min-h-screen pt-12`}>
                        {dua?.tab.map(
                            (
                                item: {
                                    label: string;
                                    audio?: string;
                                    data: TextData[];
                                },
                                index: number
                            ) => (
                                <div
                                    key={index}
                                    className="w-full flex flex-col gap-2"
                                >
                                    <h1 className="text-center font-bold text-xl lg:text-2xl uppercase">
                                        {item.label}
                                    </h1>
                                    <TextContainer
                                        audio={item.audio}
                                        contents={item.data}
                                    />
                                </div>
                            )
                        )}
                    </div>
                )}
            </section>
        </>
    );
}
