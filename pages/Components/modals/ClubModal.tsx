'use client';
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import useRegisterModal from "@/pages/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Button from "../Button";
import useClubModal from "@/pages/hooks/useClubModal";

interface ClubModalProps {
    clubName: string;
}

const ClubModal: React.FC<ClubModalProps> = ({
    clubName
}) => {
    const clubModal = useClubModal();
    const [isLodaing, setIsLodaing] = useState(false);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back." subtitle="Login to your account!"/>
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
            <div className="text-neutral-500 text-cent mp-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div className="text-neutral-800 cursor-pointer hover:underline">
                        {clubName}
                    </div>
                </div>
            </div>
        </div>
    )
    
    return (
        <Modal disabled={isLodaing} isOpen={loginModal.isOpen} title={clubName} actionLabel="Continue" onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
    )
 }

 export default ClubModal;