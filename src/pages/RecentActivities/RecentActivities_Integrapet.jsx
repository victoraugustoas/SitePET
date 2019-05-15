import React from 'react'
import Navbar from '../../template/Navbar/Navbar'
import AboutProject from '../../template/AboutProject/AboutProject'
import { BannerStatic } from '../../template/Banner/Banner'
import Footer from '../../template/Footer/Footer'

const quality = 25
const img = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557539577/IntegraPET_f0flv2.jpg`

export default props => {
    return (
        <React.Fragment>
            <Navbar />
            <BannerStatic
                urlImgs={[
                    { src: `https://res.cloudinary.com/cloudpetimgs/image/upload/q_${quality}/v1557539577/IntegraPET_f0flv2.jpg`, size: 768 },
                    { src: img }
                ]}
                title='PET Computação sedia o IntegraPET'
                subtitle="Reunião mensal dos representantes dos PET's"
            />
            <AboutProject>
                <div className="row">
                    <p>
                        <span className='capitular-letter'>O</span> PET Computação organizou no dia 06/05/2019 o evento chamado IntegraPET, que contou com a participação de vários representantes dos PET’s da UFAM. O evento visa obter uma maior comunicação entre os PET’s por meio de reuniões mensais para discussão de novas ideias, atualizar os participantes de novas informações e outras atividades realizadas durante a reunião.
                    </p>
                    <p>
                        Devido à necessidade de comunicação entre os grupos PET’s do Amazonas, em 2018 surgia o chamado IntegraPET, que promove reuniões mensais para debater propostas de cumprimento da filosofia de promoção da visibilidade.
                    </p>
                    <p>
                        O IntegraPET foi uma ideia que surgiu com os membros do PET Biologia para uma reunião geral dos PET’s do Amazonas. O intuito era criar um grupo de colaboração, com o princípio que ajudassem uns aos outros em suas atividades ou que realizassem atividades em conjunto.
                    </p>
                    <p>
                        Para retirar essa ideia do papel foi escolhido um integrante de cada PET e também um suplente, para caso o representante não esteja presente. Assim, foi escolhido o representante do PET Computação, o petiano John , e o suplente Andrey .
                    </p>
                    <p>
                        E assim, os PET’s possuem reuniões mensais buscando debates sobre algo ou a cooperação na organização de alguma atividade em conjunto.
                    </p>
                    <p>
                        O IntegraPET tem a finalidade de estreitar a comunicação dos PET’s, nessas reuniões há um debate sobre algum assunto em pauta no momento, em seguida há a parte de tomada de decisões sobre o que precisa ser feito, e então há a delegação de tarefas para que a ideia seja tirada do papel. Além disso, nas reuniões há também um brainstorm para novas ideias e o repasse de informações importantes e comuns aos PET’s.
                    </p>
                </div>
            </AboutProject>
            <Footer />
        </React.Fragment>
    )
}