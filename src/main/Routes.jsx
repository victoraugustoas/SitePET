import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Paginas Principais
import Home from '../pages/Home/Home'
//import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Petianos from '../pages/Petianos/Petianos'

// Projetos
import ProjectsMain from '../pages/Projects/ProjectsMain'
import PetObi from '../pages/Projects/PetObi/PetObi'
import CompuDes from '../pages/Projects/CompuDes/CompuDes'
import Minicurso from '../pages/Projects/Minicurso/Minicurso'

// outras páginas
import Minicurso_banner from '../pages/OtherPages/Minicurso_banner'
import Sorteio_banner from '../pages/OtherPages/Sorteio_banner'
import RecentActivities_Site from '../pages/RecentActivities/RecentActivities_Site'
import RecentActivities_Integrapet from '../pages/RecentActivities/RecentActivities_Integrapet'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
       
        {/* outras páginas */}
        <Route path="/minicurso_banner" component={Minicurso_banner} />
        <Route path="/sorteio_banner" component={Sorteio_banner} />
        <Route path="/recent_sitepet" component={RecentActivities_Site} />
        <Route path="/recent_integrapet" component={RecentActivities_Integrapet} />

        <Route path="/projects" component={ProjectsMain} />
        <Route path="/petobi" component={PetObi} />
        <Route path="/compdes" component={CompuDes} />
        <Route path="/petianos" component={Petianos} />
        <Route path="/minicurso" component={Minicurso} />

        <Route path="*" component={NotFound} />
    </Switch>
)