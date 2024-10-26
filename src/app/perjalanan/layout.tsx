import TextLayout from "@/components/Layout/TextLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TextLayout>{children}</TextLayout>
        </>
    );
}
