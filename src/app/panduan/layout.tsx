import TableLayout from "@/components/Layout/TableLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TableLayout>{children}</TableLayout>
        </>
    );
}
