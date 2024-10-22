import {
    DM_Sans,
    Urbanist,
    Poppins,
    Montserrat,
    Mr_Dafoe,
} from 'next/font/google'

export const dmSans = DM_Sans({ subsets: ['latin'] })
export const montserrat = Montserrat({ subsets: ['latin'] })
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export const urbanist = Urbanist({ subsets: ['latin'] })
export const alexBrush = Mr_Dafoe({ weight: ['400'], subsets: ['latin'] })
