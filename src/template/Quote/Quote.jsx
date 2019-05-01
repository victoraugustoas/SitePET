import React from 'react'

export default props => {
    return (
        <blockquote className="blockquote text-center">
            <p>
                <span className="quote fas fa-quote-left"></span> {props.body} <span className="quote fas fa-quote-right"></span>

            </p>
            <div className="blockquote-footer"><cite>{props.reference}</cite></div>
        </blockquote>
    )
}