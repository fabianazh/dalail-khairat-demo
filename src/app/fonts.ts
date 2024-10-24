import { Poppins, Amiri_Quran, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});
export const amiri = Amiri_Quran({
    subsets: ["arabic"],
    weight: ["400"],
});
export const qalam = localFont({ src: "./fonts/Al-Qalam.ttf" });
