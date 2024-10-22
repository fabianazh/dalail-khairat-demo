import { montserrat } from '@/app/fonts';
import Link from 'next/link';

export default function AppIcon({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
    return (
        <>
            <Link
                href={`https://this-is-peru.vercel.app`}
                className={`text-black font-extrabold w-fit flex ${
                    size === 'sm' ? 'text-base' : 'text-xl'
                } ${montserrat.className}`}
            >
                Dalail<span className="text-green-500"> Khairat</span>.
            </Link>
        </>
    );
}
