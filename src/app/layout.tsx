import type { Metadata } from 'next';
import './globals.css';
import { dmSans } from './fonts';

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: ['Dalail Khairat'],
    title: {
        default: 'Dalail Khairat',
        template: '%s | Dalail Khairat',
    },
    description: 'Dalail Khairat d',
    openGraph: {
        title: 'Dalail Khairat',
        description: 'Dalail Khairat d',
        url: process.env.NEXT_PUBLIC_BASE_URL,
        siteName: 'Dalail Khairat',
        locale: 'id_ID',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
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
            <body className={dmSans.className}>{children}</body>
        </html>
    );
}
