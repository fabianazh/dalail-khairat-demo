"use client";

import { SettingsProvider } from "@/context/SettingsContext";
import Header from "@/components/Partials/Header";

export default function TabLayout({ children }: { children: React.ReactNode }) {
    return (
        <SettingsProvider>
            <Header />
            <main className="w-full min-h-screen px-4 pb-6 lg:px-32">
                {children}
            </main>
        </SettingsProvider>
    );
}
