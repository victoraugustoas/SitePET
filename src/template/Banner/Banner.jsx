import React from 'react'
import './Banner.css'

export default props => (
    <section className="slide">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

                {props.children}

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>

            </div>
        </div>
    </section>
)

export const BannerStatic = props => {
    let styleInline = {
        backgroundImage: `url('${props.urlImg}')`,
        backgroundPosition: props.position ? props.position : ''
    }

    let bannerStatic = (
        <section className="banner">
            <div className="background-banner-static" style={styleInline}></div>

            <div className="text-banner d-flex flex-column align-items-center justify-content-center">
                <h1>{props.title}</h1>
                <h4>{props.subtitle}</h4>
            </div>
        </section >
    )

    return bannerStatic
}