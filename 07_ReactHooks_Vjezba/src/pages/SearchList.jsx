import { useState, useCallback, useContext } from "react";

import { ThemeContext } from "../components/ThemeContext";

export default function SearchList(){
    const [names, setNames] = useState(["Ana", "Marko", "Ivana", "Petar", "Lana"]);
    const [theme, setTheme] = useContext(ThemeContext);

    const [search, setSearch] = useState("");
    const fil = useCallback(filterNames, [search, names])

    function filterNames(){
        console.log("I ran");
        return names.filter(n => n.toLowerCase().includes(search.toLowerCase()));
    }

    return(
        <div>
            <h1>Search List</h1>
            <label>Search: </label>
            <input name = "search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <NameList filteredNames={fil}></NameList>
            <button onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")}>Change theme</button>
        </div>
    )
}

function NameList({filteredNames}){
    return (
        <ul>
            {filteredNames().map((n, index) => 
                <li key={index}>{n}</li>
            )}
        </ul>
    )
}