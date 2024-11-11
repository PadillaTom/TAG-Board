import bullseye from "../../public/images/bullseye.png"
import Image from "next/image";

const LandingPage = () => {
    return (
        <div className="h-full flex items-center justify-around flex-col">
            <div className="flex items-center justify-around flex-col">
                <div
                    className="
                    flex items-center border-0
                    shadow-lg
                    rounded-full
                    py-3 px-5
                    bg-white
                    text-amber-700 text-lg tracking-wide font-extralight
                    ">
                    <Image src={bullseye} alt="TAG Board" className="mb-0.5 mr-4 max-w-8 object-cover"></Image>
                    TAG Board
                </div>
            </div>
        </div>
    )
}

export default LandingPage;