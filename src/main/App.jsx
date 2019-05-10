// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.min.css'

import React from 'react'
import './App.css'

// Rotas
import { BrowserRouter } from 'react-router-dom'
import Routes from '../main/Routes'

export default props => {
    let app = <BrowserRouter>
        <Routes />
    </BrowserRouter>

    return app
}