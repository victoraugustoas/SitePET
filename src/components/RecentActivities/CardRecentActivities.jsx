import React from 'react'
import './CardRecentActivities.css'

export default props => {
    let card = <div className="col d-flex justify-content-center">
        <div className="card card-recent-activities mb-2">
            <img src={props.urlImg} id="img-top-card-recent-activities" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <a href={`${props.url ? props.url : '/'}`} className="btn">{props.textButton}</a>
            </div>
        </div>
    </div>

    return card
}