import React from 'react'
import './Home.css'

import Navbar from '../../template/Navbar/Navbar'
import Diary from '../../template/Diary/Diary'
import RecentActivities from '../../template/RecentActivities/RecentActivities'
import Banner from '../../template/Banner/Banner'
import Footer from '../../template/Footer/Footer'
import BannerItem from '../../template/Banner/BannerItem/BannerItem'

import cartaz_ssd from '../../assets/imgs/sorteio_ssd.png'
import cartaz_ssd_mobile from '../../assets/imgs/sorteio_ssd_mobile.png'

import cartaz_minicurso from '../../assets/imgs/cartaz_minicurso.png'
import cartaz_minicurso_mobile from '../../assets/imgs/logos/minicurso_mobile.png'

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner>
            <BannerItem active urlImgs={[
                { src: cartaz_minicurso_mobile, size: 768 },
                { src: cartaz_minicurso }
            ]}
                url='/compdes'
                subtitle="Minicurso de C com foco em Algoritmos e Estruturas de dados I"
                title="Minicurso de C"
                textButton="Ver Mais" />

            <BannerItem urlImgs={[
                { src: cartaz_ssd_mobile, size: 768 },
                { src: cartaz_ssd }
            ]}
                url='/oficina'
                subtitle="O dinheiro arrecadado será utilizado em projetos do PET"
                title="Sorteio de SSD 240GB"
                textButton="Ver Mais" />
        </Banner>
        <Diary />
        <RecentActivities />
        <Footer />
    </React.Fragment>
)