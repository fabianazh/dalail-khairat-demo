export default function Divider({ className }: { className?: string }) {
    return (
        <>
            <div
                className={`w-full bg-stone-200 h-0.5 rounded block mx-auto ${className}`}
            ></div>
        </>
    );
}
