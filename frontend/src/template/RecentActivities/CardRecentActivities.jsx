import React from 'react'
import { Link } from 'react-router-dom'
import './CardRecentActivities.css'

export default props => {
    let card = <div className="col d-flex justify-content-center">
        <div className="card card-recent-activities mb-2">
            <img src={props.urlImg} id="img-top-card-recent-activities" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={`${props.url ? props.url: '/'}`} className="btn">{props.textButton}</Link>
            </div>
        </div>
    </div>

    return card
}