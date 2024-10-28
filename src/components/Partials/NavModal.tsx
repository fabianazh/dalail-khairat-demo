"use client";

import { AnimatePresence, motion } from "framer-motion";
import Divider from "@/components/Other/Divider";
import { useSettings } from "@/context/SettingsContext";

export default function NavModal({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    const {
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
    } = useSettings();

    return (
        <>
            {/* Nav Container */}
            <motion.div
                variants={{
                    open: {
                        opacity: 1,
                        y: "var(--nav-y-open, 0px)",
                        transition: {
                            y: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.4 },
                        },
                    },
                    closed: {
                        opacity: 0,
                        y: "var(--nav-y-closed)",
                        transition: {
                            y: { duration: 0.2, ease: "easeOut" },
                            opacity: { duration: 0.4 },
                        },
                    },
                }}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
                exit="closed"
                className={`fixed bottom-0 lg:bottom-auto flex justify-center lg:top-5 lg:right-5 z-50 h-fit w-full lg:w-auto [--nav-y-closed:60px] [--nav-y-open:0px] lg:[--nav-y-closed:0px]`}
            >
                <AnimatePresence>
                    {isOpen && (
                        <div className="px-4 lg:px-6 flex flex-col gap-6 bg-stone-100 rounded-b-none lg:rounded-b-xl rounded-xl py-8 w-full lg:w-96">
                            {/* Visibility Settings */}
                            <div className="border-box flex flex-col gap-2 lg:gap-3">
                                <motion.span
                                    // variants={perspectiveItemVariant}
                                    // custom={1}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className={`text-lg lg:text-xl font-semibold`}
                                >
                                    Visibilitas
                                </motion.span>
                                <div className="w-full flex flex-col bg-white rounded-xl shadow-sm overflow-hidden px-3">
                                    <div className="w-full flex justify-between items-center py-3">
                                        <span className="font-medium text-sm lg:text-sm">
                                            Bacaan Latin
                                        </span>
                                        {/* Toggle Switch */}
                                        <label
                                            htmlFor="latinText"
                                            className="w-auto flex items-center cursor-pointer select-none text-black dark:text-white"
                                        >
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    id="latinText"
                                                    className="peer sr-only"
                                                    checked={showLatin}
                                                    onChange={() =>
                                                        setShowLatin(!showLatin)
                                                    }
                                                />
                                                <div className="block h-6 rounded-full bg-gray-200 w-10"></div>
                                                <div className="absolute w-4 h-4 transition bg-stone-400 rounded-full dot left-1 top-1 peer-checked:translate-x-full peer-checked:bg-green-500"></div>
                                            </div>
                                        </label>
                                        {/* End Toggle Switch */}
                                    </div>
                                    <Divider />
                                    <div className="w-full flex justify-between items-center py-3">
                                        <span className="font-medium text-sm lg:text-sm">
                                            Terjemahan
                                        </span>
                                        {/* Toggle Switch */}
                                        <label
                                            htmlFor="translationText"
                                            className="w-auto flex items-center cursor-pointer select-none text-black dark:text-white"
                                        >
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    id="translationText"
                                                    className="peer sr-only"
                                                    checked={showTranslation}
                                                    onChange={() =>
                                                        setShowTranslation(
                                                            !showTranslation
                                                        )
                                                    }
                                                />
                                                <div className="block h-6 rounded-full bg-gray-200 w-10"></div>
                                                <div className="absolute w-4 h-4 transition bg-stone-400 rounded-full dot left-1 top-1 peer-checked:translate-x-full peer-checked:bg-green-500"></div>
                                            </div>
                                        </label>
                                        {/* End Toggle Switch */}
                                    </div>
                                </div>
                            </div>
                            {/* End Visibility Settings */}

                            {/* Font Size Settings */}
                            <div className="flex flex-col gap-2 lg:gap-3">
                                <motion.span
                                    // variants={perspectiveItemVariant}
                                    // custom={2}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className={`text-lg lg:text-xl font-semibold`}
                                >
                                    Ukuran Teks
                                </motion.span>
                                <div className="w-full flex flex-col bg-white rounded-xl shadow-sm overflow-hidden px-3 py-1 divide-y-2">
                                    {/* Ukuran Teks Arab */}
                                    <div className="w-full flex flex-col py-3">
                                        <span className="font-medium text-sm lg:text-sm">
                                            Ukuran Teks Arab
                                        </span>
                                        <div className="w-full flex justify-between items-center gap-1">
                                            <input
                                                type="range"
                                                min="18"
                                                max="45"
                                                value={arabFontSize}
                                                onChange={(e) =>
                                                    setArabFontSize(
                                                        Number(e.target.value)
                                                    )
                                                }
                                                className="w-10/12"
                                            />
                                            <span>{arabFontSize}px</span>
                                        </div>
                                    </div>
                                    {/* Ukuran Teks Latin */}
                                    <div className="w-full flex flex-col py-3">
                                        <span className="font-medium text-sm lg:text-sm">
                                            Ukuran Teks Latin
                                        </span>
                                        <div className="w-full flex justify-between items-center gap-1">
                                            <input
                                                type="range"
                                                min="10"
                                                max="25"
                                                value={latinFontSize}
                                                onChange={(e) =>
                                                    setLatinFontSize(
                                                        Number(e.target.value)
                                                    )
                                                }
                                                className="w-10/12"
                                            />
                                            <span>{latinFontSize}px</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Font Size Settings */}
                            {/* Action Buttons */}
                            <div className="w-full grid grid-cols-2 justify-between gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        resetSettings();
                                    }}
                                    className="grid place-items-center py-2 rounded-md shadow-sm cursor-pointer bg-stone-300/80"
                                >
                                    <span className="text-sm font-medium">
                                        Reset
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        saveSettings();
                                    }}
                                    className="grid place-items-center py-2 rounded-md shadow-sm cursor-pointer bg-green-500"
                                >
                                    <span className="text-sm font-medium text-white">
                                        Simpan
                                    </span>
                                </button>
                            </div>
                            {/* End Action Buttons */}
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
            {/* End Nav Container */}
        </>
    );
}
