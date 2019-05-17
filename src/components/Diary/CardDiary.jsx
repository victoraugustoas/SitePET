import React from 'react'
import './CardDiary.css'

export const Card = (props) => {
    return (
        <a href={props.url} className={`link-diary col-12 col-sm-6 mt-2`} >
            <div className="card-diary btn">
                <h5 className="mb-2">{props.date}</h5>
                <h5 className="mb-2">{props.title}</h5>
            </div>
        </a>
    )
}

export default (props) => {
    let card = <div className="row pb-3 justify-content-center">
        {props.children}
    </div>
    return card
}
