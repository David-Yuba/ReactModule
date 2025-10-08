import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <nav>
            <NavLink to="/" style={({isActive}) => ({fontWeight: isActive ? "bold" : "normal"})}>Home</NavLink>{" "}|{" "}
            <NavLink to="/about" style={({isActive}) => ({fontWeight: isActive ? "bold" : "normal"})}>About</NavLink>
        </nav>
    )
}