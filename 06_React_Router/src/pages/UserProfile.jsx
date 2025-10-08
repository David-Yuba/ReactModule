import { useParams } from "react-router-dom";

export default function UserProfile(){
    const { id } = useParams();

    return <h2>Profil korisnika sa ID: {id}</h2>
}