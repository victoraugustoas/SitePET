import React from 'react'
import './Footer.css'

import logo from '../../assets/imgs/pet_comp_logo.svg'

import { Link } from 'react-router-dom'

export default props => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Onde ficamos?</h3>
                    <p>No 2° andar do bloco CPD, após o ICOMP (Instituto de Computação) Se quiser fazer uma visita, nos encontre na última sala do bloco do CPD.</p>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-9 ">
                    <h3>Fale com a gente!</h3>
                    <p>Nossas redes sociais</p>
                </div>

                <div className="col">
                    <i className="fab fa-facebook"></i>
                    <h4><a href="https://www.facebook.com/petcomputacaoufam/">
                        @petcomputacaoufam
                        </a></h4>
                </div>

                <div className="col">
                    <i className="fab fa-whatsapp"></i>
                    <h4><a href="https://www.facebook.com/petcomputacaoufam/">
                        @petcomputacaoufam
                        </a></h4>
                </div>

                <div className="col">
                    <i className="fab fa-instagram"></i>
                    <h4><a href="https://www.facebook.com/petcomputacaoufam/">
                        @petcomputacaoufam
                        </a></h4>
                </div>
            </div>
        </div>

        <div className="RodapeDoPe">
            <h5>Copyright &copy; 2019</h5>
        </div>
    </footer>
)

export const FooterAlternative = props => (
    <footer className="footer container-fluid py-5">
        <div className="row">
            
            <div className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt={'logo'} />
                    </Link>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4">
                <h3>Onde ficamos?</h3>
                <p>No 2° andar do bloco CPD, após o ICOMP (Instituto de Computação) Se quiser fazer uma visita, nos encontre na última sala do bloco do CPD.</p>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
                <h3>Fale com a gente!</h3>
                <p>Nossas redes sociais</p>

                <a href="https://www.facebook.com/petcomputacaoufam/" className="pr-4">
                    <i className="fab fa-facebook"></i>
                </a>

                <a href="/" className="pr-4">
                    <i className="fab fa-whatsapp"></i>
                </a>

                <a href="/" className="pr-4">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

        </div>
    </footer>
)