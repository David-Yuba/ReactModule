import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "./ThemeContext"

export default function  Header(){
    const [theme] = useContext(ThemeContext);
    return(
        <header>
            <h4>Current Theme is {theme}</h4>
            <NavLink to="/" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Counter With Limit</NavLink>{" "} | {" "}
            <NavLink to="/clock" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Clock</NavLink>{" "} | {" "}
            <NavLink to="/theme-switcher" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Theme switcher</NavLink>{" "} | {" "}
            <NavLink to="/focus-input" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Focus input</NavLink>{" "} | {" "}
            <NavLink to="/todo-list" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Todo list</NavLink>{" "} | {" "}
            <NavLink to="/search-list" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Search list</NavLink>{" "} | {" "}
            <NavLink to="/expensive-calculator" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Expensive calculator</NavLink>{" "} | {" "}
            <NavLink to="/local-storage" style={({isActive})=> ({fontWeight: isActive ? "bold" : "normal"})}>Local storage</NavLink>
        </header>
    )
}