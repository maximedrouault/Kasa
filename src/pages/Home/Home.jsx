import App from "../../App"
import Banner from "../../components/Banner/Banner"
import HomeBannerPicture from "../../assets/mer-et-falaises-banner.jpg"
import Gallery from "../../components/Gallery/Gallery"

export default function Home() {
    return (
        <App>
                <Banner bannerPicture={HomeBannerPicture} bannerTitle="Chez vous, partout et ailleurs" />
                <Gallery />
        </App>
    )
}