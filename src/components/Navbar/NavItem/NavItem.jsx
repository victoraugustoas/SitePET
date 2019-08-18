import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem.scss'

export const NavItem = props => {
    let navItem =
        <li className={`nav-item mr-2 ${props.url === window.location.pathname ? 'active' : ''}`}>
            <Link to={`${props.url}`} className="nav-link pl-2">{props.label}</Link>
        </li>
    return navItem
}

export const NavItemDropdown = props => {
    let navItemDropdown = <li className="nav-item mr-2">
        <Link to={`${props.url}`} className="dropdown-item">{props.label}</Link>
    </li>
    return navItemDropdown
}