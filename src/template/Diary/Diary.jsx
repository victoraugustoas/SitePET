import React from 'react'
import './Diary.css'

import CardDiary, { Card } from './CardDiary'

let url = "https://calendar.google.com/calendar/embed?src=petcomputacao%40icomp.ufam.edu.br&ctz=America%2FBoa_Vista"

export default props => (
    <section className="diary container-fluid p-5">

        <div className="row pt-3">
            <h4 className="ml-3 pb-4">
                Agenda do PET Computação
            </h4>
        </div>

        <CardDiary>
            <Card url={url} date="10/03" title="Visita a escola Estadual Judas Wilson Lima" />
            <Card url={url} date="18/03" title="Reunião Mensal do PET" />
        </CardDiary>
        <CardDiary>
            <Card url={url} date="25/03" title="PET Café" />
            <Card url={url} date="10/04" title="Oficina de Programação C" />
        </CardDiary>
        <CardDiary>
            <Card url={url} date="15/04" title="Inicio do Curso de Informática" />
            <Card url={url} date="25/04" title="Reunião Mensal do PET" />
        </CardDiary>
    </section>
)