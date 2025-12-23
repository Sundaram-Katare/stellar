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
         <motion.div 
         initial={{ rotate: initalRotate }}
         
         transition={{ duration: 3 }}  
         whileInView={{ rotate: rotate}} 
         className={`flex flex-col w-[393] h-[529] rounded-2xl bg-gradient-to-b from-[#F0F0F0] to-[#969695] justify-center items-center px-4 py-2 font-jersey text-3xl text-black ${classname}`}>
           {title}
           <img src={img} alt=""
                className=""
           />
         </motion.div>
        </>
    )
}