import React from 'react'
import './ProjectsMain.css'

import Navbar from '../../template/Navbar/Navbar'
import Footer from '../../template/Footer/Footer'
import ProjectCard from '../../template/ProjectCard/ProjectCard'
import Animate from '../../template/Animate/Animate'

export default props => (
    <React.Fragment>
        <Navbar />
        <div className="container-fluid">
            <div className="row mt-5 pb-5">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="text-center">Projetos do PET Computação</h1>
                </div>
            </div>

            <div className="row">

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard imgUrl="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                            imgAlt="..."
                            title="PET Solidário" />
                    </Animate>
                </div>

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard  imgUrl="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                            imgAlt="..."
                            url="/petobi"
                            title="PET OBI" />
                    </Animate>
                </div>

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard imgUrl="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                            imgAlt="..."
                            title="Oficina de Programação" />
                    </Animate>
                </div>

            </div>

            <div className="row">

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard imgUrl="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                            imgAlt="..."
                            title="PET Café" />
                    </Animate>
                </div>

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard imgUrl="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                            imgAlt="..."
                            title="Computação Desplugada" />
                    </Animate>
                </div>

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard imgUrl="http://pet.icomp.ufam.edu.br/img/pet_obi.jpg"
                            imgAlt="..."
                            title="Kodikós" />
                    </Animate>
                </div>

            </div>

        </div>
        <Footer />
    </React.Fragment >
)
