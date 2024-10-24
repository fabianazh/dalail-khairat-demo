"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function Title({
    className,
    children,
    placeItem = "center",
    size = "lg",
}: {
    className?: string;
    children: React.ReactNode;
    placeItem?: "left" | "center" | "right";
    size?: "sm" | "lg";
}) {
    const { latinFontSize } = useSettings();
    let placeItemClass, fontSize;

    switch (placeItem) {
        case "left":
            placeItemClass = "text-left";
            break;
        case "right":
            placeItemClass = "text-right";
            break;
        default:
            placeItemClass = "text-center";
            break;
    }

    switch (size) {
        case "sm":
            fontSize = 1;
            break;
        default:
            fontSize = 4;
            break;
    }

    return (
        <>
            <h1
                className={`font-semibold block ${placeItemClass} ${roboto.className} ${className}`}
                style={{ fontSize: `${latinFontSize + fontSize}px` }}
            >
                {children}
            </h1>
        </>
    );
}
