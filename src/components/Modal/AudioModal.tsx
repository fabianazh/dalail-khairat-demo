"use client";

import { useSettings } from "@/context/SettingsContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function AudioModal({ audioUrl }: { audioUrl: string }) {
    const { showAudio } = useSettings();

    return (
        <AnimatePresence>
            {showAudio && (
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
                    animate={showAudio ? "open" : "closed"}
                    initial="closed"
                    exit="closed"
                    transition={{ duration: 0.2 }}
                    className={`fixed z-30 left-0 w-full h-fit bg-white border-t shadow-md`}
                >
                    <div className="relative w-full h-full grid place-items-center top-0 left-0 px-4 py-3">
                        <div className="w-fit h-fit">
                            <audio controls className="h-9" src={audioUrl} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
