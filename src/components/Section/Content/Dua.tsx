"use client";

import TabContainer from "@/components/Container/TabContainer";
import Title from "@/components/Typography/Title";
import { duaService } from "@/services/duaService";

export default function Dua({ doaId }: { doaId: string }) {
    const dua: TabContent | null | undefined = duaService.getDuaDetail(doaId);

    return (
        <>
            <section className="w-full py-4 text-center h-fit">
                <Title>{dua?.title}</Title>
            </section>
            <section>
                <TabContainer contents={dua?.tab ?? []} />
            </section>
        </>
    );
}
