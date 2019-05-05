import React from 'react'

import Navbar from '../../../template/Navbar/Navbar'
import Footer from '../../../template/Footer/Footer'
import AboutProject from '../../../template/AboutProject/AboutProject'
import { BannerStatic } from '../../../template/Banner/Banner'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImgs={[
            { src: "https://www.w3schools.com/css/img_5terre_wide.jpg" }
        ]}
            title="O que é o Kodikós?" />
        <AboutProject title="Kodikós">
            <section className="row">
                <div>
                    <p>
                        <span className="capitular-letter">P</span>etianos ensinam crianças do ensino fundamental a programar em Scratch, uma linguagem orientada a blocos que é lúdica e intuitiva. Esta atividade tem a ver com o Pensamento Computacional e visa o ensino de linguagem de programação visual Scratch, proposta pelo MIT, para crianças do ensino fundamental de escolas da cidade de Manaus e, com isso, inicia-los na programação de computadores e desenvolvimento do raciocínio lógico.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p>
                        A aceitação por parte das crianças é garantida, principalmente porque o conteúdo ministrado é de interesse das crianças como a criação de jogos, animações e histórias.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p>
                        A atividade será executada em pelo menos uma escola a ser escolhida, com crianças entre 10 a 12 anos do ensino fundamental. Será realizada uma oficina de TI com 20h de duração onde serão ensinados os conteúdos teóricos e práticos. Na oficina, os próprios alunos do ensino fundamental desenvolverão seus próprios projetos ao final do curso.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p>
                        Os petianos realizam esse trabalho de monitoria, ajudando os alunos nas suas atividades, tirando dúvidas e guiando o aprendizado.
                    </p>
                </div>
            </section>

            <section className="row">
                <div>
                    <p>
                        O objetivo é despertar nas crianças o interesse pela área da computação pela prática de programação e mais do que isso, gerar conhecimento e de desenvoltura do raciocino lógico e computacional.
                    </p>
                </div>
            </section>
        </AboutProject>
        <Footer />
    </React.Fragment>
)