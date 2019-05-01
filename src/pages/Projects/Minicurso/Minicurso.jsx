import React from 'react'

import Navbar from '../../../template/Navbar/Navbar'
import Footer from '../../../template/Footer/Footer'
import AboutProject from '../../../template/AboutProject/AboutProject'
import { BannerStatic } from '../../../template/Banner/Banner'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImg="https://www.w3schools.com/css/img_5terre_wide.jpg"
            title="O que é o Minicurso?" />
        <AboutProject title="Minicurso">
            <section className="row">
                <div>
                    <p>
                        <span className="capitular-letter">T</span>endo como ideia ofertar aulas práticas e teóricas de ensino de programação sobre conteúdos adquiridos ao longo do curso para os discentes do Instituto de Computação (IComp). Os integrantes do PET Computação escolhem um determinado assunto a ser abordado na oficina, durante às aulas ministradas o conteúdo é dividido em aulas teóricas e práticas. Normalmente às primeiras aulas são de introdução teórica do conteúdo abordado na oficina e às últimas aulas para resolução de problemas.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p>
                        Alunos de todos os períodos e cursos ofertados pelo IComp podem participar da oficina de programação.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p>
                        Como alguns cursos ofertados na Universidade Federal do Amazonas (UFAM) possuem uma ou mais matérias que envolvem programação estamos avaliando ampliar esse projeto para o restante da comunidade acadêmica.
                    </p>
                </div>
            </section>
        </AboutProject>
        <Footer />
    </React.Fragment>
)