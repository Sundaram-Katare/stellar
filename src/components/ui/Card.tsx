"use client"

import { motion } from "framer-motion";

interface CardProps {
    title: string,
    img: string,
    classname?: string
    rotate: number
    initalRotate: number
}


export default function Card({ title, img, classname, rotate, initalRotate }: CardProps) {
    return (
        <>
            <div className="">
                <motion.div
                    initial={{ rotate: initalRotate }}
                    transition={{ duration: 3 }}
                    whileInView={{ rotate: rotate }}
                    className={`flex flex-col md:w-[160] md:h-[241] lg:w-[298] lg:h-[410] xl:w-[393] xl:h-[529] rounded-2xl bg-gradient-to-b from-[#F0F0F0] to-[#969695] justify-center items-center px-4 py-2 font-jersey text-xl md:text-3xl text-black ${classname}`}>
                    <h1 className="text-xl md:text-3xl">{title}</h1>
                    <img src={img} alt=""
                        className="h-40 md:h-fit"
                    />
                </motion.div>
            </div>
        </>
    )
}