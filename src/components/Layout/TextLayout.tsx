"use client";

import { SettingsProvider } from "@/context/SettingsContext";
import Header from "@/components/Partials/Header";
import { AudioProvider } from "@/context/AudioContext";

export default function TextLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SettingsProvider>
            <AudioProvider>
                <Header />
                <main className="w-full min-h-screen px-4 pt-20 pb-6 lg:px-32">
                    {children}
                </main>
            </AudioProvider>
        </SettingsProvider>
    );
}
