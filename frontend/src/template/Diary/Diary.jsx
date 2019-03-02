import React from 'react'
import './Diary.css'

import CardDiary, { Card } from './CardDiary'

let url = "https://calendar.google.com/calendar/b/2?cid=cGV0Y29tcHV0YWNhb0BpY29tcC51ZmFtLmVkdS5icg"

export default props => (
    <section className="diary container-fluid">

        <div className="row pt-3">
            <h3 className="ml-3">
                Agenda do PET Computação
            </h3>
        </div>

        <CardDiary>
            <Card url={url} date="10/03" title="Visita a escola Estadual Judas Wilson Lima"/>
            <Card url={url} date="18/03" title="Reunião Mensal do PET"/>
        </CardDiary>
        <CardDiary>
            <Card url={url} date="25/03" title="PET Café"/>
            <Card url={url} date="10/04" title="Oficina de Programação C"/>
        </CardDiary>
        <CardDiary>
            <Card url={url} date="15/04" title="Inicio do Curso de Informática"/>
            <Card url={url} date="25/04" title="Reunião Mensal do PET"/>
        </CardDiary>
    </section>
)