'use client';
import Image from "next/image";
import {CgProfile} from "react-icons/cg"

const Avatar = () => {
    return (
       // <Image className="rounded-full" height="30" width="30" alt="Avatar" src="/"/>
       <CgProfile size={21}/>
    )
}

export default Avatar;