"use client";

import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";

export default function AudioModal({
    isOpen,
    setIsOpen,
    audioUrl,
    setAudioUrl,
}: {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    audioUrl: string;
    setAudioUrl: (value: string) => void;
}) {
    function closeModal() {
        setAudioUrl("");
        setIsOpen(false);
    }

    return (
        <motion.div
            variants={{
                enter: {
                    bottom: "-4rem",
                },
                open: {
                    bottom: "0rem",
                },
                closed: {
                    bottom: "-4rem",
                },
            }}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            exit="closed"
            transition={{ duration: 0.2 }}
            className={`fixed z-30 left-0 w-full h-fit bg-white border-t shadow-md`}
        >
            <div className="relative w-full h-full grid place-items-center top-0 left-0 px-4 py-3">
                <div
                    onClick={closeModal}
                    className="inline-block w-fit h-fit absolute right-4 top-1/2 -translate-y-1/2 text-3xl"
                >
                    <BiX />
                </div>
                <div className="w-fit h-fit">
                    <audio controls autoPlay className="h-9">
                        <source src={audioUrl} />
                    </audio>
                </div>
            </div>
        </motion.div>
    );
}
