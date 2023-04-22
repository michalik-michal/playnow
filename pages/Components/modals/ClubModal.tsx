'use client';
import { useCallback, useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import useClubModal from "@/pages/hooks/useClubModal";
import DateCell from "../cells/DateCell";
import DateStack from "../DateStack";

interface ClubModalProps {
    clubName: string;
}

const ClubModal: React.FC<ClubModalProps> = ({
    clubName
}) => {
    const clubModal = useClubModal();
    const [isLodaing, setIsLodaing] = useState(false);

    const bodyContent = (
        <div className="flex flex-row gap-4">
            <DateStack/>
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <div className="text-neutral-500 text-cent mp-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                </div>
            </div>
        </div>
    )
    
    return (
        <Modal disabled={isLodaing} isOpen={clubModal.isOpen} title={clubName} actionLabel="Continue" onClose={clubModal.onClose} onSubmit={console.log} body={bodyContent} footer={footerContent}/>
    )
 }

 export default ClubModal;