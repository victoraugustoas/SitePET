import React from 'react'
import PropTypes from 'prop-types'
import './BannerItem.css'

/**
 * Item de banner dinâmico, que mostra as imagens de acordo com o tamanho da imagem
*/
export default class BannerItem extends React.Component {

    constructor(props) {
        super(props)

        this.bgImgs = React.createRef()
    }

    componentDidMount() {
        this.setImg()
    }

    setImg() {
        for (let i = 0; i < this.props.urlImgs.length; i++) {
            if (window.innerWidth < this.props.urlImgs[i].size) {
                this.bgImgs.current.style.backgroundImage = `url(${this.props.urlImgs[i].src})`
                this.bgImgs.current.style.backgroundPosition = `${this.props.urlImgs[i].position}`
                return
            } else {
                this.bgImgs.current.style.backgroundImage = `url(${this.props.urlImgs[i].src})`
                this.bgImgs.current.style.backgroundPosition = `${this.props.urlImgs[i].position}`
            }
        }
    }

    static propTypes = {
        active: PropTypes.bool,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        url: PropTypes.string,
        textButton: PropTypes.string
    }

    static defaultProps = {
        active: false,
        url: '/',
        textButton: 'Ver Mais'
    }

    render() {
        let bannerItem = (
            <div className={"carousel-item " + (this.props.active ? 'active' : '')}>
                <div ref={this.bgImgs} className="background-banner-static"></div>
                <div className="carousel-caption">
                    <h1><strong>{this.props.title}</strong></h1>
                    <p>{this.props.subtitle}</p>
                    <a href={`${this.props.url}`}>
                        <button type="button" className="btn btn-lg">{this.props.textButton}</button>
                    </a>
                </div>
            </div>
        )

        return bannerItem
    }

}