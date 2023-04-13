import "./header.css"
import Logo from "../../assets/logo-kasa-header.png"
import Navbar from "../Navbar/Navbar"

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo de KASA, location de logements" />
			<Navbar />
        </header>
    )
}