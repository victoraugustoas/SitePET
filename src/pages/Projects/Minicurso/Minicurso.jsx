import React from 'react'

import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import AboutProject from '../../../components/AboutProject/AboutProject'
import { BannerStatic } from '../../../components/Banner/Banner'

const quality = 25
const minicurso_2x = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557500574/minicurso_2x_mq2ftn.png`
const minicurso_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/q_${quality}/v1557500574/minicurso_mobile_tsp5vd.png`

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic
            urlImgs={[
                { src: minicurso_mobile, size: 768 },
                { src: minicurso_2x }
            ]}
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