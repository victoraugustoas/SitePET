import React from 'react';
import './Team.css'

import TeamItem from './TeamItem/TeamItem'

import imgTutor from '../../assets/imgs/xbx.jpg'
import imgBrenda from '../../assets/imgs/brenda.jpg'
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
                    <TeamItem urlImg={imgTutor} altImg="Tutor" name="Barreto" email="xbx@icomp.ufam.edu.br" />
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
                    <TeamItem urlImg={imgVictor} altImg="Victor" name="Victor Augusto" email="vaas@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgBrenda} altImg="Brenda" name="Brenda Aguiar" email="brenda.aguiar@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-5">
                    <TeamItem urlImg={imgTutor} altImg="Tutor" name="Barreto" email="xbx@icomp.ufam.edu.br" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-sm-6 mt-5">
                    <TeamItem urlImg={imgBrenda} altImg="Brenda" name="Brenda Aguiar" email="brenda.aguiar@icomp.ufam.edu.br" />
                </div>
                <div className="col-12 col-sm-6 mt-5">
                    <TeamItem urlImg={imgVictor} altImg="Victor" name="Victor Augusto" email="vaas@icomp.ufam.edu.br" />
                </div>
            </div>

        </div>
    </React.Fragment >
)