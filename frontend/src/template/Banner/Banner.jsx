import React from 'react'
import './Banner.css'
import BannerItem from './BannerItem/BannerItem'

import img1 from '../../assets/imgs/2.jpg'

export default props => (
    <section className="slide">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <BannerItem active urlImg={"https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png"} altImg="Primeiro Slide"
                    title="Computação Desplugada" description="Bla Bla bla"
                    textButton="Ver Mais" />

                <BannerItem urlImg={img1} altImg="Segundo Slide"
                    title="Oficinas de Programação" description="Bla Bla bla"
                    textButton="Ver Mais" />

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