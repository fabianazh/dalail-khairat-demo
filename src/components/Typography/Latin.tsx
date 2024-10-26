"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Latin({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { latinFontSize, showLatin } = useSettings();

    if (showLatin === false) {
        return;
    }

    return (
        <>
            <span
                className={`block font-semibold italic ${roboto.className} ${className}`}
                style={{
                    fontSize: `${latinFontSize}px`,
                }}
            >
                {children}{" "}
            </span>
        </>
    );
}
