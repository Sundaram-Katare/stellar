import Card from "./ui/Card";

export default function Features() {
    return (
        <>
            <div className="bg-transparent my-36 flex flex-col justify-center items-center font-jersey gap-10">
                <h1 className="text-6xl font-regular text-white">WHY <span className="text-[#FF6FE2]">Stellar</span></h1>

                <div className="relative flex items-center gap-6 mt-10">
                    <Card
                        title="Smart Suggestions"
                        img="https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-in-the-grasp-of-descending-starsa-flat-design-approach-vector-png-image_31517590.png"
                        classname=" -left-90 absolute z-[20] -bottom-20"
                        rotate={-28}
                        initalRotate={28}
                    />
                    <Card
                        title="Bug Detection"
                        img="https://icons.veryicon.com/png/o/miscellaneous/first-icon/bug-33.png"
                        classname=" bg-gradient-to-b from-[#FF7070] to-[#8F070E] "
                        rotate={0}
                        initalRotate={0}
                    />
                    <Card
                        title="Style Alignment"
                        img="https://www.pngplay.com/wp-content/uploads/5/Thug-Life-Glasses-Transparent-Background.png"
                        classname=" -right-90 absolute z-[20] -bottom-20"
                        rotate={28}
                        initalRotate={-28}
                    />
                </div>
            </div>
        </>
    )
}