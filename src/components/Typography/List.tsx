import Text from './Text';

export default function List({
    className,
    children,
    index,
    nested = false,
}: {
    className?: string;
    children: React.ReactNode;
    index?: string;
    nested?: boolean;
}) {
    if (nested === false) {
        return (
            <>
                <Text className={className}>
                    <span className="font-semibold">{index}. </span>
                    {children}
                </Text>
            </>
        );
    } else {
        return (
            <>
                <Text className={`block ml-3 ${className}`}>
                    <span className="font-semibold">
                        {index}
                        {') '}{' '}
                    </span>
                    {children}
                </Text>
            </>
        );
    }
}
