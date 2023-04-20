'use client';
 import axios from "axios";
 import { FcGoogle } from "react-icons/fc";
 import { useCallback, useState } from "react";
 import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
 import useRegisterModal from "@/pages/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/pages/hooks/useLoginModal";
// AIzaSyDRf26FUQi6G1rxz7TLzNu0mHhIHrR7QNE
 const LoginModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLodaing, setIsLodaing] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
     } = useForm<FieldValues>({
            defaultValues: {
                email: "",
                password: ""
            }
        });
    
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLodaing(true);

        axios.post("/makeCallToRegisterApi", data)
        .then(() => {
            registerModal.onClose();
        })
        .catch((error) => {
            toast.error("Something went wrong.");
        })
        .finally(() => {
            setIsLodaing(false);
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back." subtitle="Login to your account!"/>
            <Input id="email" label="Email" disabled={isLodaing} register={register} errors={errors} required/>
            <Input id="password" label="Password" type="password" disabled={isLodaing} register={register} errors={errors} required/>
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
                    <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )
    
    return (
        <Modal disabled={isLodaing} isOpen={loginModal.isOpen} title="Login" actionLabel="Continue" onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
    )
 }

 export default LoginModal;