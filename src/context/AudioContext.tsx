"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function useAudio() {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within a AudioProvider");
    }
    return context;
}

export function AudioProvider({ children }: { children: ReactNode }) {
    const [audioUrl, setAudioUrl] = useState<string>("");

    function playAudio(audio: string) {
        if (audioUrl !== "") {
            setAudioUrl("");
            setTimeout(() => {
                setAudioUrl(audio);
            }, 400);
        } else {
            setAudioUrl(audio);
        }
    }

    function stopAudio() {
        setAudioUrl("");
    }

    return (
        <AudioContext.Provider
            value={{
                audioUrl,
                setAudioUrl,
                playAudio,
                stopAudio,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}
