import React from 'react';
import './Petianos.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { BannerStatic } from '../../components/Banner/Banner'
import Team from '../../components/Team/Team'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic title="Integrantes do PET Computação"
            subtitle="Veja quem compõe nosso time!"
            position="top"
            urlImgs={[
                { src: "https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_720/v1557458263/petianos_qw24c1.jpg", size: 720 },
                { src: "https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_1920/v1557458263/petianos_qw24c1.jpg", size: 1920 },
                { src: "https://res.cloudinary.com/cloudpetimgs/image/upload/v1557458263/petianos_qw24c1.jpg" }
            ]}
        />
        <Team />
        <Footer />
    </React.Fragment>
)