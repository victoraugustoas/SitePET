import React from 'react'

import '../NavItem/NavItem.css'
import './NavDropdown.css'

export default props => {
    let navItemDropdown = <div className="dropdown">
        <button className="btn dropdown-toggle"
            data-toggle="dropdown">{props.label}</button>
        
        <div className="dropdown-menu">
            {props.children}
        </div>
    </div>

    return navItemDropdown
}
