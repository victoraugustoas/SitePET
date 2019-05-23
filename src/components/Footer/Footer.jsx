import React from 'react'
import './Footer.css'

const logo = `https://res.cloudinary.com/cloudpetimgs/image/upload/v1557458249/pet_comp_logo_gjra5s.svg`

export default props => (
    <footer className="footer container-fluid py-5">
        <div className="row align-items-center">

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

        </div>
    </footer >
)