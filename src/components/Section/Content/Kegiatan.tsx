"use client";

import TextContainer from "@/components/Container/TextContainer";
import Title from "@/components/Typography/Title";
import { activityService } from "@/services/activityService";

export default function Kegiatan({ kegiatanId }: { kegiatanId: string }) {
    const activity = activityService.getActivityDetail(kegiatanId);

    return (
        <>
            <section className="w-full py-4 text-center h-fit">
                <Title>{activity?.title}</Title>
            </section>
            <section>
                <TextContainer contents={activity?.data ?? []} />
            </section>
        </>
    );
}
