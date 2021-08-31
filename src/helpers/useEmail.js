import { useState } from "react";

export const useEmail = () => {
    const [ email, setEmail ] = useState("contact__email-container animate__animated animate__fadeOut");

    const setTheEmail = () =>{
        if(email === "contact__email-container email-active box-active animate__animated animate__fadeIn"){
            setEmail("contact__email-container animate__animated animate__fadeOut");
        }else{
            setEmail("contact__email-container email-active box-active animate__animated animate__fadeIn");
        }
    }
    return [ email, setTheEmail ];
}