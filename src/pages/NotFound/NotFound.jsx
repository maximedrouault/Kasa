import "./notfound.css"
import { Link } from "react-router-dom"
import App from "../../App"

export default function NotFound() {
    return (
        <App>
            <section className="section-notfound">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className="link-return-home">Retourner sur la page d’accueil</Link>
            </section>
        </App>
    )
}