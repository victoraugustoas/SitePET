import React from 'react'
import './Navbar.css'

import { NavItem, NavItemDropdown } from './NavItem/NavItem'
import NavDropdown from './NavDropdown/NavDropdown'
import { Link } from 'react-router-dom'
import Animate from '../Animate/Animate'

import logo from '../../assets/imgs/pet_comp_logo.svg'

export default props => (
    <header className="cabecalho" >
        <nav className="navbar navbar-expand-md">
            <Animate effect='bounce'>
                <div id="logoTop" className="logo">
                    <Link to="/">
                        <img src={logo} alt={'logo'} />
                    </Link>
                </div>
            </Animate>

            <button className="navbar-toggler icon-menu" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
                <i className="fa fa-ellipsis-v"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="menu navbar-nav ml-auto">
                    <Animate effect='jello'>
                        <NavItem url="/" label="Home" animate effect='bounce' />
                    </Animate>

                    <NavDropdown label="Projetos">
                        <NavItemDropdown url="/" label="Computação Desplugada" />
                        <NavItemDropdown url="/" label="PET OBI" />
                        <NavItemDropdown url="/" label="Oficina de Programação" />
                    </NavDropdown>

                    <NavDropdown label="Cursos">
                        <NavItemDropdown url="/" label="Curso de Informática(LGBT)" />
                        <NavItemDropdown url="/" label="Minicurso de C" />
                    </NavDropdown>

                    <Animate effect='jello'>
                        <NavItem url="/petianos" label="Petianos" />
                    </Animate>
                    <NavItem url="/about" label="Sobre" />
                </ul>
            </div>
        </nav>
    </header>
)