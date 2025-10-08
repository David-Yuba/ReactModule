import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import Header from "./components/Header";

export default function Layout(){
    let [themeState, setThemeState] = useState("dark")
    return(
        <>
            <ThemeContext.Provider value = {[themeState, setThemeState]}>
                <div style={themeState === "dark" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "whitesmoke", color: "black"}}>
                <Header/>
                <Outlet/>
                <footer>
                    All rights reserved
                </footer>
                </div>
            </ThemeContext.Provider>
        </>
    )
}