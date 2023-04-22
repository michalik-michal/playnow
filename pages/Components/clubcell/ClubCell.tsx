'use client'
import Image from "next/image";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { useState, useCallback } from "react";

interface ClubCellProps {
    name: string;
    available: [string, string];
    images: [string, string];
}

const ClubCell: React.FC<ClubCellProps> = ({
    name,
    available,
    images
}) => {
    // const images = ["/bloniasport.webp", "/bloniasport1.jpeg"]

    const [selectedImage, setSelectedImage] = useState(0);

    const handleRighttArrow = useCallback(() => {
        (selectedImage === images.length -1) ? setSelectedImage(0) : setSelectedImage(selectedImage + 1);
    }, [images, selectedImage]);

    const handleLeftArrow = useCallback(() => {
        (selectedImage === 0) ? setSelectedImage(images.length - 1) : setSelectedImage(selectedImage - 1);
    }, [images, selectedImage]);

    return(
        <div className="bg-gray-200 bg-opacity-70 rounded-xl pb-5 ">
            <div className="relative duration-300 text-white">
                <div className="relative">
                <AiOutlineArrowLeft className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 hover:cursor-pointer" size={20} onClick={handleLeftArrow} />
                <AiOutlineArrowRight className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 hover:cursor-pointer" size={20} onClick={handleRighttArrow}/>
                <Image src={images[selectedImage]} alt="image" className="w-full rounded-t-xl h-[180px]" width={270} height={200}/>
                </div>
                <div className="absolute inset-0 bg-black opacity-20 z-10 rounded-xl"></div>
                <div className="absolute inset-0 flex items-end justify-left pl-2 z-20">
                    <div className="pb-2">
                       <h1 className=" text-2xl font-bold"> {name} </h1>
                    </div>
                 </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-white pt-2 px-2">
                    <h2 className=" bg-sky-500 justify-center flex rounded-lg p-1 hover:border-white border-2 border-transparent hover:cursor-pointer"> {available[0]}</h2>
                    <h2 className=" bg-sky-500 justify-center flex rounded-lg p-1 hover:border-white border-2 border-transparent hover:cursor-pointer"> {available[1]}</h2>
            </div>
        </div>
    )
}

export default ClubCell;
