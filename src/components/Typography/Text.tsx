'use client';

import { useSettings } from '@/context/SettingsContext';

export default function Text({
    className,
    children,
    type = 'normal',
}: {
    className?: string;
    children: React.ReactNode;
    type?: 'normal' | 'latin' | 'translate';
}) {
    const { latinFontSize } = useSettings();

    return (
        <>
            <span
                className={`block ${
                    type === 'latin' ? 'font-semibold' : 'font-normal'
                } ${className}`}
                style={{
                    fontSize: `${latinFontSize}px`,
                }}
            >
                {type === 'translate' && (
                    <span className="font-semibold">Artinya, &quot;</span>
                )}
                {children}{' '}
                {type === 'translate' && (
                    <span className="font-semibold">&quot;</span>
                )}
            </span>
        </>
    );
}
