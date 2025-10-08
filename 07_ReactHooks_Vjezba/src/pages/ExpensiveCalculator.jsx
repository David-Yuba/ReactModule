import { useState, useMemo, useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";


export default function ExpensiveCalculator(){
    const [number, setNumber] = useState(0);
    const result = useMemo(()=> factorial(number), [number]);
    const [theme, setTheme] = useContext(ThemeContext);

    function factorial(n) {
        console.log("Računam faktorijel...");
        let result = 1;
        for (let i = 1; i <= n; i++) {
        // umjetno usporenje
            for (let j = 0; j < 1e6; j++) {}
            result *= i;
        }
        return result;
    }

    return(
        <div>
            <h1>Expensive Calculator</h1>
            <label>Broj: </label>
            <input name = "number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <p>Result: {result}</p>
            <button onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")}>Change theme</button>
        </div>
    )
}

