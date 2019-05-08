import React from 'react';
import './Petianos.css'

import Navbar from '../../template/Navbar/Navbar'
import Footer from '../../template/Footer/Footer'
import { BannerStatic } from '../../template/Banner/Banner'
import Team from '../../template/Team/Team'

import img_petianos from '../../assets/imgs/petianos.jpg'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic title="Integrantes do PET Computação"
            subtitle="Veja quem compõe nosso time!"
            position="top"
            urlImgs={[
                { src: img_petianos }
            ]}
        />
        <Team />
        <Footer />
    </React.Fragment>
)