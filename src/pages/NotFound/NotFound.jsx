import React from 'react'
import './NotFound.css'

import NavBar from '../../template/Navbar/Navbar'

export default props => (
    <React.Fragment>
        <NavBar />
        <div>
            <div className="background-construction"></div>
            <div className="not-found">
                <h1>Página não encontrada</h1>
                <hr/>
                <h2>404</h2>
                <h5>Ainda estamos trabalhando nessa página =D</h5>
            </div>
        </div>
    </React.Fragment>
)