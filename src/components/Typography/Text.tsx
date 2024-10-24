"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Text({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { latinFontSize } = useSettings();

    return (
        <>
            <span
                className={`block ${roboto.className} ${className}`}
                style={{
                    fontSize: `${latinFontSize}px`,
                }}
            >
                {children}{" "}
            </span>
        </>
    );
}
