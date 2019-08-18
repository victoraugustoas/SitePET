import React from 'react'
import './RecentActivities.scss'

export default props => (
    <section className="recent-activities container-fluid p-5">
        <div className="row pt-3">
            <h4 className="ml-3 pb-4">Atividades Recentes</h4>
        </div>

        <div className="row align-items-center pb-3">
            {props.children}
        </div>
    </section>
)