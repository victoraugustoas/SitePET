import React from 'react'
import './RecentActivities.css'

import CardRecentActivities from './CardRecentActivities'

let description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

export default props => (
    <section className="recent-activities">
        <div className="container-fluid">
            <div className="row pt-3">
                <h3 className="ml-3">Atividades Recentes</h3>
            </div>

            <div className="row mt-2 pb-3">
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <CardRecentActivities title="Computação Desplugada"
                        description={description}
                        urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                        textButton="Ver Mais"/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <CardRecentActivities title="Computação Desplugada"
                        description={description}
                        urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                        textButton="Ver Mais"/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <CardRecentActivities title="Computação Desplugada"
                        description={description}
                        urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                        textButton="Ver Mais"/>
                </div>
            </div>
        </div>
    </section>
)