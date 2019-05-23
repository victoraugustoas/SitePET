import React from 'react'
import './ProjectsMain.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Animate from '../../components/Animate/Animate'

const pet_obi = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557500574/pet_obi_2x_ihilqp.png`
const minicurso = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557500574/minicurso_2x_mq2ftn.png`
const comp_desp = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557500574/comp_desp_2x_dpt5nj.png`

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
