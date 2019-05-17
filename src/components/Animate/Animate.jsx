import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'animate.css/animate.min.css'

/**
 * Serve para adicionar animações pré definidas no animate.css. 
*/
export default class Animate extends Component {
    static propTypes = {
        /** Nome do efeito a ser aplicado no componente children, efeito definido em animate.css; */
        effect: PropTypes.string,
        /** Componente que receberá o efeito */
        children: PropTypes.any
    }

    static defaultProps = {
        effect: 'tada'
    }

    render() {
        return (
            <div
                onMouseOver={e => e.currentTarget.classList.add('animated', this.props.effect)}
                onMouseOut={e => e.currentTarget.classList.remove('animated', this.props.effect)}
            >
                {this.props.children}
            </div>
        )
    }
}