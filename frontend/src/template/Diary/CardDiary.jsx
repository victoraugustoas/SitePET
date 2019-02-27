import React from 'react'
import './CardDiary.css'

export default props => {
    let card = <div className="card card-diary mb-3">
        <img src={props.urlImg} id="img-top-card-diary" className="card-img-top img-fluid" alt="..." />
        <div className="card-body">

            <div className="header-diary d-flex justify-content-between">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-date">Data: {props.date}</h6>
            </div>

            <p className="card-text">{props.description}</p>
            <a href="/" className="btn">{props.textButton}</a>
        </div>
    </div>

    return card
}