import { useState } from "react"

export default function CounterWithLimit(){
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev+1);
    const reset = () => setCount(0);
    

    return(
        <div>
            <h1>Counter With Limit</h1>
            <p>Trenutno kilkova: {count}</p>
            <button onClick={increment} disabled={(count === 10) ? true : false}>+1</button>
            <button onClick={reset}>Reset</button>
            {count === 10 && <p>Dosegli ste maksimalni broj klikova!</p>}
        </div>
    )
}