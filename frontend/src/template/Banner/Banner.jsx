import React from 'react'
import './Banner.css'
import BannerItem from './BannerItem/BannerItem'

import img1 from '../../assets/imgs/2.jpg'

export default props => (
    <section className="slide">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <BannerItem active urlImg={"https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png"} altImg="Primeiro Slide"
                    title="Computação Desplugada" description="Bla Bla bla"
                    textButton="Ver Mais" />

                <BannerItem urlImg={img1} altImg="Segundo Slide"
                    title="Oficinas de Programação" description="Bla Bla bla"
                    textButton="Ver Mais" />

                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Próximo</span>
                </a>

            </div>
        </div>
    </section>
)