import { Urbanist, Poppins, Amiri_Quran, Amiri } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const urbanist = Urbanist({ subsets: ['latin'] });
export const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] });
