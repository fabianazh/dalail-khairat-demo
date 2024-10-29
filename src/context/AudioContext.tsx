"use client";

import AudioModal from "@/components/Modal/AudioModal";
import { AnimatePresence } from "framer-motion";
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

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
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function playAudio(audio: string) {
        if (audioUrl !== "") {
            setIsModalOpen(false);
            setAudioUrl("");
            setTimeout(() => {
                setIsModalOpen(true);
                setAudioUrl(audio);
            }, 400);
        } else {
            setIsModalOpen(true);
            setAudioUrl(audio);
        }
    }

    function stopAudio() {
        setIsModalOpen(false);
        setAudioUrl("");
    }

    return (
        <AudioContext.Provider
            value={{
                audioUrl,
                setAudioUrl,
                isModalOpen,
                setIsModalOpen,
                playAudio,
                stopAudio,
            }}
        >
            {children}
            <AnimatePresence>
                {isModalOpen && (
                    <AudioModal
                        audioUrl={audioUrl}
                        setAudioUrl={setAudioUrl}
                        isOpen={isModalOpen}
                        setIsOpen={setIsModalOpen}
                    />
                )}
            </AnimatePresence>
        </AudioContext.Provider>
    );
}
