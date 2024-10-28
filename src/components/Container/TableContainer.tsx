"use client";

import { roboto } from "@/app/fonts";
import { useSettings } from "@/context/SettingsContext";

export default function TableContainer({
    className = "py-3 px-3 lg:px-5",
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <table
                className={`w-full h-fit flex flex-col ${roboto.className} ${className}`}
            >
                {children}
            </table>
        </>
    );
}

export function Tr({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <tr className={`w-full h-full flex flex-grow ${className}`}>
                {children}
            </tr>
        </>
    );
}

export function THead({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <thead
            className={`w-full text-left h-fit flex justify-between items-center gap-3 bg-stone-200 ${className}`}
        >
            {children}
        </thead>
    );
}

export function Th({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { latinFontSize } = useSettings();
    return (
        <th
            className={`h-full shrink-0 p-2 text-left uppercase flex items-center font-semibold ${className}`}
            style={{
                fontSize: `${latinFontSize - 3}px`,
            }}
        >
            {children}
        </th>
    );
}

export function TBody({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <tbody className={`w-full h-fit flex flex-col ${className}`}>
            {children}
        </tbody>
    );
}

export function Td({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { latinFontSize } = useSettings();
    return (
        <td
            className={`px-2 py-1 flex flex-grow border items-center hyphens-auto ${className}`}
            style={{
                fontSize: `${latinFontSize - 3}px`,
            }}
        >
            {children}
        </td>
    );
}

TableContainer.THead = THead;
TableContainer.Tr = Tr;
TableContainer.Th = Th;
TableContainer.Tbody = TBody;
TableContainer.Td = Td;
