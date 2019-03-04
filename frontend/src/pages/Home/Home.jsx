import React from 'react'
import './Home.css'

import Navbar from '../../template/Navbar/Navbar'
import Diary from '../../template/Diary/Diary'
import RecentActivities from '../../template/RecentActivities/RecentActivities'
import Banner from '../../template/Banner/Banner'
import {FooterAlternative} from '../../template/Footer/Footer'

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner />
        <Diary />
        <RecentActivities />
        <FooterAlternative />
    </React.Fragment>
)