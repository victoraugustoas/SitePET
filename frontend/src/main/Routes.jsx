import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Paginas Principais
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Petianos from '../pages/Petianos/Petianos'

// Projetos
import ProjectsMain from '../pages/Projects/ProjectsMain'
import PetObi from '../pages/Projects/PetObi/PetObi'
import CompuDes from '../pages/Projects/CompuDes/CompuDes';
import Oficina from '../pages/Projects/Oficina/Oficina';

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectsMain}/>
        <Route path="/petobi" component={PetObi} />
        <Route path="/compdes" component={CompuDes} />
        <Route path="/petianos" component={Petianos} />
        <Route path="/oficina" component={Oficina} />
        <Route path="*" component={NotFound} />
    </Switch>
)