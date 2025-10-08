import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <nav>
                <NavLink to="/" style={({ isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>
                    useState Demo
                </NavLink>
                {" "} | {" "}
                <NavLink to="/use-effect" style={({ isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>
                    useEffect Demo
                </NavLink>
                {" "} | {" "}
                <NavLink to="/use-context" style={({ isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>
                    useContext Demo
                </NavLink>
                {" "} | {" "}
                <NavLink to="/use-ref" style={({ isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>
                    useRef Demo
                </NavLink>
                {" "} | {" "}
                <NavLink to="/use-callback" style={({ isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>
                    useCallback Demo
                </NavLink>
                {" "} | {" "}
                <NavLink to="/use-memo" style={({ isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>
                    useMemo Demo
                </NavLink>
                {" "} | {" "}
                <NavLink to="/custom-hook" style={({ isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>
                    Custom Hook Demo
                </NavLink>
            </nav>
        </header>
    )
}