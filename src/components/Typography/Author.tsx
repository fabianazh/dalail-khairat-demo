"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Author({
    className = "block",
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { latinFontSize } = useSettings();

    return (
        <>
            <span
                className={`text-center font-normal italic ${roboto.className} ${className}`}
                style={{
                    fontSize: `${latinFontSize}px`,
                }}
            >
                <span className="font-medium">Oleh: </span>
                {children}
            </span>
        </>
    );
}
