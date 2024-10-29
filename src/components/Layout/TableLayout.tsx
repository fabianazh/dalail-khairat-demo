"use client";

import { SettingsProvider } from "@/context/SettingsContext";
import Header from "@/components/Partials/Header";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import RotateModal from "@/components/Modal/RotateModal";
import { AudioProvider } from "@/context/AudioContext";

export default function TableLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    return (
        <SettingsProvider>
            <AudioProvider>
                <AnimatePresence>
                    {isModalOpen && (
                        <RotateModal
                            isOpen={isModalOpen}
                            setIsOpen={setIsModalOpen}
                        />
                    )}
                </AnimatePresence>
                <Header />
                <main className="w-full min-h-screen px-4 pt-20 pb-6 lg:px-32">
                    {children}
                </main>
            </AudioProvider>
        </SettingsProvider>
    );
}
