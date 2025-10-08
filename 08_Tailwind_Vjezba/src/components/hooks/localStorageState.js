import { useState, useEffect } from 'react';

export default function useLocalStorageState(storageKey, initialValue){
    const [state, setState] = useState();

    useEffect(function(){
        if(localStorage.getItem(storageKey)) setState(localStorage.getItem(storageKey));
        else setState(localStorage.getItem(initialValue));
    },[])

    return [state, setState];
}