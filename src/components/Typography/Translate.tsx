"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Translate({
    className = "block",
    translate,
    source,
}: {
    className?: string;
    translate: string | string[];
    source?: string | string[];
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
                {Array.isArray(translate) ? (
                    <div className="">
                        <span className="font-semibold">Artinya: </span>
                        {translate.map((item: string, index: number) => (
                            <span key={index} className="block">
                                <span className="font-semibold">&quot; </span>
                                {item}{" "}
                                <span className="font-semibold">&quot; </span>
                            </span>
                        ))}
                    </div>
                ) : (
                    <>
                        <span className="font-semibold">Artinya, &quot; </span>
                        {translate}{" "}
                        <span className="font-semibold">&quot; </span>
                    </>
                )}

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
