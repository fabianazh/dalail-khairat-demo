"use client";

import TextContainer from "@/components/Container/TextContainer";
import Title from "@/components/Typography/Title";
import { tripService } from "@/services/tripService";

export default function Trip({ perjalananId }: { perjalananId: string }) {
    const trip: TextContent | null | undefined =
        tripService.getTripDetail(perjalananId);

    return (
        <>
            <section className="w-full py-4 text-center h-fit">
                <Title>{trip?.title}</Title>
            </section>
            <section>
                <TextContainer
                    audio={trip?.audio}
                    contents={trip?.data ?? []}
                />
            </section>
        </>
    );
}
