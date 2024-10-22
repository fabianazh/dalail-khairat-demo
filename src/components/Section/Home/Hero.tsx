'use client';

import Header from '@/components/Partials/Header';
import { surahService } from '@/services/surahService';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const surah = surahService.getSurahDetail(1);
    const [arabFontSize, setArabFontSize] = useState<number>(25);
    const [latinFontSize, setLatinFontSize] = useState<number>(15);
    const [showLatin, setShowLatin] = useState<boolean>(true);
    const [showTranslation, setShowTranslation] = useState<boolean>(false);

    useEffect(() => {
        const storedArabFontSize = localStorage.getItem('arabFontSize');
        const storedLatinFontSize = localStorage.getItem('latinFontSize');
        const storedShowLatin = localStorage.getItem('showLatin');
        const storedShowTranslation = localStorage.getItem('showTranslation');

        if (storedArabFontSize) setArabFontSize(Number(storedArabFontSize));
        if (storedLatinFontSize) setLatinFontSize(Number(storedLatinFontSize));
        if (storedShowLatin) setShowLatin(storedShowLatin === 'true');
        if (storedShowTranslation)
            setShowTranslation(storedShowTranslation === 'true');
    }, []);

    useEffect(() => {
        localStorage.setItem('arabFontSize', arabFontSize.toString());
        localStorage.setItem('latinFontSize', latinFontSize.toString());
        localStorage.setItem('showLatin', showLatin.toString());
        localStorage.setItem('showTranslation', showTranslation.toString());
    }, [arabFontSize, latinFontSize, showLatin, showTranslation]);

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
                                        className="font-bold block"
                                        style={{
                                            fontSize: `${latinFontSize}px`,
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {ayat.teksLatin}
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
                </section>
            </main>
        </>
    );
}
