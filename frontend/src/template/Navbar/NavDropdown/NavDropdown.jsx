import React from 'react'

import { Link } from 'react-router-dom'

import '../NavItem/NavItem.css'
import './NavDropdown.css'

export default props => {
    let navItemDropdown = <div className="dropdown">
        <Link to={props.url} className="btn dropdown-toggle" data-toogle="dropdown">
            {props.label}
        </Link>

        <div className="dropdown-menu">
            {props.children}
        </div>
    </div>

    return navItemDropdown
}
