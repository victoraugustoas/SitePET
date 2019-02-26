import React from 'react'
import './Home.css'

import Diary from '../template/Diary/Diary'
import RecentActivities from '../template/RecentActivities/RecentActivities'

export default props => (
    <React.Fragment>
        <Diary />
        <RecentActivities />
    </React.Fragment>
)