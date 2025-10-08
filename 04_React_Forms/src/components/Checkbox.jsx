import { useState } from "react";

export default function Checkbox({label, name, checked, onChange, required}){
    const [error, setError] = useState("");

    function handleChange(e){
        let checked = e.target.checked;
        if(required && !checked){
            setError(`{${label} je obavezno polje}`)
        } 
        else setError("");
        onChange(name, checked);
    }

    return(
        <div className="form-group">
            <br/>
            <label htmlFor={name}>
                <input type="checkbox" id={name} name={name} onChange={handleChange} checked={checked}/>
                { label }
            </label>
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    )
}