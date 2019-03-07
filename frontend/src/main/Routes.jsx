import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Petianos from '../pages/Petianos/Petianos'

export default props => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/petianos" component={Petianos} />
        <Route path="*" component={NotFound} />
    </Switch>
)