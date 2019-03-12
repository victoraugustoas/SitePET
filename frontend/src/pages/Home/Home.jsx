import React from 'react'
import './Home.css'

import Navbar from '../../template/Navbar/Navbar'
import Diary from '../../template/Diary/Diary'
import RecentActivities from '../../template/RecentActivities/RecentActivities'
import Banner from '../../template/Banner/Banner'
import Footer from '../../template/Footer/Footer'

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner />
        <Diary />
        <RecentActivities />
        <iframe
            id="boasVindas"
            title="video boas vindas"
            frameBorder="0"
            className="video-welcome"
            src="https://www.youtube.com/embed/Uvmx94cUVEY?autoplay=1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        <Footer />
    </React.Fragment>
)