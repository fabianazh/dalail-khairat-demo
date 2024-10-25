"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Note({
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
                <span className="font-semibold">Catatan: </span>
                {children}{" "}
            </span>
        </>
    );
}
