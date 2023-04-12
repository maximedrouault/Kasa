import "./footer.css"
import Logo from "../../assets/logo-footer.png"

export default function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo de KASA, location de logements" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}