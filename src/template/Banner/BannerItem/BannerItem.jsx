import React from 'react'
import { Link } from 'react-router-dom'
import './BannerItem.css'

export default props => {
    let styleInline = {
        backgroundImage: `url('${props.urlImg}')`
    }

    let bannerItem = (
        <div className={"carousel-item " + (props.active ? 'active' : '')}>
            <div className="background-banner-static" style={styleInline}></div>
            <div className="carousel-caption">
                <h1><strong>{props.title}</strong></h1>
                <p>{props.description}</p>
                <Link to={`${props.url}`}>
                    <button type="button" className="btn btn-lg">{props.textButton}</button>
                </Link>
            </div>
        </div>
    )

    return bannerItem
}