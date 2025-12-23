import Button from "./ui/button";

export default function Hero() {
    return (
        <>
            <div className=" flex flex-col justify-center items-center bg-transparent p-4">
                <h1 className="text-8xl text-white font-jersey bg-gradient-radial from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent text-center mt-8">AI code reviews</h1>
                <h1 className="text-8xl text-center font-jergey bg-gradient-to-r from-[#FF0999] to-[#FF44C7] bg-clip-text text-transparent ">Devs love</h1>

                <div className="flex flex-row gap-8 my-6">
                    <Button text={"GitHub"} href={"/auth"} color={"#FF5B5B"} />

                    <Button text={"GitHub"} href={"/auth"} color={"#c7c7c7ff"} />
                </div>

                <p className="font-sans text-lg text-white">Paste your code. Get actionable feedback on bugs, performance, and best practices.</p>

                <img src="/codeImage.png" alt="" 
                     className="mt-28 rounded-2xl "
                />
            </div>

        </>
    )
}