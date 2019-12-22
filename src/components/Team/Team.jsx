import React from 'react';

import './Team.scss'

import TeamItem from './TeamItem'
import { Quote } from '../../components/Quote'
let width = window.innerWidth

const imgTutor = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557492703/xbx_gzaw3t.jpg`
const imgAndrey = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458238/andrey_cyfltv.jpg`
const imgBianca = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458238/bianca_jstj9d.jpg`
const imgBrenda = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458238/brenda_t4btz8.jpg`
const imgEliza = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458254/eliza_ifiupg.jpg`
const imgFylype = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458248/fylype_x6dfuq.jpg`
const imgHelio = '../../assets/imgs/helio.jpg'
const imgJessica = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458249/jessica_liiepr.jpg`
const imgJoao = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458246/joao_ndqxw7.jpg`
const imgJohn = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458251/john_miopor.jpg`
const imgJulio = '../../assets/imgs/julio.jpg'
const imgLuis = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458251/luis_wtjbex.jpg`
const imgVictor = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557492452/victor_fswklb.jpg`
const imgMardoqueu = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${width}/v1557458254/mardoqueu_y3oith.jpg`

export default props => (
    <React.Fragment>

        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center text-center">
                    <h2 className="title-team">Sobre</h2>
                </div>
            </div>
            

            <div className="row">
                <div className="col-12 d-flex justify-content-center text-center">
                    <h2 className="text-team">
                    <section className="row">
                <p>
                    O PET Computação está ativo desde 2007, e já teve os professores Ruiter Caldas e José Francisco Netto como tutores - sendo o professor Raimundo Barreto nosso atual tutor. Nosso objetivo é promover atividades extracurriculares que complementam a vida acadêmica dos alunos, baseada na tríade universitária: Ensino, Pesquisa e Extensão. Atualmente, o PET tem 11 bolsistas de Ciência da Computação, e um número flexível dos chamados Amigos dode PET - que trabalham voluntariamente nos trabalhos junto dos petianos. As principais atividades de extensão do PET são: a Computação Desplugada, que ensina os fundamentos da computação sem o uso de computador, por meio de dramatizações, quebra-cabeças, truques de mágica e testes; O preparatório OBI, que visa preparar os alunos para participar da olimpíada de informática;  O PET Café, que arrecada dinheiro para fins auxiliares através da venda de alimentos; divulgar nas escolas o projeto e falar a cerca de computação, do curso e, a vida acadêmica. Também são realizadas palestras e minicursos abordando computação dentro da universidade, a fim de promover ajuda aos outros estudantes.
                </p>
            </section>
                    <Quote body="Além de ser um braço do Icomp na comunidade, o PET visa formar o aluno como um cidadão completo,
                        porque dá a ele a oportunidade de vivenciar plenamente o tripé universitário.
                        Há uma mudança drástica de visão do aluno depois que ele participa do programa.
                        Aqui, ele tem experiências que normalmente não teria, como dar aula."
                    reference="Raimundo Barreto, Tutor do PET." />

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
                
                    </h2>
                </div>
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center text-center">
                    <h2 className="title-team">Integrantes atuais do PET Computação</h2>
                </div>
            </div>

            <div className="background-yellow">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <TeamItem urlImg={imgTutor} altImg="Raimundo" name="Raimundo Barreto" email="xbx@icomp.ufam.edu.br" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <TeamItem urlImg={imgAndrey} altImg="Andrey" name="Andrey Souza" email="aos@icomp.ufam.edu.br" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <TeamItem urlImg={imgBianca} altImg="Bianca" name="Bianca Dias" email="bianca.dias@icomp.ufam.edu.br" />
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4">
                    <TeamItem urlImg={imgBrenda} altImg="Brenda" name="Brenda Aguiar" email="brenda.aguiar@icomp.ufam.edu.br" />
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                    <TeamItem urlImg={imgEliza} altImg="Eliza" name="Elizamara Almeida" email="elizamara.almeida@icomp.ufam.edu.br" />
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                    <TeamItem urlImg={imgFylype} altImg="Fylype" name="Fylype Wase" email="fwcl@icomp.ufam.edu.br" />
                </div>
            </div>

            <div className="background-yellow">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4">
                        <TeamItem urlImg={imgJessica} altImg="Jessica" name="Jessica Moura" email="jessica.brito@icomp.ufam.edu.br" />
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <TeamItem urlImg={imgJoao} altImg="Joao" name="João Lucas" email="lucas.fernandes@icomp.ufam.edu.br" />
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <TeamItem urlImg={imgJohn} altImg="John" name="Jhonathan Miranda" email="jsm@icomp.ufam.edu.br" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4">
                    <TeamItem urlImg={imgLuis} altImg="Luis" name="Luis Guilherme" email="lgfs@icomp.ufam.edu.br" />
                </div>

                <div className="col-12 col-sm-6 col-md-4">
                    <TeamItem urlImg={imgMardoqueu} altImg="Mardoqueu" name="Mardoqueu Pimentel" email="map@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <TeamItem urlImg={imgVictor} altImg="Victor" name="Victor Augusto" email="vaas@icomp.ufam.edu.br" />
                </div>
            </div>
        </div>

    </React.Fragment >
)