import { useRef } from "react";

export default function FocusInput(){

    const inputRef = useRef();

    function handleClick(){
        inputRef.current.focus();
    }
    return(
        <div>
            <h1>Focus Input</h1>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Focus input</button>
        </div>
    )
}