import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate();

    function handleLogin(){
        navigate("/dashboard");
    }

    return <button onClick={handleLogin}>Login</button>
}