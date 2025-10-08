import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function ThemeSwitcher(){
    const [theme, setTheme] = useContext(ThemeContext);

    return(
            <div style={theme === "dark" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "whitesmoke", color: "black"}}>
                    <h1>Theme Switcher</h1>
                    <button onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")}>Change theme</button>
            </div>
    )
}