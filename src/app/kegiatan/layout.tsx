import ContentLayout from '@/components/Layout/ContentLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ContentLayout>{children}</ContentLayout>
        </>
    );
}
