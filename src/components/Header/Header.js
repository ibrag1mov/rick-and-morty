import { Link, NavLink } from "react-router-dom"


export const Header = () => {
    return (
        <header className="shadow py-4">
            <div className="container">
                <div className="d-flex align-item-center justify-content-between">
                    <Link to="/" className="text-decoration-none fs-4 text-dark">The Rick and Morty</Link>
                    <nav>
                        <ul className="d-flex align-item-center gap-3 list-unstyled m-0">
                            <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-decoration-underline text-dark" : "text-decoration-none text-dark"}>Character</NavLink></li>
                            <li><NavLink to={"location"} className={({ isActive }) => isActive ? "text-decoration-underline text-dark" : "text-decoration-none text-dark"}>Location</NavLink></li>
                            <li><NavLink to={"episode"} className={({ isActive }) => isActive ? "text-decoration-underline text-dark" : "text-decoration-none text-dark"}>Episode</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}