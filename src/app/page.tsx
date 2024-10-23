import Hero from '@/components/Section/Home/Hero';
import List from '@/components/Section/Home/List';

export async function generateMetadata() {
    return {
        title: 'KBIHU Al-Muhajirin',
        description: 'KBIHU Al-Muhajirin',
    };
}

export default function HomePage() {
    return (
        <>
            <main className="relative w-screen h-screen flex flex-col shadow-inner items-center p-5 lg:p-8 gap-5 lg:gap-8">
                <div className="main absolute w-screen h-screen top-0 left-0 -z-10" />
                <Hero />
                <List />
            </main>
        </>
    );
}
