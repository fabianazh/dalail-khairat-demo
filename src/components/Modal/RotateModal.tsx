"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiX } from "react-icons/bi";

export default function RotateModal({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}) {
    const pathname = usePathname();

    const isTableLayout = [
        "/panduan/daftar-bawaan-jamaah-haji-perempuan",
        "/panduan/daftar-bawaan-jamaah-haji-laki-laki",
        "/panduan/larangan-larangan-ihram-dan-damnya",
        "/panduan/perbedaan-rukun-wajib-dan-sunnat-haji",
    ];

    function closeModal() {
        setIsOpen(false);
    }

    if (isTableLayout.includes(pathname)) {
        return (
            <motion.div
                variants={{
                    enter: {
                        opacity: 0,
                    },
                    open: {
                        opacity: 1,
                    },
                    closed: {
                        opacity: 0,
                    },
                }}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
                exit="closed"
                transition={{ duration: 0.2 }}
                className={`grid place-items-center sm:hidden fixed z-50 top-0 left-0 w-full h-full bg-black/70 px-4 py-10`}
                onClick={closeModal}
            >
                <div className="relative w-full h-fit py-8 px-4 bg-white rounded-md flex flex-col">
                    <div
                        onClick={closeModal}
                        className="inline-block w-fit h-fit absolute right-3 top-3 text-4xl"
                    >
                        <BiX />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <Image
                            src="/img/illustration/rotate-device.png"
                            alt="Rotate Device"
                            width={300}
                            height={300}
                            className="w-48 h-fit"
                        />
                        <span className="text-sm font-medium text-center">
                            Putar ponsel anda ke orientasi landscape.{" "}
                            <span className="block text-sm text-stone-500">
                                Untuk pengalaman yang lebih baik.
                            </span>
                        </span>
                    </div>
                </div>
            </motion.div>
        );
    } else {
        closeModal();
        return;
    }
}
