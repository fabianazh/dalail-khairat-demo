"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Text({
    className,
    text,
}: {
    className?: string;
    text: string;
}) {
    const { latinFontSize } = useSettings();

    return (
        <>
            <span
                className={`block ${roboto.className} ${className}`}
                style={{
                    fontSize: `${latinFontSize}px`,
                }}
                dangerouslySetInnerHTML={{ __html: text }}
            ></span>
        </>
    );
}
