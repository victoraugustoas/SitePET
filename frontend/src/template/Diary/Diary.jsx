import React from 'react'
import './Diary.css'

import CardDiary from './CardDiary'

let description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

export default props => (
    <section className="diary container-fluid">

        <div className="row pt-3">
            <h3 className="ml-3">
                Agenda do PET Computação
            </h3>
        </div>

        <div className="row mt-2 pb-3">
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <CardDiary date="02/05" title="PET OBI" urlImg="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                    description={description}
                    textButton="Ver Mais"/>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <CardDiary date="02/05" title="PET OBI" urlImg="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                    description={description}
                    textButton="Ver Mais"/>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <CardDiary date="02/05" title="PET OBI" urlImg="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                    description={description}
                    textButton="Ver Mais"/>
            </div>
        </div>
    </section>
)