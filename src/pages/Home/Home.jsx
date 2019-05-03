import React from 'react'
import './Home.css'

import Navbar from '../../template/Navbar/Navbar'
import Diary from '../../template/Diary/Diary'
import RecentActivities from '../../template/RecentActivities/RecentActivities'
import Banner from '../../template/Banner/Banner'
import Footer from '../../template/Footer/Footer'
import BannerItem from '../../template/Banner/BannerItem/BannerItem'

import img1 from '../../assets/imgs/sorteio_ssd.png'
import cartaz_minicurso from '../../assets/imgs/cartaz_minicurso.png'

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner>
            <BannerItem active urlImg={cartaz_minicurso}
                url='/compdes'
                subtitle="Minicurso de C com foco em Algoritmos e Estruturas de dados I"
                title="Minicurso de C"
                textButton="Ver Mais" />

            <BannerItem urlImg={img1}
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