import React from 'react'
import './RecentActivities.scss'

export default props => (
    <section className="recent-activities container-fluid p-5">
        <div className="col-12 d-flex justify-content-center text-center">
            <h4>Notícias</h4>
        </div>

        <div className="row align-items-center pb-3">
            {props.children}
        </div>
    </section>
)