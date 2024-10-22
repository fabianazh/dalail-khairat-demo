'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { perspectiveItemVariant } from '@/constants/variant';
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
                className={`fixed bottom-0 lg:bottom-auto flex justify-center lg:top-5 lg:right-5 z-50 h-fit w-full lg:w-auto`}
            >
                <AnimatePresence>
                    {isOpen && (
                        <div className="px-8 lg:px-6 flex flex-col gap-6 lg:gap-10 bg-stone-100 rounded-b-none lg:rounded-b-xl rounded-xl py-8 w-full lg:w-96">
                            {/* Visibility Settings */}
                            <div className="border-box flex flex-col gap-4 lg:gap-3">
                                <motion.span
                                    // variants={perspectiveItemVariant}
                                    // custom={1}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className={`text-xl lg:text-xl font-black`}
                                >
                                    Visibilitas
                                </motion.span>
                                <div className="w-full flex flex-col bg-white rounded-xl shadow-sm overflow-hidden px-3">
                                    <div className="w-full flex justify-between items-center py-3">
                                        <span className="font-medium text-base">
                                            Bacaan Latin
                                        </span>
                                        {/* Toggle Switch for Bacaan Latin */}
                                        <div className="">
                                            <input
                                                type="checkbox"
                                                checked={showLatin}
                                                onChange={() =>
                                                    setShowLatin(!showLatin)
                                                }
                                                className="toggle-checkbox"
                                            />
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className="w-full flex justify-between items-center py-3">
                                        <span className="font-medium text-base">
                                            Terjemahan
                                        </span>
                                        {/* Toggle Switch for Terjemahan */}
                                        <div className="">
                                            <input
                                                type="checkbox"
                                                checked={showTranslation}
                                                onChange={() =>
                                                    setShowTranslation(
                                                        !showTranslation
                                                    )
                                                }
                                                className="toggle-checkbox"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Visibility Settings */}

                            {/* Font Size Settings */}
                            <div className="flex flex-col gap-4 lg:gap-3">
                                <motion.span
                                    // variants={perspectiveItemVariant}
                                    // custom={2}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className={`text-xl lg:text-xl font-black`}
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
                                            min="20"
                                            max="40"
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
