import useLocalStorage from "../hooks/useLocalStorage";

export default function LocalStorage(){
    const [name, setName] = useLocalStorage("name","");

    return(
        <div>
            
            <h1>Local Storage</h1>
            <label>Ime: </label>
            <input name = "number" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}