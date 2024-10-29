"use client";

import { SettingsProvider } from "@/context/SettingsContext";
import Header from "@/components/Partials/Header";
import { AudioProvider } from "@/context/AudioContext";

export default function TabLayout({ children }: { children: React.ReactNode }) {
    return (
        <SettingsProvider>
            <AudioProvider>
                <Header />
                <main className="w-full min-h-screen">{children}</main>
            </AudioProvider>
        </SettingsProvider>
    );
}
