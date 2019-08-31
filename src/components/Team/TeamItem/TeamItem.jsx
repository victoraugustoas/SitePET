import React from 'react';
import './TeamItem.scss'

export default props => (

    <div className="d-flex flex-column align-center shadow-lg p-3 m-5 bg-white rounded">

        <img src={props.urlImg} alt={props.altImg} className="img-team border" />
        <figcaption className="figure-caption">{props.name}</figcaption>

        <figcaption className="figure-caption">
            <a href={`mailto:${props.email}`} className="email-team">
                {props.email}
            </a>
        </figcaption>

    </div>
)

export const FriendPET = props => (
    <div className="d-flex flex-column align-items-center">
        <img src={props.urlImg} alt={props.altImg} className="img-team rounded-circle" />
        <h4 className="title-name-team mt-2">{props.name}</h4>
    </div>
)