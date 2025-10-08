
import { useState, useCallback } from "react";

export default function SearchList(){
    const [names, setNames] = useState(["Ana", "Marko", "Ivana", "Petar", "Lana"]);

    const [search, setSearch] = useState("");
    const fil = useCallback(filterNames, [search, names])

    function filterNames(){
        return names.filter(n => n.toLowerCase().includes(search.toLowerCase()));
    }

    return(
        <div>
            <h1>Search List</h1>
            <label>Search: </label>
            <input name = "search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <NameList filteredNames={filterNames}></NameList>
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