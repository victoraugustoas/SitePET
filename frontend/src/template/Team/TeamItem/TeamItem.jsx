import React from 'react';
import './TeamItem.css'

export default props => (
    <div className="d-flex flex-column align-items-center">
        <img src={props.urlImg} alt={props.altImg} className="img-team rounded-circle" />
        
        <h4 className="title-name-team mt-2">{props.name}</h4>
        
        <a href="mailto:xbx@icomp.ufam.edu.br" className="email-team ml-2 mt-2">
            <i className="far fa-envelope"></i> {props.email}
        </a>
    </div>
)