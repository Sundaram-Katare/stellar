import { MoveUpRight } from "lucide-react"
import Link from "next/link"

interface ButtonProp {
  text: string,
  href: string,
  classname?: string
}

export default function Button({ text, href, classname } : ButtonProp){
    return (
        <>
         <Link href={href} className={`flex flex-row gap-2 px-2 rounded-lg py-1 ${classname} hover:animate-pulse transition-all easeInOut`}>
           <h2 className="font-k2d text-2xl text-center">{text}</h2>
           <MoveUpRight />
         </Link>
        </>
    )
}