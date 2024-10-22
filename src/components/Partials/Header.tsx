'use client';

// import Navbar from '@/components/Partials/Navbar'
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavButton from '@/components/Partials/NavButton';
import AppIcon from '@/components/Icon/AppIcon';
import Navbar from './Navbar';
import NavModal from './NavModal';

export default function Header({
    arabFontSize,
    setArabFontSize,
    latinFontSize,
    setLatinFontSize,
    showLatin,
    setShowLatin,
    showTranslation,
    setShowTranslation,
}: {
    arabFontSize: number;
    setArabFontSize: (value: number) => void;
    latinFontSize: number;
    setLatinFontSize: (value: number) => void;
    showLatin: boolean;
    setShowLatin: (value: boolean) => void;
    showTranslation: boolean;
    setShowTranslation: (value: boolean) => void;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        onClick={() => setIsOpen(!isOpen)}
                        variants={{
                            initial: {
                                opacity: 0,
                            },
                            enter: {
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                },
                            },
                            exit: {
                                opacity: 0,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.3,
                                },
                            },
                        }}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-40"
                    ></motion.div>
                )}
            </AnimatePresence>
            {/* End Overlay */}
            {/* Navbar Modal */}
            <NavModal
                isOpen={isOpen}
                arabFontSize={arabFontSize}
                setArabFontSize={setArabFontSize}
                latinFontSize={latinFontSize}
                setLatinFontSize={setLatinFontSize}
                showLatin={showLatin}
                setShowLatin={setShowLatin}
                showTranslation={showTranslation}
                setShowTranslation={setShowTranslation}
            />
            {/* Navbar Modal */}
            {/* Header */}
            <motion.header
                className={`w-full h-fit fixed top-0 left-0 z-30 transition-all duration-200 py-4 px-5 lg:px-14 flex items-center justify-between bg-transparent`}
            >
                {/* Logo and Name */}
                <AppIcon />
                {/* End Logo and Name */}
                {/* Navbar */}
                <NavButton
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    containerClassName="flex"
                />
                {/* End Navbar */}

                {/* Nav Button */}
                {/* <NavButton isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                {/* End Nav Button */}
            </motion.header>
            {/* End Header */}
        </>
    );
}
