'use client';

import { useSettings } from '@/context/SettingsContext';
import { amiri } from '@/app/fonts';
import { useEffect, useState } from 'react';

export default function Arabic({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { arabFontSize } = useSettings();
    const [mounted, setMounted] = useState(false);

    // Ensure this component only renders after hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Don't render anything until after hydration
    }
    return (
        <>
            <span
                className={`block text-end ${className} ${amiri.className}`}
                style={{
                    fontSize: `${arabFontSize}px`,
                }}
            >
                {children}
            </span>
        </>
    );
}
