import { Linkedin, Twitter } from "lucide-react";
import Logo from "./ui/logo";


export default function Navbar() {
    return (
        <>
         <nav className="flex flex-row justify-between px-2 py-1 bg-transparent">
           <Logo />

           <h2 className="font-jersey text-3xl">Docs</h2>

           <div className="flex flex-row gap-4">
             <button className="text-4xl cursor-pointer hover:scale-[1.05] transition-all duration-200 easeInOut"><Twitter  size={30}/></button>
             <button className="text-4xl cursor-pointer hover:scale-[1.05] transition-all duration-200 easeInOut"><Linkedin size={30} /> </button>
           </div>
         </nav>
        </>
    )
}