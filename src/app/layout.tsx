import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: ["KBIHU Al-Muhajirin"],
    title: {
        default: "KBIHU Al-Muhajirin",
        template: "%s | KBIHU Al-Muhajirin",
    },
    description: "KBIHU Al-Muhajirin PURWAKARTA",
    openGraph: {
        title: "KBIHU Al-Muhajirin",
        description: "KBIHU Al-Muhajirin d",
        url: `https://dalail-khairat-demo.vercel.app`,
        siteName: "KBIHU Al-Muhajirin",
        locale: "id_ID",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
