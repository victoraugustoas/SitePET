import React from 'react'
import './RecentActivities.css'

import CardRecentActivities from './CardRecentActivities'

let description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

export default props => (
    <section className="recent-activities container-fluid p-5">
        <div className="row pt-3">
            <h4 className="ml-3 pb-4">Atividades Recentes</h4>
        </div>

        <div className="row pb-3">
            <CardRecentActivities title="PET OBI"
                url='/petobi'
                description={description}
                urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                textButton="Ver Mais" />
            <CardRecentActivities title="Computação Desplugada"
                url='/compdes'
                description={description}
                urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                textButton="Ver Mais" />
            <CardRecentActivities title="Oficina de Programação"
                description={description}
                url = "/oficina"
                urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                textButton="Ver Mais" />
        </div>
    </section>
)