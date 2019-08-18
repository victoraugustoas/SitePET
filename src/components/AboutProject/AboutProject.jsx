import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './AboutProject.scss'

// Usado para exibição correta na documentação
import '../../main/App.scss'

/**
 * Serve para colocar texto de projetos, com um pequeno estilo que padroniza os textos dos projetos.
 */
export default class AboutProject extends Component {
    static propTypes = {
        /** Título H2 para exibição no topo do texto; */
        tittle: PropTypes.string,
        /** Todo código posto no entre `<AboutProject> </AboutProject>` será colocado dentro do AboutProject; */
        children: PropTypes.any
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-sm">
                        <h2 className="pt-2">{this.props.title}</h2>
                    </div>
                </div>
                <div className="about text-about">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
