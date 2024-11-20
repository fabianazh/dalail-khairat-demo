"use client";

import TextContainer from "@/components/Container/TextContainer";
import Title from "@/components/Typography/Title";
import { guideService } from "@/services/guideService";

export default function Guide({ panduanId }: { panduanId: string }) {
    const guide: TextContent | null | undefined =
        guideService.getGuideDetail(panduanId);

    return (
        <>
            <section className="w-full py-4 text-center h-fit">
                <Title>{guide?.title}</Title>
            </section>
            <section>
                <TextContainer
                    audio={guide?.audio}
                    contents={guide?.data ?? []}
                />
            </section>
        </>
    );
}
