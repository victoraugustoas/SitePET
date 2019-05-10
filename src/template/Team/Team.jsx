import React from 'react';
import './Team.css'

import Animate from '../Animate/Animate'

import TeamItem from './TeamItem/TeamItem'

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
                    <h2 className="title-team">Tutor do PET Computação</h2>
                </div>

            </div>
            <div className="row">
                <div className="col-12 mt-5">
                    <Animate effect='tada'>
                        <TeamItem urlImg={imgTutor} altImg="Tutor" name="Barreto" email="xbx@icomp.ufam.edu.br" />
                    </Animate>
                </div>
            </div>
        </div>

        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center text-center">
                    <h2 className="title-team">Integrantes atuais do PET Computação</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgAndrey} altImg="Andrey" name="Andrey Souza" email="aos@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgBianca} altImg="Bianca" name="Bianca Dias" email="bianca.dias@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgBrenda} altImg="Brenda" name="Brenda Aguiar" email="brenda.aguiar@icomp.ufam.edu.br" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgEliza} altImg="Eliza" name="Elizamara Almeida" email="elizamara.almeida@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgFylype} altImg="Fylype" name="Fylype Wase" email="fwcl@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgJessica} altImg="Jessica" name="Jessica Moura" email="jessica.brito@icomp.ufam.edu.br" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgJoao} altImg="Joao" name="João Lucas" email="lucas.fernandes@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgJohn} altImg="John" name="Jhonathan Miranda" email="jsm@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgLuis} altImg="Luis" name="Luis Guilherme" email="lgfs@icomp.ufam.edu.br" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgMardoqueu} altImg="Mardoqueu" name="Mardoqueu Pimentel" email="map@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgVictor} altImg="Victor" name="Victor Augusto" email="vaas@icomp.ufam.edu.br" />
                </div>
            </div>
        </div>

    </React.Fragment >
)