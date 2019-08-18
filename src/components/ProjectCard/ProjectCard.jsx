import React from 'react';
import './ProjectCard.scss'

export default props => (
    <a href={props.urlProject ? props.urlProject : '/'}>
        <div className="card project-card">
            <img src={props.imgUrl} className="card-img-top" alt={props.imgAlt} />
            <div className="card-body">
                <h4>{props.title}</h4>
            </div>
        </div>
    </a>
)