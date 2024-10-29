"use client";

import { useSettings } from "@/context/SettingsContext";
import { qalam } from "@/app/fonts";
import { useEffect, useState } from "react";
import { useAudio } from "@/context/AudioContext";
import { BiPlayCircle, BiXCircle } from "react-icons/bi";

export default function Arabic({
    className,
    children,
    audio,
}: {
    className?: string;
    children: React.ReactNode;
    audio: string;
}) {
    const { arabFontSize } = useSettings();
    const [mounted, setMounted] = useState(false);
    const {
        audioUrl,
        setAudioUrl,
        setIsModalOpen,
        isModalOpen,
        stopAudio,
        playAudio,
    } = useAudio();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full h-fit flex flex-col gap-4">
            <div className="w-full flex flex-col">
                <span
                    className={`arab block text-end font-medium ${className} ${qalam.className}`}
                    style={{
                        fontSize: `${arabFontSize + 3}px`,
                        lineHeight: "1.8",
                    }}
                >
                    {children}
                </span>
            </div>
            {audio !== "" && (
                <div className="w-full grid place-items-center h-fit text-white rounded shadow py-2 text-3xl bg-green-600">
                    {audio === audioUrl ? (
                        <BiXCircle
                            onClick={stopAudio}
                            className="cursor-pointer"
                        />
                    ) : (
                        <BiPlayCircle
                            onClick={() => playAudio(audio)}
                            className="cursor-pointer"
                        />
                    )}
                </div>
            )}
        </div>
    );
}
