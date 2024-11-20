"use client";

import TextContainer from "@/components/Container/TextContainer";
import Title from "@/components/Typography/Title";
import { pilgrimageService } from "@/services/pilgrimageService";

export default function Pilgrimage({ ziarahId }: { ziarahId: string }) {
    const pilgrimage: TextContent | null | undefined =
        pilgrimageService.getPilgrimageDetail(ziarahId);

    return (
        <>
            <section className="w-full py-4 text-center h-fit">
                <Title>{pilgrimage?.title}</Title>
            </section>
            <section>
                <TextContainer
                    audio={pilgrimage?.audio}
                    contents={pilgrimage?.data ?? []}
                />
            </section>
        </>
    );
}
