"use client";

import { useSettings } from "@/context/SettingsContext";
import { qalam } from "@/app/fonts";

export default function Arabic({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { arabFontSize } = useSettings();
    return (
        <div className="w-full h-fit flex flex-col gap-4">
            <div className="w-full flex flex-col">
                <span
                    className={`arab block text-end font-medium ${className} ${qalam.className}`}
                    style={{
                        fontSize: `${arabFontSize + 3}px`,
                        lineHeight: "1.8",
                    }}
                >
                    {children}
                </span>
            </div>
        </div>
    );
}
