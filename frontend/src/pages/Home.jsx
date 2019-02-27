import React from 'react'
import './Home.css'

import Diary from '../template/Diary/Diary'
import RecentActivities from '../template/RecentActivities/RecentActivities'
import Navbar from '../template/Navbar/Navbar'
import Banner from '../template/Banner/Banner'

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner />
        <Diary />
        <RecentActivities />
    </React.Fragment>
)