import React from 'react'
import './Banner.css'

export default props => (
    <section className="slide">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

                {props.children}

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>

            </div>
        </div>
    </section>
)

export class BannerStatic extends React.Component {
    constructor(props) {
        super(props)

        this.state = { ...props }

        this.bgImgs = React.createRef()
        this.setImg = this.setImg.bind(this)
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

    componentDidMount() {
        this.setImg()
    }

    render() {
        let bannerStatic = (
            <section className="banner">
                <div ref={this.bgImgs} className="background-banner-static"></div>

                <div className="text-banner d-flex flex-column align-items-center justify-content-center">
                    <h1>{this.props.title}</h1>
                    {this.props.subtitle ? <h4>{this.props.subtitle}</h4> : ''}
                </div>
            </section >
        )

        return bannerStatic
    }
}