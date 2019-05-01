import React from 'react'
import './About.css'

import Navbar from '../../template/Navbar/Navbar'
import Footer from '../../template/Footer/Footer'
import { BannerStatic } from '../../template/Banner/Banner'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImg="https://www.w3schools.com/css/img_5terre_wide.jpg"
            title="Sobre" subtitle="Saiba mais sobre o PET Computação =D" />

        <section className="about container pt-5">
            <p className="text-about">
                <span className="capitular-letter">O</span> PET Computação está ativo desde 2007, e já teve os professores Ruiter Caldas e José Francisco Netto como tutores - sendo o professor Raimundo Barreto nosso atual tutor. Nosso objetivo é promover atividades extracurriculares que complementam a vida acadêmica dos alunos, baseada na tríade universitária: Ensino, Pesquisa e Extensão. Atualmente, o PET tem 11 bolsistas de Ciência da Computação, e um número flexível dos chamados Amigos dode PET - que trabalham voluntariamente nos trabalhos junto dos petianos. As principais atividades de extensão do PET são: a Computação Desplugada, que ensina os fundamentos da computação sem o uso de computador, por meio de dramatizações, quebra-cabeças, truques de mágica e testes; O preparatório OBI, que visa preparar os alunos para participar da olimpíada de informática;  O PET Café, que arrecada dinheiro para fins auxiliares através da venda de alimentos; divulgar nas escolas o projeto e falar a cerca de computação, do curso e, a vida acadêmica. Também são realizadas palestras e minicursos abordando computação dentro da universidade, a fim de promover ajuda aos outros estudantes.
            </p>

            <blockquote className="blockquote text-center">
                <p>
                    <span className="quote fas fa-quote-left"></span> Além de ser um braço do Icomp na comunidade, o PET visa formar o aluno como um cidadão completo, 
                    porque dá a ele a oportunidade de vivenciar plenamente o tripé universitário. 
                    Há uma mudança drástica de visão do aluno depois que ele participa do programa. 
                    Aqui, ele tem experiências que normalmente não teria, como dar aula. <span className="quote fas fa-quote-right"></span>

                </p>
                <div className="blockquote-footer"><cite>Raimundo Barreto, Tutor do PET.</cite></div>
            </blockquote>


            <blockquote className="blockquote text-center">
                <p>
                    <span className="quote fas fa-quote-left"></span> Eles ensinavam os conceitos da 
                    computação de forma simples, diferente, tirando essa ideia de que a computação é 
                    uma coisa complicada. Na época, eu ainda não sabia o que queria fazer; 
                    a palestra despertou minha curiosidade e me incentivou a vir cursar Ciência da 
                    Computação em Manaus. Poder divulgar o conhecimento e mostrar a computação de forma 
                    acessível é incrível. Despertar o interesse nas crianças, assim como aconteceu comigo, 
                    é recompensador. <span className="quote fas fa-quote-right"></span>

                </p>
                <div className="blockquote-footer"><cite>Hélio Rodrigues, atual petiano, sobre o PET ter visitado a sua escola.</cite></div>
            </blockquote>
            
        </section>
        <Footer />

    </React.Fragment >
)