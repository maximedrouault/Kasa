import "./navbar.css"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {

    const currentPath = useLocation().pathname;

    return (
        <nav>
            <ul className="nav-list">
                <li className={currentPath === "/" ? "nav-list-item-active" : "nav-list-item"}>
                    <Link to="/">Accueil</Link>
                </li>
                <li className={currentPath === "/about" ? "nav-list-item-active" : "nav-list-item"}>
                    <Link to="/about">À Propos</Link>
                </li>
            </ul>
        </nav>
    )
}