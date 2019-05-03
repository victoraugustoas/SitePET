import React from 'react'
import './Navbar.css'

import { NavItem, NavItemDropdown } from './NavItem/NavItem'
import NavDropdown from './NavDropdown/NavDropdown'
import { Link } from 'react-router-dom'

import logo from '../../assets/imgs/pet_comp_logo.svg'

export default props => (
    <header className="cabecalho" >
        <nav className="navbar navbar-expand-md">
            <div id="logoTop" className="logo">
                <Link to="/">
                    <img src={logo} alt={'logo'} />
                </Link>
            </div>

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
                        <NavItemDropdown url="/kodikos" label="Kodikós" />
                    </NavDropdown>

                    <NavItem url="/petianos" label="Petianos" />

                    <NavItem url="/about" label="Sobre" />
                </ul>
            </div>
        </nav>
    </header>
)