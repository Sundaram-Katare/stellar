import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Users from "../components/Users";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[70vh] items-center justify-center px-4">
      <Hero />
      <Features />
      <Users />
    </div>
  );
}
