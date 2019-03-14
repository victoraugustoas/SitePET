import React from 'react'

import Navbar from '../../../template/Navbar/Navbar'
import Footer from '../../../template/Footer/Footer'
import AboutProject from '../../../template/AboutProject/AboutProject'
import { BannerStatic } from '../../../template/Banner/Banner'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImg="https://www.w3schools.com/css/img_5terre_wide.jpg"
            title="O que é o PET OBI?" />
        <AboutProject />
        <Footer />
    </React.Fragment>
)