import React from 'react'

import Navbar from '../../../template/Navbar/Navbar'
import Footer from '../../../template/Footer/Footer'
import AboutProject from '../../../template/AboutProject/AboutProject'
import { BannerStatic } from '../../../template/Banner/Banner'

const pet_obi_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/v1557500574/pet_obi_mobile_bs4jmi.png`
const pet_obi_2x = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557500574/pet_obi_2x_ihilqp.png`

const img1 = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557541941/PETOBI4_f7xiqf.jpg`
const img2 = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557541946/PETOBI2_vpej8a.jpg`
const img3 = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557541946/PETOBI_nq7da3.jpg`
const img4 = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557542459/PETOBI20182_bhdgun.jpg`
const img5 = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557542461/PETOBI2018_bwgisk.jpg`

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImgs={[
            { src: pet_obi_mobile, size: 768 },
            { src: pet_obi_2x }
        ]}
            title="O que é o PET OBI?" />

        <AboutProject title="PET OBI">

            <section className="row">
                <div className="col-sm">
                    <p>
                        <span className="capitular-letter">A</span> primeira Olimpíada Brasileira de informática (OBI) foi realizada em 1999 e hoje tem se consolidado como uma atividade extremamente importante no contexto nacional. É uma competição organizada nos moldes das outras olimpíadas científicas brasileiras como matemática, física e astronomia. O objetivo da OBI é despertar nos alunos o interesse por uma ciência importante na formação básica hoje em dia, no caso, ciência da computação, através de uma atividade que envolve engenhosidade e uma saudável dose de competição.
                    </p>
                </div>
                <div className="col-sm mb-3">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img1} class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src={img4} class="d-block w-100" />
                            </div>
                            <div class="carousel-item">
                                <img src={img5} class="d-block w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <div className="col-sm">
                    <p>
                        A metodologia consiste em gerar material didático sobre raciocínio lógico ensinar aos alunos o material didático e realizar diversos simulados com os alunos.
                    </p>
                </div>
            </section>

            <section className="row">
                <div className="col-sm">
                    <p>
                        O nosso objetivo é preparar um grupo de alunos do ensino fundamental de uma escola a ser escolhida para participarem da olimpíada de brasileira de informática, na modalidade de iniciação níveis 1 e 2, que são para alunos até o nono ano do ensino fundamental. Na modalidade iniciação os alunos concorrem resolvendo problemas de lógica e problemas computacionais, sem o uso de computador, apenas utilizando lápis e papel. O objetivo dessa modalidade é despertar o gosto por problemas computacionais e detectar talentos potenciais para programação.
                    </p>
                </div>
            </section>

        </AboutProject>
        <Footer />
    </React.Fragment>
)