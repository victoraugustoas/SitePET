import React from 'react'

import Navbar from '../../../template/Navbar/Navbar'
import Footer from '../../../template/Footer/Footer'
import AboutProject from '../../../template/AboutProject/AboutProject'
import { BannerStatic } from '../../../template/Banner/Banner'

import pet_obi_mobile from '../../../assets/imgs/logos/pet_obi_mobile.png'
import pet_obi from '../../../assets/imgs/logos/pet_obi.png'
import pet_obi_2x from '../../../assets/imgs/logos/pet_obi_2x.png'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImgs={[
            { src: pet_obi_mobile, size: 768 },
            { src: pet_obi, size: 1920 },
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
                <div className="col-sm mt-5">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png" alt="foto" className="img-fluid" />
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