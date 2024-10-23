import Image from 'next/image';

export default function Hero() {
    return (
        <>
            <section id="home" className="w-full flex flex-col items-center">
                <Image
                    alt="KBIHU Al-Muhajirin"
                    src={`/img/app/logo.png`}
                    width={300}
                    height={400}
                    className="w-16 lg:w-24 mb-1"
                />
                <h1 className="text-white font-bold text-base lg:text-lg">
                    Panduan Haji & Umrah
                </h1>
                <span className="text-white block text-sm lg:text-base">
                    KBIHU Al-Muhajirin
                </span>
                <span className="text-white block text-sm lg:text-base uppercase">
                    Purwakarta
                </span>
            </section>
        </>
    );
}
