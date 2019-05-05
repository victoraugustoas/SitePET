import React from 'react'
import './AboutProject.css'

export default props => (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <h2 className="pt-2">{props.title}</h2>
            </div>
        </div>
        <div className="about text-about">
            <div className="container">
                {props.children}
            </div>
        </div>
    </div>
)

