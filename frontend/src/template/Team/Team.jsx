import React from 'react';
import './Team.css'

import Animate from '../Animate/Animate'

import TeamItem from './TeamItem/TeamItem'

import imgTutor from '../../assets/imgs/xbx.jpg'
import imgAndrey from '../../assets/imgs/andrey.jpg'
import imgBianca from '../../assets/imgs/bianca.jpg'
import imgBrenda from '../../assets/imgs/brenda.jpg'
import imgEliza from '../../assets/imgs/eliza.jpg'
import imgFylype from '../../assets/imgs/fylype.jpg'
import imgHelio from '../../assets/imgs/helio.jpg'
import imgJessica from '../../assets/imgs/jessica.jpg'
import imgJoao from '../../assets/imgs/joão.jpg'
import imgJohn from '../../assets/imgs/john.jpg'
import imgJulio from '../../assets/imgs/julio.jpg'
import imgLuis from '../../assets/imgs/luis.jpg'
import imgVictor from '../../assets/imgs/victor.jpg'


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

        <div className="container-fluid mt-5 pb-5">
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
                    <TeamItem urlImg={imgHelio} altImg="Helio" name="Helio Endrio" email="hecr@icomp.ufam.edu.br" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgJessica} altImg="Jessica" name="Jessica Moura" email="jessica.brito@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgJoao} altImg="Joao" name="João Lucas" email="lucas.fernandes@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgJohn} altImg="John" name="Jhonathan Miranda" email="jsm@icomp.ufam.edu.br" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgJulio} altImg="Julio" name="Julio Rennann" email="julio.rennann@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgLuis} altImg="Luis" name="Luis Guilherme" email="lgfs@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgVictor} altImg="Victor" name="Victor Augusto" email="vaas@icomp.ufam.edu.br" />
                </div>
            </div>

        </div>
    </React.Fragment >
)