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

interface AudioContextType {
    audioUrl: string;
    setAudioUrl: (value: string) => void;
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    stopAudio: () => void;
    playAudio: (value: string) => void;
}
