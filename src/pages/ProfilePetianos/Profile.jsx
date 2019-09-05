import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { TeamProfile} from  '../../components/Team/TeamProfile/TeamProfile'

export default props =>(
    <React.Fragment>
        <Navbar/>
        <TeamProfile/>

        <Footer/>
    </React.Fragment>

)