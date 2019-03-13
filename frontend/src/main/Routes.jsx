import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Petianos from '../pages/Petianos/Petianos'
import ProjectsMain from '../pages/Projects/Projects'
import PetObi from '../pages/PetObi/PetObi'
import CompuDes from '../pages/CompuDes/CompuDes';
import Oficina from '../pages/Oficina/Oficina';

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