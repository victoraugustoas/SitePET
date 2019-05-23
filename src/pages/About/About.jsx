import React from 'react'
import './About.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { BannerStatic } from '../../components/Banner/Banner'
import AboutProject from '../../components/AboutProject/AboutProject'
import Quote from '../../components/Quote/Quote'

const quality = 25

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImgs={[
            { src: `https://res.cloudinary.com/cloudpetimgs/image/upload/q_${quality}/v1557504338/sobre_vdhweq.jpg`, size: 768 },
            { src: `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557504338/sobre_vdhweq.jpg` }
        ]}
            title="Sobre" subtitle="Saiba mais sobre o PET Computação =D" />

        <AboutProject title="Sobre o PET Computação">
            <section className="row">
                <p>
                    <span className="capitular-letter">O</span> PET Computação está ativo desde 2007, e já teve os professores Ruiter Caldas e José Francisco Netto como tutores - sendo o professor Raimundo Barreto nosso atual tutor. Nosso objetivo é promover atividades extracurriculares que complementam a vida acadêmica dos alunos, baseada na tríade universitária: Ensino, Pesquisa e Extensão. Atualmente, o PET tem 11 bolsistas de Ciência da Computação, e um número flexível dos chamados Amigos dode PET - que trabalham voluntariamente nos trabalhos junto dos petianos. As principais atividades de extensão do PET são: a Computação Desplugada, que ensina os fundamentos da computação sem o uso de computador, por meio de dramatizações, quebra-cabeças, truques de mágica e testes; O preparatório OBI, que visa preparar os alunos para participar da olimpíada de informática;  O PET Café, que arrecada dinheiro para fins auxiliares através da venda de alimentos; divulgar nas escolas o projeto e falar a cerca de computação, do curso e, a vida acadêmica. Também são realizadas palestras e minicursos abordando computação dentro da universidade, a fim de promover ajuda aos outros estudantes.
                </p>
            </section>

            <section className="row">
                <Quote body="Além de ser um braço do Icomp na comunidade, o PET visa formar o aluno como um cidadão completo,
                        porque dá a ele a oportunidade de vivenciar plenamente o tripé universitário.
                        Há uma mudança drástica de visão do aluno depois que ele participa do programa.
                        Aqui, ele tem experiências que normalmente não teria, como dar aula."
                    reference="Raimundo Barreto, Tutor do PET." />
            </section>

            <section className="row">
                <Quote body="Eles ensinavam os conceitos da
                        computação de forma simples, diferente, tirando essa ideia de que a computação é
                        uma coisa complicada. Na época, eu ainda não sabia o que queria fazer;
                        a palestra despertou minha curiosidade e me incentivou a vir cursar Ciência da
                        Computação em Manaus. Poder divulgar o conhecimento e mostrar a computação de forma
                        acessível é incrível. Despertar o interesse nas crianças, assim como aconteceu comigo,
                        é recompensador."
                    reference="Hélio Rodrigues, atual petiano, sobre o PET ter visitado a sua escola."/>
            </section>
        </AboutProject>
        <Footer />

    </React.Fragment >
)