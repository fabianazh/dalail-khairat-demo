"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import TextContainer from "@/components/Container/TextContainer";
import { roboto } from "@/app/fonts";

export default function TabContainer({
    contents,
}: {
    contents: {
        label: string;
        audio?: string;
        data: TextData[];
    }[];
}) {
    const [activeTab, setActiveTab] = useState<number>(0);

    function handleTabClick(index: number) {
        setActiveTab(index);
    }

    function handleSwipe(delta: number) {
        if (contents.length < 2) {
            return;
        } else {
            if (delta > 0 && activeTab > 0) {
                setActiveTab(activeTab - 1);
            } else if (delta < 0 && activeTab < contents.length - 1) {
                setActiveTab(activeTab + 1);
            }
        }
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(-1),
        onSwipedRight: () => handleSwipe(1),
    });

    return (
        <div {...swipeHandlers} className="w-full overflow-x-hidden">
            {/* Tab Label */}
            <div
                className={`w-full h-fit justify-center fixed top-14 left-0 bg-green-600 text-white grid grid-cols-7`}
            >
                {contents.map((tab, index) => (
                    <div
                        key={index}
                        className={`relative w-full py-2.5 lg:py-4 cursor-pointer flex flex-grow justify-center`}
                        onClick={() => handleTabClick(index)}
                    >
                        <div
                            className={`flex flex-col lg:flex-row text-[0.65rem] lg:text-xs text-center uppercase ${roboto.className}`}
                            dangerouslySetInnerHTML={{ __html: tab.label }}
                        />
                        <div
                            className={`w-full h-0.5 lg:h-1 absolute bottom-0 left-0 rounded-t-sm bg-white transition-transform duration-300 ${
                                activeTab === index
                                    ? "scale-x-100"
                                    : "scale-x-0"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
            {/* End Tab Label */}

            {/* Tab Content */}
            <div className={`w-full min-h-screen pt-24`}>
                <TextContainer
                    audio={contents[activeTab].audio}
                    contents={contents[activeTab].data}
                />
            </div>

            {/* End Tab Content */}
        </div>
    );
}
