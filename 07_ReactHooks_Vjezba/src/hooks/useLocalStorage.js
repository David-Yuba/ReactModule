import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue){
    const [state, setState] = useState(localStorage.getItem(key) ? localStorage.getItem(key) : initialValue);
    
    useEffect(function(){
        localStorage.setItem(key,state);
    }, [state,key])

    return [state, setState];
}