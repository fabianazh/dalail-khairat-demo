import Arabic from "@/components/Typography/Arabic";
import Latin from "@/components/Typography/Latin";
import Text from "@/components/Typography/Text";
import Title from "@/components/Typography/Title";
import Translate from "@/components/Typography/Translate";
import Note from "@/components/Typography/Note";
import { roboto } from "@/app/fonts";
import Author from "../Typography/Author";

export default function TextContainer({
    className,
    contents,
}: {
    className?: string;
    contents: TextData[];
}) {
    return (
        <>
            <ul
                className={`flex flex-col w-fit h-fit gap-1 ${roboto.className} ${className}`}
            >
                {contents.map((content: TextData) => (
                    <>
                        <li key={content.index} className="flex flex-col gap-1">
                            {content.title && (
                                <Title placeItem="center" size="sm">
                                    {content.title}
                                </Title>
                            )}
                            {content.author && (
                                <Author>{content.author}</Author>
                            )}
                            {content.text && (
                                <div className="w-full flex gap-1.5">
                                    {content.index && (
                                        <Text
                                            text={`${content.index}. `}
                                            className="font-semibold"
                                        />
                                    )}
                                    <Text text={`${content.text}`} />
                                </div>
                            )}
                            {content.desc && <Text text={`${content.desc}`} />}
                            {content.arab && (
                                <>
                                    <div className="w-full flex flex-col gap-3 py-1.5">
                                        {content?.arab.title && (
                                            <Title placeItem="left" size="sm">
                                                {content.arab.title}
                                            </Title>
                                        )}
                                        {Array.isArray(content.arab.arab) ? (
                                            content.arab.arab.map(
                                                (
                                                    arab: string,
                                                    index: number
                                                ) => (
                                                    <Arabic
                                                        key={index}
                                                        audio={
                                                            content.arab?.audio
                                                        }
                                                    >
                                                        {arab}
                                                    </Arabic>
                                                )
                                            )
                                        ) : (
                                            <Arabic audio={content.arab?.audio}>
                                                {content.arab.arab}
                                            </Arabic>
                                        )}
                                        {content.arab.latin && (
                                            <Latin>{content.arab.latin}</Latin>
                                        )}
                                        {content.arab.translate && (
                                            <div className="w-full">
                                                <Translate
                                                    className="inline-block"
                                                    source={content.arab.source}
                                                >
                                                    {content.arab.translate}
                                                </Translate>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                            {content.notes && (
                                <>
                                    <Note notes={content.notes}></Note>
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
                                                        arab?:
                                                            | string
                                                            | string[];
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
                                                        <Text
                                                            text={`${item.index}. `}
                                                            className="font-semibold inline-block"
                                                        />
                                                        {item.text && (
                                                            <>
                                                                <Text
                                                                    text={`${item.text}`}
                                                                    className="inline-block"
                                                                />
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
                ))}
            </ul>
        </>
    );
}
