import { Link } from "react-router-dom"

export default function NotFound(){

    return (
        <>
            <h2>Page NOT Found</h2>
            <Link to="/">Back to home</Link>
        </>
    )
}