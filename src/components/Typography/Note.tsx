"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";
import Text from "./Text";

export default function Note({
    className,
    notes,
}: {
    className?: string;
    notes: string[];
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
                {notes.length < 2 ? (
                    <span>
                        <span className="inline-block font-semibold">
                            Catatan:{" "}
                        </span>
                        {notes.map((note: string, index: number) => note)}
                    </span>
                ) : (
                    <ul className="w-full flex flex-col">
                        <span className="font-semibold">Catatan: </span>
                        {notes.map((note: string, index: number) => (
                            <li key={index} className="ml-5 flex gap-2">
                                <Text
                                    text={`•`}
                                    className="font-semibold inline-block"
                                />
                                <Text
                                    text={`${note}`}
                                    className="inline-block"
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </span>
        </>
    );
}
