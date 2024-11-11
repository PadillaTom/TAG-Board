import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";

import bullseye from "../public/images/bullseye.png";
import {cn} from "@/lib/utils";

const textFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "600"]
})

export const Logo = ({height = 30, width = 30}) => {
    return (
        <Link href="/" className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <Image src={bullseye} alt={"Logo"}
                   height={height}
                   width={width}/>
            <p className={cn("text-lg text-neutral-700 whitespace-nowrap", textFont.className)}>
                TAG
            </p>
        </Link>
    )
}