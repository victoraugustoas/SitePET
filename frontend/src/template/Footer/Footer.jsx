import React from 'react'
import './Footer.css'

import logo from '../../assets/imgs/pet_comp_logo.svg'

import { Link } from 'react-router-dom'


export const FooterAlternative = props => (
    <footer className="footer container-fluid py-5">
        <div className="row">

            <div className="col-12 col-sm-6 col-md-3 mb-4">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt={'logo'} />
                    </Link>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4">
                <h4>Onde ficamos?</h4>
                <p>No 2° andar do bloco CPD, após o ICOMP (Instituto de Computação) Se quiser fazer uma visita, nos encontre na última sala do bloco do CPD.</p>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4">
                <h4>Links úteis</h4>
                <ul>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="http://icomp.ufam.edu.br/site/">ICOMP</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://ufam.edu.br/">UFAM</a>
                    </li>
                </ul>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <h4>Fale com a gente!</h4>
                <p>Nossas redes sociais</p>

                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/petcomputacaoufam/" className="pr-4">
                    <i className="fab fa-facebook"></i>
                </a>

                <a rel="noopener noreferrer" target="_blank" href="/" className="pr-4">
                    <i className="fab fa-whatsapp"></i>
                </a>

                <a rel="noopener noreferrer" target="_blank" href="/" className="pr-4">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

        </div>
    </footer>
)