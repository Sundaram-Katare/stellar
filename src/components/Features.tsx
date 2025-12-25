import Card from "./ui/Card";

export default function Features() {
    return (
        <>
            <div className="bg-transparent my-36 flex flex-col justify-center items-center font-jersey gap-10">
                <h1 className="text-6xl font-regular text-white text-center">WHY <span className="text-[#FF6FE2]">Stellar</span></h1>

                <div className="hidden md:block  relative flex items-center gap-6 mt-10">
                    <Card
                        title="Smart Suggestions"
                        img="/magic.png"
                        classname=" md:-left-40 lg:-left-90 absolute z-[20] md:-bottom-10 lg:-bottom-20"
                        rotate={-28}
                        initalRotate={28}
                    />
                    <Card
                        title="Bug Detection"
                        img="/bug.png"
                        classname=" bg-gradient-to-b from-[#FF7070] to-red-950 "
                        rotate={0}
                        initalRotate={0}
                    />
                    <Card
                        title="Style Alignment"
                        img="/glasses.png"
                        classname="md:-right-40 lg:-right-90 absolute z-[20] md:-bottom-10 lg:-bottom-20"
                        rotate={28}
                        initalRotate={-28}
                    />
                </div>

                <div className=" md:hidden flex flex-col space-y-2">
                  <Card
                        title="Smart Suggestions"
                        img="/magic.png"
                        classname=" md:-left-40 lg:-left-90  md:-bottom-10 lg:-bottom-20"
                        rotate={-8}
                        initalRotate={8}
                    />
                    <Card
                        title="Bug Detection"
                        img="/bug.png"
                        classname=" bg-gradient-to-b from-[#FF7070] to-red-950 "
                        rotate={0}
                        initalRotate={0}
                    />
                    <Card
                        title="Style Alignment"
                        img="/glasses.png"
                        classname="md:-right-40 lg:-right-90  md:-bottom-10 lg:-bottom-20"
                        rotate={8}
                        initalRotate={-8}
                    />
                </div>
            </div>
        </>
    )
}