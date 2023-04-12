import "./navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link  className="nav-list-item" to="/">Accueil</Link>
                </li>
                <li>
                    <Link  className="nav-list-item" to="/about">À Propos</Link>
                </li>
            </ul>
        </nav>
    )
}