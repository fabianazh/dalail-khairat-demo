'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Divider from '../Other/Divider';

export default function NavModal({
    isOpen,
    arabFontSize,
    setArabFontSize,
    latinFontSize,
    setLatinFontSize,
    showLatin,
    setShowLatin,
    showTranslation,
    setShowTranslation,
}: {
    isOpen: boolean;
    arabFontSize: number;
    setArabFontSize: (value: number) => void;
    latinFontSize: number;
    setLatinFontSize: (value: number) => void;
    showLatin: boolean;
    setShowLatin: (value: boolean) => void;
    showTranslation: boolean;
    setShowTranslation: (value: boolean) => void;
}) {
    return (
        <>
            {/* Nav Container */}
            <motion.div
                variants={{
                    open: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            y: { duration: 0.3, ease: 'easeOut' },
                            opacity: { duration: 0.4 },
                        },
                    },
                    closed: {
                        opacity: 0,
                        y: '60px',
                        transition: {
                            y: { duration: 0.2, ease: 'easeOut' },
                            opacity: { duration: 0.4 },
                        },
                    },
                }}
                animate={isOpen ? 'open' : 'closed'}
                initial="closed"
                exit="closed"
                className={`fixed bottom-0 lg:bottom-auto flex justify-center lg:top-5 lg:right-5 z-50 h-fit w-full lg:w-auto`}
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
                                        <span className="font-medium text-base">
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
                                        <span className="font-medium text-base">
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
                                <div className="w-full flex flex-col bg-white rounded-xl shadow-sm overflow-hidden px-3 py-1">
                                    {/* Ukuran Teks Arab */}
                                    <div className="w-full flex justify-between items-center py-3 gap-2">
                                        <span className="font-medium text-base">
                                            Ukuran Teks Arab
                                        </span>
                                        <input
                                            type="range"
                                            min="25"
                                            max="45"
                                            value={arabFontSize}
                                            onChange={(e) =>
                                                setArabFontSize(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-1/2"
                                        />
                                        <span>{arabFontSize}px</span>
                                    </div>
                                    <Divider />
                                    {/* Ukuran Teks Latin */}
                                    <div className="w-full flex justify-between items-center py-3 gap-2">
                                        <span className="font-medium text-base">
                                            Ukuran Teks Latin
                                        </span>
                                        <input
                                            type="range"
                                            min="14"
                                            max="25"
                                            value={latinFontSize}
                                            onChange={(e) =>
                                                setLatinFontSize(
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-1/2"
                                        />
                                        <span>{latinFontSize}px</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Font Size Settings */}
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
            {/* End Nav Container */}
        </>
    );
}