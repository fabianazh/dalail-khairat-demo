import Hero from '@/components/Section/Home/Hero';

export async function generateMetadata() {
    return {
        title: 'Dalail Khairat',
        description: 'Dalail Khairat d',
    };
}

export default function HomePage() {
    return (
        <>
            <Hero />
        </>
    );
}
