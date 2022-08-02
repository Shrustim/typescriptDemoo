import { useState,  SetStateAction } from "react";
export const useToggle = (initialValue: boolean):[boolean,() => void,React.Dispatch<SetStateAction<boolean>>] => {
    const [isToggle,setIsToggle] = useState(initialValue || false);
    const onToggle = () => setIsToggle(!isToggle);

       return[isToggle,onToggle,setIsToggle];
}

