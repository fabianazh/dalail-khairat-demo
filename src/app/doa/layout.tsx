import TabLayout from "@/components/Layout/TabLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TabLayout>{children}</TabLayout>
        </>
    );
}
