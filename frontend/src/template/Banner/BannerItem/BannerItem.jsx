import React from 'react'
import './BannerItem.css'

export default props => (
    <div className={"carousel-item " + (props.active ? 'active' : '')}>
        <div className="d-flex align-items-center justify-content-center">
            <img  className="img img-fluid" src={props.urlImg} alt={props.altImg} />
        </div>
        <div className="carousel-caption">
            <h1><strong>{props.title}</strong></h1>
            <p>{props.description}</p>
            <p><button type="button" className="btn btn-lg">{props.textButton}</button></p>
        </div>
    </div>
)