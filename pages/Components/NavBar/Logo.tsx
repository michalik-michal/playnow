'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        // <Image 
        //     alt="Logo"
        //     className="hidden md:block cursor-pointer"
        //     height="100"
        //     width="100"
        //     src="/images/logo.png"
        // />
        <p className="text-xl font-semibold cursor-pointer"> PLAY<span className=" text-sky-500 font-bol">NOW</span> </p>
    )
}

export default Logo;
