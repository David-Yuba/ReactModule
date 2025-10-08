import { useContext, useEffect } from "react"
import { ThemeContext } from "./ThemeContext"


export default function MainContent(){
    const {themeState, setTheme} = useContext(ThemeContext);

    useEffect(function(){
        const local = localStorage.getItem("theme");
        if(local) setTheme(local);
        else setTheme("autumn");
    }, [])

    return (
      <div className={"h-full flex justify-center items-center " + ((themeState === "autumn") ? "bg-amber-800" : "bg-cyan-700")}>
        <button className="max-h-min" onClick={() => setTheme((value) => {
            localStorage.setItem("theme", (value === "autumn") ? "winter" : "autumn");
            return (value === "autumn") ? "winter" : "autumn";
        })}>Change Theme</button>
      </div>
    )
}