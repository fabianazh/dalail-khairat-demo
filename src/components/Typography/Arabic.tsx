"use client";

import { useSettings } from "@/context/SettingsContext";
import { qalam } from "@/app/fonts";
import { useEffect, useState } from "react";

export default function Arabic({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { arabFontSize } = useSettings();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <>
            <span
                className={`arab block text-end font-medium ${className} ${qalam.className}`}
                style={{
                    fontSize: `${arabFontSize + 3}px`,
                    lineHeight: "1.8",
                }}
            >
                {children}
            </span>
        </>
    );
}
