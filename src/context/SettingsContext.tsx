"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

const defaultSettings = {
    arabFontSize: 29,
    latinFontSize: 17,
    showLatin: true,
    showTranslation: false,
    showAudio: true,
};

const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
);

export function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
}

export function SettingsProvider({ children }: { children: ReactNode }) {
    const [arabFontSize, setArabFontSize] = useState<number>(
        defaultSettings.arabFontSize
    );
    const [latinFontSize, setLatinFontSize] = useState<number>(
        defaultSettings.latinFontSize
    );
    const [showLatin, setShowLatin] = useState<boolean>(
        defaultSettings.showLatin
    );
    const [showTranslation, setShowTranslation] = useState<boolean>(
        defaultSettings.showTranslation
    );
    const [showAudio, setShowAudio] = useState<boolean>(
        defaultSettings.showAudio
    );

    useEffect(() => {
        const storedArabFontSize = localStorage.getItem("arabFontSize");
        const storedLatinFontSize = localStorage.getItem("latinFontSize");
        const storedShowLatin = localStorage.getItem("showLatin");
        const storedShowTranslation = localStorage.getItem("showTranslation");
        const storedShowAudio = localStorage.getItem("showAudio");

        if (storedArabFontSize) setArabFontSize(Number(storedArabFontSize));
        if (storedLatinFontSize) setLatinFontSize(Number(storedLatinFontSize));
        if (storedShowLatin !== null) setShowLatin(storedShowLatin === "true");
        if (storedShowTranslation !== null)
            setShowTranslation(storedShowTranslation === "true");
        if (storedShowAudio !== null) setShowAudio(storedShowAudio === "true");
    }, []);

    const saveSettings = () => {
        localStorage.setItem("arabFontSize", arabFontSize.toString());
        localStorage.setItem("latinFontSize", latinFontSize.toString());
        localStorage.setItem("showLatin", showLatin.toString());
        localStorage.setItem("showTranslation", showTranslation.toString());
        localStorage.setItem("showAudio", showAudio.toString());
    };

    const resetSettings = () => {
        setArabFontSize(defaultSettings.arabFontSize);
        setLatinFontSize(defaultSettings.latinFontSize);
        setShowLatin(defaultSettings.showLatin);
        setShowTranslation(defaultSettings.showTranslation);
        setShowAudio(defaultSettings.showAudio);
        localStorage.setItem(
            "arabFontSize",
            defaultSettings.arabFontSize.toString()
        );
        localStorage.setItem(
            "latinFontSize",
            defaultSettings.latinFontSize.toString()
        );
        localStorage.setItem("showLatin", defaultSettings.showLatin.toString());
        localStorage.setItem(
            "showTranslation",
            defaultSettings.showTranslation.toString()
        );
        localStorage.setItem("showAudio", defaultSettings.showAudio.toString());
    };

    return (
        <SettingsContext.Provider
            value={{
                arabFontSize,
                setArabFontSize,
                latinFontSize,
                setLatinFontSize,
                showLatin,
                setShowLatin,
                showTranslation,
                setShowTranslation,
                showAudio,
                setShowAudio,
                saveSettings,
                resetSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}
