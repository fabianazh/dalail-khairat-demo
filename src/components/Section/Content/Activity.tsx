"use client";

import TextContainer from "@/components/Container/TextContainer";
import Title from "@/components/Typography/Title";
import { activityService } from "@/services/activityService";

export default function Activity({ kegiatanId }: { kegiatanId: string }) {
    const activity: TextContent | null | undefined =
        activityService.getActivityDetail(kegiatanId);

    return (
        <>
            <section className="w-full py-4 text-center h-fit">
                <Title>{activity?.title}</Title>
            </section>
            <section>
                <TextContainer
                    audio={activity?.audio}
                    contents={activity?.data ?? []}
                />
            </section>
        </>
    );
}
