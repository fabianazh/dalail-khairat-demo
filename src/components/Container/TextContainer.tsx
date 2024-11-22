"use client";

import Arabic from "@/components/Typography/Arabic";
import Latin from "@/components/Typography/Latin";
import Text from "@/components/Typography/Text";
import Title from "@/components/Typography/Title";
import Translate from "@/components/Typography/Translate";
import Note from "@/components/Typography/Note";
import { roboto } from "@/app/fonts";
import Author from "@/components/Typography/Author";
import AudioModal from "@/components/Modal/AudioModal";

export default function TextContainer({
    className,
    contents,
    audio,
}: {
    className?: string;
    audio?: string;
    contents: TextData[];
}) {
    return (
        <>
            {audio && <AudioModal audioUrl={audio ?? ""} />}
            <ul
                className={`w-full flex flex-col h-fit gap-1 ${roboto.className} ${className}`}
            >
                {contents.map((content: TextData, index: number) => (
                    <>
                        <li key={index} className="flex flex-col gap-1">
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
                                                    <Arabic key={index}>
                                                        {arab}
                                                    </Arabic>
                                                )
                                            )
                                        ) : (
                                            <Arabic>{content.arab.arab}</Arabic>
                                        )}
                                        {Array.isArray(content.arab.latin) ? (
                                            content.arab.latin.map(
                                                (
                                                    latin: string,
                                                    index: number
                                                ) => (
                                                    <Latin key={index}>
                                                        {latin}
                                                    </Latin>
                                                )
                                            )
                                        ) : (
                                            <Latin>{content.arab.latin}</Latin>
                                        )}
                                        {Array.isArray(
                                            content.arab.translate
                                        ) ? (
                                            content.arab.translate.map(
                                                (
                                                    translate: string,
                                                    index: number
                                                ) => (
                                                    <Translate
                                                        key={index}
                                                        className="inline-block"
                                                        source={
                                                            Array.isArray(
                                                                content.arab
                                                                    ?.source
                                                            )
                                                                ? content.arab
                                                                      .source[0]
                                                                : content.arab
                                                                      ?.source
                                                        }
                                                    >
                                                        {translate}
                                                    </Translate>
                                                )
                                            )
                                        ) : (
                                            <Translate
                                                className="inline-block"
                                                source={
                                                    Array.isArray(
                                                        content.arab.source
                                                    )
                                                        ? content.arab.source[0]
                                                        : content.arab.source
                                                }
                                            >
                                                {content.arab.translate}
                                            </Translate>
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
                                                        latin?:
                                                            | string
                                                            | string[];
                                                        translate?:
                                                            | string
                                                            | string[];
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
