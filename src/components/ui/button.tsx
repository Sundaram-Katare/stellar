import { MoveUpRight } from "lucide-react"
import Link from "next/link"

export default function Button({ text, href, color } : { text: string, href: string, color: any }){
    return (
        <>
         <Link href={href} className={`flex flex-row gap-2 px-2 rounded-lg py-1`} style={{ background: color}}>
           <h2 className="font-k2d text-2xl text-center">{text}</h2>
           <MoveUpRight />
         </Link>
        </>
    )
}