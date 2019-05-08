import React from 'react'
import './ProjectsMain.css'

import Navbar from '../../template/Navbar/Navbar'
import Footer from '../../template/Footer/Footer'
import ProjectCard from '../../template/ProjectCard/ProjectCard'
import Animate from '../../template/Animate/Animate'

import pet_obi from '../../assets/imgs/logos/pet_obi.png'
import minicurso from '../../assets/imgs/logos/minicurso.png'
import comp_desp from '../../assets/imgs/logos/comp_desp.png'

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
                        <ProjectCard imgUrl={pet_obi}
                            imgAlt="PET OBI"
                            urlProject="/petobi"
                            title="PET OBI" />
                    </Animate>
                </div>

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard imgUrl={minicurso}
                            urlProject="/minicurso"
                            imgAlt="Minicurso"
                            title="Minicurso" />
                    </Animate>
                </div>

                <div className="col-12 col-sm-6 col-md-4 pb-5 d-flex justify-content-center">
                    <Animate effect='shake'>
                        <ProjectCard imgUrl={comp_desp}
                            imgAlt="Computação Desplugada"
                            urlProject="/compdes"
                            title="Computação Desplugada" />
                    </Animate>
                </div>

            </div>

        </div>
        <Footer />
    </React.Fragment >
)
