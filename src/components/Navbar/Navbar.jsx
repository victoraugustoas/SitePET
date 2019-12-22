import React from 'react'
import './Navbar.scss'

import { NavItem, NavItemDropdown } from './NavItem/NavItem'
import NavDropdown from './NavDropdown/NavDropdown'
//import { Logo } from '../Logo/Logo'
import {Logo} from '/home/brendaum/Área de Trabalho/SitePET/src/components/Logo'

export default props => (
    <header className="cabecalho" >
        <nav className="navbar navbar-expand-md">
            <Logo />

            <button className="navbar-toggler icon-menu" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
                <i className="fa fa-ellipsis-v"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="menu navbar-nav ml-auto">
                    <NavItem url="/" label="Home" animate effect='bounce' />

                    <NavDropdown label="Projetos" url="/projects">
                        <NavItemDropdown url="/compdes" label="Computação Desplugada" />
                        <NavItemDropdown url="/petobi" label="PET OBI" />
                        <NavItemDropdown url="/minicurso" label="Minicurso" />
                    </NavDropdown>
                    <NavItem url="/petianos" label="Petianos" />

                </ul>
            </div>
        </nav>
    </header>
)