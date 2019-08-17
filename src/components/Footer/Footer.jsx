import React from 'react'
import './Footer.css'
import Logo from '../Logo'

const logo = `https://res.cloudinary.com/cloudpetimgs/image/upload/v1557458249/pet_comp_logo_gjra5s.svg`

export default props => (
    <footer className="footer container-fluid px-5 py-3">
        {/* <div className="row align-items-center">

            <div className="col d-flex justify-content-center align-items-center mb-4">
                <div className="footer-logo">
                    <a href="/">
                        <img src={logo} alt={'logo'} />
                    </a>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4">
                <h4>Onde ficamos?</h4>
                <p>No 2° andar do bloco CPD, após o ICOMP (Instituto de Computação).</p>
                <p>
                    Se você quiser fazer uma visita, nos encontre na última sala do bloco do CPD. <i className="fas fa-smile-wink"></i>
                </p>
            </div>

            <div className="col-12 col-sm-6 col-md-3 mb-4">
                <h4>Links úteis</h4>
                <div className='links'>
                    <a rel="noopener noreferrer" target="_blank" href="http://icomp.ufam.edu.br/site/">ICOMP</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://ufam.edu.br/">UFAM</a>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <h4>Fale com a gente!</h4>
                <p>Nossas redes sociais</p>

                <div className='d-flex justify-content-around'>
                    <a className="icon-social" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/petcomputacaoufam/">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>

                    <a className="icon-social" rel="noopener noreferrer" target="_blank" href={"mailto:petcomputacao@icomp.ufam.edu.br"}>
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>

                    <a className="icon-social" rel="noopener noreferrer" target="_blank" href="https://instagram.com/petcompufam?utm_source=ig_profile_share&igshid=u6pl0vney2d5">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </div>

            </div>

        </div> */}
        <div className='row justify-content-around grid-container'>
            <div className='m-3 text-center text-sm-left'>
                <h5><strong>Venha nos visitar</strong></h5>
                <h6>Última sala do bloco do CPD, segundo andar.</h6>
            </div>
            <div className='m-3'>
                <h5><strong>Links úteis</strong></h5>
                <div className='links d-flex justify-content-center'>
                    <h6>
                        <a className='m-3' rel="noopener noreferrer" target="_blank" href="http://icomp.ufam.edu.br/site/">ICOMP</a>
                    </h6>
                    <h6>
                        <a className='m-3' rel="noopener noreferrer" target="_blank" href="https://ufam.edu.br/">UFAM</a>
                    </h6>
                </div>
            </div>
            <div className='m-3'>
                <h5><strong>Fale com a gente!</strong></h5>
                <div>
                    <a className="icon-social m-3" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/petcomputacaoufam/">
                        <i className="fab fa-facebook"></i>
                    </a>

                    <a className="icon-social m-3" rel="noopener noreferrer" target="_blank" href={"mailto:petcomputacao@icomp.ufam.edu.br"}>
                        <i className="fas fa-envelope"></i>
                    </a>

                    <a className="icon-social m-3" rel="noopener noreferrer" target="_blank" href="https://instagram.com/petcompufam?utm_source=ig_profile_share&igshid=u6pl0vney2d5">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

        <div className='row mt-5 justify-content-around grid-container'>
            <div className='m-3'>
                <Logo />
            </div>
            <div className='m-3 text-center text-sm-right right'>
                <h6>Conceito Visual por PET Design &copy;</h6>
                <h6>Implementação por PET Computação &copy;</h6>
                <h6>Todos Direitos Reservados</h6>
            </div>
        </div>
    </footer>
)