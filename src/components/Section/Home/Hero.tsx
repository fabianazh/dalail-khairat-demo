'use client';

import Header from '@/components/Partials/Header';
import { surahService } from '@/services/surahService';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const surah = surahService.getSurahDetail(1);
    const defaultArabFontSize = 25;
    const defaultLatinFontSize = 15;
    const defaultShowLatin = true;
    const defaultShowTranslation = false;
    const [arabFontSize, setArabFontSize] = useState<number>(
        Number(localStorage.getItem('arabFontSize')) ?? defaultArabFontSize
    );
    const [latinFontSize, setLatinFontSize] = useState<number>(
        Number(localStorage.getItem('latinFontSize')) ?? defaultLatinFontSize
    );
    const [showLatin, setShowLatin] = useState<boolean>(() => {
        const storedShowLatin =
            localStorage.getItem('showLatin') === 'true' ? true : false;
        return storedShowLatin ?? defaultShowLatin;
    });
    const [showTranslation, setShowTranslation] = useState<boolean>(() => {
        const storedShowTranslation =
            localStorage.getItem('showTranslation') === 'true' ? true : false;
        return storedShowTranslation ?? defaultShowTranslation;
    });

    async function saveSettings() {
        localStorage.setItem('arabFontSize', arabFontSize.toString());
        localStorage.setItem('latinFontSize', latinFontSize.toString());
        localStorage.setItem('showLatin', showLatin.toString());
        localStorage.setItem('showTranslation', showTranslation.toString());
    }

    async function resetSettings() {
        setArabFontSize(25);
        setLatinFontSize(15);
        setShowLatin(true);
        setShowTranslation(false);
        localStorage.setItem('arabFontSize', defaultArabFontSize.toString());
        localStorage.setItem('latinFontSize', defaultLatinFontSize.toString());
        localStorage.setItem('showLatin', defaultShowLatin.toString());
        localStorage.setItem(
            'showTranslation',
            defaultShowTranslation.toString()
        );
    }

    return (
        <>
            <Header
                arabFontSize={arabFontSize}
                setArabFontSize={setArabFontSize}
                latinFontSize={latinFontSize}
                setLatinFontSize={setLatinFontSize}
                showLatin={showLatin}
                setShowLatin={setShowLatin}
                showTranslation={showTranslation}
                setShowTranslation={setShowTranslation}
                saveSettings={saveSettings}
                resetSettings={resetSettings}
            />

            <main>
                <section
                    id="home"
                    className="w-full min-h-screen flex flex-col px-5 pt-24 lg:pt-6 lg:px-14 gap-4 mb-16 lg:mb-0"
                >
                    <div className="w-full flex flex-col items-center">
                        <h1
                            className="font-semibold"
                            style={{ fontSize: `${arabFontSize + 9}px` }}
                        >
                            {surah?.nama}
                        </h1>
                        <AnimatePresence>
                            {showLatin && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="font-medium"
                                    style={{
                                        fontSize: `${latinFontSize}px`,
                                    }}
                                >
                                    ({surah?.namaLatin})
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {showTranslation && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="font-medium"
                                    style={{
                                        fontSize: `${latinFontSize}px`,
                                    }}
                                >
                                    {surah?.arti}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        {surah?.ayat.map((ayat, index: number) => (
                            <div key={index}>
                                <span
                                    className="block text-end"
                                    style={{
                                        fontSize: `${arabFontSize}px`,
                                    }}
                                >
                                    {ayat.teksArab}
                                </span>
                                <AnimatePresence>
                                    {showLatin && (
                                        <motion.span
                                            className="font-semibold block"
                                            style={{
                                                fontSize: `${latinFontSize}px`,
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {ayat?.nomorAyat} . {ayat.teksLatin}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence>
                                    {showTranslation && (
                                        <motion.span
                                            className="font-medium text-stone-700"
                                            style={{
                                                fontSize: `${latinFontSize}px`,
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {ayat.teksIndonesia}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
