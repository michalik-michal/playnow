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
        <h1 className="text-xl font-semibold cursor-pointer"> PLAYNOW </h1>
    )
}

export default Logo;
