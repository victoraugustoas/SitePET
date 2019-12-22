import React from 'react'
import './CompuDes.scss'

import { Navbar } from '../../../components/Navbar'
import { Footer } from '../../../components/Footer'
import { AboutProject } from '../../../components/AboutProject'
import { BannerStatic } from '../../../components/Banner/Banner'

const quality = 25
const comp_desp_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/q_${quality}/v1557500573/comp_desp_mobile_lnni1o.png`
const comp_desp_2x = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557500574/comp_desp_2x_dpt5nj.png`

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImgs={[
            { src: comp_desp_mobile, size: 768 },
            { src: comp_desp_2x }
        ]}
            title="O que é Computação Desplugada?" />
        <AboutProject title="Computação Desplugada">
            <section className="row">
                <div>
                    <p className = "text-projects">
                       Esta atividade tem como objetivo principal a popularização dos fundamentos de ciência da computação nas escolas públicas da cidade de Manaus utilizando um de nossos projetos, Computação desplugada. Uma inovação que passamos o conhecimento através de peças teatrais e atividades lúdicas. O projeto consiste em uma coleção de atividades desenvolvidas com o objetivo de ensinar ciência da computação sem a necessidade de computadores. A audiência principal serão os estudantes, crianças e adolescentes.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p className = "text-projects">
                        Às apresentações ocorrem em escolas de Manaus, que pode ser levada por um contato direto do PET Computação a instituição ou o contrário.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p className = "text-projects">
                        A metodologia proposta consiste em apresentar uma série de atividades que exponham os principais conceitos de computação de maneira simples. Há também uma série de problemas propostos que serão resolvidos pelas próprias crianças.
                        Muitas das atividades são baseadas em conceitos matemáticos como, por exemplo, o entendimento dos números binários, uso de grafos, problemas envolvendo padrões e ordenamento, e criptografia.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p className = "text-projects">
                        O objetivo é popularizar os fundamentos de ciência da computação para estudantes de ensino fundamental e médio para que entendam que computação não é somente o computador.
                    </p>
                </div>
            </section>
        </AboutProject>
        <Footer />
    </React.Fragment>
)