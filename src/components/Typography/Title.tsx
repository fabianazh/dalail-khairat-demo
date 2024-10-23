'use client';

import { useSettings } from '@/context/SettingsContext';

export default function Title({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { latinFontSize } = useSettings();
    return (
        <>
            <h1
                className={`font-semibold block ${className}`}
                style={{ fontSize: `${latinFontSize + 8}px` }}
            >
                {children}
            </h1>
        </>
    );
}
