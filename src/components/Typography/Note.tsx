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
                            Catatan :{" "}
                        </span>
                        <span> {notes.map((note: string) => note)}</span>
                    </span>
                ) : (
                    <ul className="w-full flex flex-col">
                        <span className="font-semibold">Catatan : </span>
                        {notes.map((note: string, index: number) => (
                            <li key={index} className="flex gap-2">
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
