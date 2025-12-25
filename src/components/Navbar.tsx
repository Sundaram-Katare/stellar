"use client"

import { Linkedin, Twitter } from "lucide-react";
import Logo from "./ui/logo";


export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between px-2 py-1 bg-transparent">
        <Logo />

        {/* <h2 className="font-jersey text-3xl">Docs</h2> */}

        <div className="flex flex-row gap-4">
          <button
            className="text-4xl cursor-pointer hover:scale-[1.05] transition-all duration-200 ease-in-out"
            onClick={() => window.open("https://x.com/sundaramkatare", "_blank")}
          >
            <Twitter size={30} />
          </button>             
          <button className="text-4xl cursor-pointer hover:scale-[1.05] transition-all duration-200 easeInOut"><Linkedin size={30} onClick={() => window.open("https://www.linkedin.com/in/sundaram-katare5/", "_blank")} /> </button>
        </div>
      </nav>
    </>
  )
}