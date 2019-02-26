// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import './App.css'

// Rotas
import {HashRouter} from 'react-router-dom'
import Routes from '../main/Routes'



export default props => {
    let app = <HashRouter>
        <Routes />
    </HashRouter>

    return app
}