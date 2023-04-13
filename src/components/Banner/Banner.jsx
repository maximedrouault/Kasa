import "./banner.css"

export default function Banner({bannerPicture, bannerTitle}) {
    return (
        <section className="banner">
            <img src={bannerPicture} alt="" className="banner-picture" />
            <h1 className="banner-title">{bannerTitle}</h1>
        </section>
    )
}