import { navItems } from "@/constants/component";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

export default function PageList() {
    return (
        <>
            <section
                id="list"
                className="w-11/12 lg:w-6/12 h-fit bg-white rounded-lg overflow-hidden p-3 py-2"
            >
                <div className="overflow-y-scroll h-full w-full flex flex-col divide-y-2">
                    {navItems.map((navItem: NavItem, index: number) => (
                        <>
                            <Link
                                key={index}
                                href={navItem.link}
                                className="w-full h-fit flex items-center justify-between py-2 gap-2 bg-white hover:bg-stone-100 transition-colors duration-300 px-2"
                            >
                                <div className="w-fit flex gap-3 lg:gap-4 items-center">
                                    <div className="h-7 lg:h-8 text-sm aspect-square shrink-0 bg-green-600 text-white grid place-items-center rounded-sm">
                                        {index + 1}
                                    </div>
                                    <div className="w-fit flex flex-col">
                                        <span className="text-sm lg:text-base block font-semibold uppercase">
                                            {navItem.title}
                                        </span>
                                        <span className="text-xs lg:text-sm text-stone-700 block font-medium uppercase">
                                            {navItem.subtitle}
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-green-600 text-white grid place-items-center rounded-full h-5 aspect-square text-xs shrink-0">
                                    <IoMdArrowForward />
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </section>
        </>
    );
}
