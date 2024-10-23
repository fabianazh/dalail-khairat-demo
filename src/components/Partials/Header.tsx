'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavButton from '@/components/Partials/NavButton';
import NavModal from './NavModal';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
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
                        {/* End Overlay */}
                        {/* Navbar Modal */}
                        <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
                        {/* Navbar Modal */}
                    </>
                )}
            </AnimatePresence>
            {/* Header */}
            <motion.header
                className={`w-full h-fit relative top-0 left-0 z-30 transition-all duration-200 py-4 px-5 flex items-center justify-between bg-green-600`}
            >
                {/* Logo and Name */}
                <Link
                    href="/"
                    className="w-fit flex h-fit items-center gap-2 text-white"
                >
                    <FaArrowLeft className="text-sm" />
                    <span className="text-sm">Kembali</span>
                </Link>
                {/* End Logo and Name */}
                {/* Navbar Button */}
                <HiOutlineDotsVertical
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white cursor-pointer"
                />
                {/* End Navbar Button */}
            </motion.header>
            {/* End Header */}
        </>
    );
}
