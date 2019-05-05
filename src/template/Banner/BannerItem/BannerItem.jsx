import React from 'react'
import { Link } from 'react-router-dom'
import './BannerItem.css'

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

    render() {
        let bannerItem = (
            <div className={"carousel-item " + (this.props.active ? 'active' : '')}>
                <div ref={this.bgImgs} className="background-banner-static"></div>
                <div className="carousel-caption">
                    <h1><strong>{this.props.title}</strong></h1>
                    <p>{this.props.subtitle}</p>
                    <Link to={`${this.props.url}`}>
                        <button type="button" className="btn btn-lg">{this.props.textButton}</button>
                    </Link>
                </div>
            </div>
        )

        return bannerItem
    }

}