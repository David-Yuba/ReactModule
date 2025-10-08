import { useState, useEffect } from "react";

export default function UsersList(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");

    useEffect(function(){
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(response.ok) return response.json();
            else throw new Error("Greška pri učitavanju korsinika")
        })
        .then(json =>{
            console.log("response json: ", json);
            setUsers(json);
            setStatus("Korisnici uspješno učitani.");
            setIsLoading(false);
        }).catch(function(error){
            setStatus(error);
            setIsLoading(false);
        });
    },[])

    /* const users =[ 
        {id: 1, name: "Ana", role: "Admin"},
        {id: 2, name: "Ivan", role: "User"},
        {id: 3, name: "Maja", role: "Moderator"},
    ]; */

    return (
        <div>
            <h2>Korisnici</h2>
            {isLoading ? (<p>Loading...</p>) : (
            <ul style={{listStyleType:"none", paddingLeft:0}}>
                {users && users.map(user => (
                    <li key = {user.id}>
                        {user.name} - <em>{user.email}</em>
                    </li>
                ))}
            </ul>
            )}
            {status && <p>{ status }</p>}
        </div>
    )
}