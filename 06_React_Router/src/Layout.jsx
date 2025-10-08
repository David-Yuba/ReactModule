import { Outlet, Link } from "react-router-dom"
import NavBar from "./components/Navbar"

export default function Layout(){
    return (
        <div>
            <NavBar/>
            <hr/>
            <Outlet />

            <footer>Copyright 2025 - All rights reserved</footer>
        </div>
    )
}