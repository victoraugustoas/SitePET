import React from 'react'
import './NavDropdown.scss'

export default props => {
    let navItemDropdown = <div className="dropdown">
        <a href={props.url} className="btn dropdown-toggle" data-toogle="dropdown">
            {props.label}
        </a>

        <div className="dropdown-menu">
            {props.children}
        </div>
    </div>

    return navItemDropdown
}
