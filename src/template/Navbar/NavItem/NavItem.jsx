import React from 'react'
import { a } from 'react-router-dom'

export const NavItem = props => {
    let navItem =
        <li className="nav-item mr-2">
            <a href={`${props.url}`} className="nav-link pl-2">{props.label}</a>
        </li>
    return navItem
}

export const NavItemDropdown = props => {
    let navItemDropdown = <li className="nav-item mr-2">
        <a href={`${props.url}`} className="dropdown-item">{props.label}</a>
    </li>
    return navItemDropdown
}