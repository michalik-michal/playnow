'use client';
import {BiSearch} from 'react-icons/bi'
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSport, setSelectedSport] = useState("Tennis");

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const selectSport = useCallback(() => {
        if (selectedSport === "Tennis") {
            setSelectedSport(() => "Squash");
        } else {
            setSelectedSport(() => "Tennis");
        }
    }, [selectedSport]);

    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
            <div className="text-sm font-semibold px-6" onClick={toggleOpen}>
                   {selectedSport}
                </div>
                <div className="text-sm font-semibold px-6 border-x-[1px]">
                    Anywhere
                </div>
                <div className="hidden sm:block text-sm font-semibold px-6  flex-1 text-center"> 
                    Any Time
                </div>
                <div className="text-sm pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="p-2 bg-sky-500 rounded-full text-white">
                    <BiSearch size={18}/>
                </div>
                </div>
                
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[100px] bg-white overflow-hidden top-20 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <MenuItem label={selectedSport == "Tennis" ? "Squash" : "Tennis"} onClick={ selectSport }/>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Search;