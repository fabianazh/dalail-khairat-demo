"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Translate({
    className = "block",
    children,
    source,
}: {
    className?: string;
    children: React.ReactNode;
    source?: string;
}) {
    const { latinFontSize, showTranslation } = useSettings();

    if (showTranslation === false) {
        return;
    }

    return (
        <>
            <span
                className={`font-normal ${roboto.className} ${className}`}
                style={{
                    fontSize: `${latinFontSize}px`,
                }}
            >
                <span className="font-semibold">Artinya, &quot;</span>
                {children} <span className="font-semibold">&quot; </span>
                {source && (
                    <span
                        className={`font-semibold inline-block`}
                        style={{
                            fontSize: `${latinFontSize}px`,
                        }}
                    >
                        {" ("}
                        {source}
                        {")."}
                    </span>
                )}
            </span>
        </>
    );
}
