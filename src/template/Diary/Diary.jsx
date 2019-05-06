import React from 'react'
import './Diary.css'

export default props => (
    <section className="diary container-fluid p-5">

        <div className="row pt-3">
            <h4 className="ml-3 pb-4">
                Agenda do PET Computação
            </h4>
        </div>
        {props.children}
    </section>
)