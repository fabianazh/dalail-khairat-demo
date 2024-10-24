import Arabic from "@/components/Typography/Arabic";
import Latin from "@/components/Typography/Latin";
import Text from "@/components/Typography/Text";
import Title from "@/components/Typography/Title";
import Translate from "@/components/Typography/Translate";
import { roboto } from "@/app/fonts";

export default function TextContainer({
    className,
    contents,
}: {
    className?: string;
    contents: {
        index?: string;
        text?: string;
        content?: {
            index?: string;
            text?: string;
            arab?: {
                title?: string;
                arab?: string;
                latin?: string;
                translate?: string;
                source?: string;
            };
        }[];
        arab?: {
            title?: string;
            arab?: string;
            latin?: string;
            translate?: string;
            source?: string;
        };
    }[];
}) {
    return (
        <>
            <ul
                className={`flex flex-col w-fit h-fit gap-1 ${roboto.className}`}
            >
                {contents.map(
                    (content: {
                        index?: string;
                        text?: string;
                        content?: {
                            index?: string;
                            text?: string;
                            arab?: {
                                title?: string;
                                arab?: string;
                                latin?: string;
                                translate?: string;
                                source?: string;
                            };
                        }[];
                        arab?: {
                            title?: string;
                            arab?: string;
                            latin?: string;
                            translate?: string;
                            source?: string;
                        };
                    }) => (
                        <>
                            <li
                                key={content.index}
                                className="flex flex-col gap-1"
                            >
                                {content.text && (
                                    <div className="w-full flex gap-1.5">
                                        {content.index && (
                                            <span className="font-semibold">
                                                {content.index}.{" "}
                                            </span>
                                        )}
                                        <Text>{content.text}</Text>
                                    </div>
                                )}
                                {content.arab && (
                                    <>
                                        <div className="w-full flex flex-col gap-3 py-1.5">
                                            <Title placeItem="left" size="sm">
                                                {content.arab.title}
                                            </Title>
                                            <Arabic>{content.arab.arab}</Arabic>
                                            <Latin>{content.arab.latin}</Latin>
                                            <div className="w-full">
                                                <Translate
                                                    className="inline-block"
                                                    source={content.arab.source}
                                                >
                                                    {content.arab.translate}
                                                </Translate>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <ul className="flex flex-col gap-1.5">
                                    {(content?.content?.length ?? 0) > 0 && (
                                        <>
                                            {content?.content?.map(
                                                (
                                                    item: {
                                                        index?: string;
                                                        text?: string;
                                                        arab?: {
                                                            title?: string;
                                                            arab?: string;
                                                            latin?: string;
                                                            translate?: string;
                                                        };
                                                    },
                                                    index: number
                                                ) => (
                                                    <>
                                                        <li
                                                            key={index}
                                                            className="ml-5 flex gap-1.5"
                                                        >
                                                            <span className="font-semibold inline-block">
                                                                {item.index}.{" "}
                                                            </span>
                                                            {item.text && (
                                                                <>
                                                                    <Text className="inline-block">
                                                                        {
                                                                            item.text
                                                                        }
                                                                    </Text>
                                                                </>
                                                            )}
                                                        </li>
                                                    </>
                                                )
                                            )}
                                        </>
                                    )}
                                </ul>
                            </li>
                        </>
                    )
                )}
            </ul>
        </>
    );
}
