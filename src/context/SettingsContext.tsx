"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

interface SettingsContextType {
    arabFontSize: number;
    setArabFontSize: (value: number) => void;
    latinFontSize: number;
    setLatinFontSize: (value: number) => void;
    showLatin: boolean;
    setShowLatin: (value: boolean) => void;
    showTranslation: boolean;
    setShowTranslation: (value: boolean) => void;
    saveSettings: () => void;
    resetSettings: () => void;
}

const defaultSettings = {
    arabFontSize: 29,
    latinFontSize: 17,
    showLatin: true,
    showTranslation: false,
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

    useEffect(() => {
        const storedArabFontSize = localStorage.getItem("arabFontSize");
        const storedLatinFontSize = localStorage.getItem("latinFontSize");
        const storedShowLatin = localStorage.getItem("showLatin");
        const storedShowTranslation = localStorage.getItem("showTranslation");

        if (storedArabFontSize) setArabFontSize(Number(storedArabFontSize));
        if (storedLatinFontSize) setLatinFontSize(Number(storedLatinFontSize));
        if (storedShowLatin !== null) setShowLatin(storedShowLatin === "true");
        if (storedShowTranslation !== null)
            setShowTranslation(storedShowTranslation === "true");
    }, []);

    const saveSettings = () => {
        localStorage.setItem("arabFontSize", arabFontSize.toString());
        localStorage.setItem("latinFontSize", latinFontSize.toString());
        localStorage.setItem("showLatin", showLatin.toString());
        localStorage.setItem("showTranslation", showTranslation.toString());
    };

    const resetSettings = () => {
        setArabFontSize(defaultSettings.arabFontSize);
        setLatinFontSize(defaultSettings.latinFontSize);
        setShowLatin(defaultSettings.showLatin);
        setShowTranslation(defaultSettings.showTranslation);
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
                saveSettings,
                resetSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}
