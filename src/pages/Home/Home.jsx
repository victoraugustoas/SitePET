import React from 'react'
import './Home.css'

import Navbar from '../../template/Navbar/Navbar'
import Diary from '../../template/Diary/Diary'
import RecentActivities from '../../template/RecentActivities/RecentActivities'
import Banner from '../../template/Banner/Banner'
import Footer from '../../template/Footer/Footer'
import BannerItem from '../../template/Banner/BannerItem/BannerItem'

import img1 from '../../assets/imgs/2.jpg'

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner>
            <BannerItem active urlImg={"https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png"}
                url='/compdes'
                subtitle="Bla Bla bla"
                title="Computação Desplugada"
                textButton="Ver Mais" />

            <BannerItem urlImg={img1}
                url='/oficina'
                subtitle="Bla Bla bla"
                title="Oficinas de Programação"
                textButton="Ver Mais" />
        </Banner>
        <Diary />
        <RecentActivities />
        <Footer />
    </React.Fragment>
)