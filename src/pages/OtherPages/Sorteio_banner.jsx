import React from 'react'
import Navbar from '../../template/Navbar/Navbar';
import Footer from '../../template/Footer/Footer';
import { BannerStatic } from '../../template/Banner/Banner';

import AboutProject from '../../template/AboutProject/AboutProject';

const sorteio_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557499536/sorteio_ssd_mobile_xo2wci.png`
const sorteio_2x = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557458260/sorteio_ssd_2x_gz23nb.png`

export default props => <React.Fragment>
    <Navbar />
    <BannerStatic
        title="Quer ganhar um SSD de 240GB?"
        subtitle="Compre uma rifa e concorra!"
        urlImgs={[
            { src: sorteio_mobile, size: 768 },
            { src: sorteio_2x }
        ]} />
    <AboutProject>
        <div className="row">
            <p>Kkk eae man, suave? 😎</p>
            <p>Queria te fazer uma pergunta, quando você tenta abrir os programas do seu computador, dá aquela travadinha de leve? 🤔 Quando você vai dar aquela jogada, demora uma vida e mais seis meses para carregar?🤔</p>
            <p>E que tal se seu office carregasse em apenas alguns segundos?🤩</p>
            <p>Pra fazer aquele trabalhinho maroto heim?🧐 O que acha?</p>
            <p>E se eu te disser que tá rolando uma venda de rifas em que o prêmio é um SSD de 240GB pra deixar o seu PC até 10x mais rápido do que com seu antigo HD.🛫🛫🛫</p>
            <p>Beleza parça, falou falou e não disse nada🤙🏽</p>
            <p>Quanto custa essa rifa?</p>
            <p>Apenas R$ 2,00 😎</p>
            <p>
                Só 2 reais?
                SIMM SÓ DOIS REAIS❣️
                Ta esperando o quê?
            </p>
            <p>Como faço pra conseguir essa rifa?</p>
            <p>É só entrar em contato com os alunos do PET Computação💻</p>
            <p>Através das nossas mídias sociais</p>
            <p>O SORTEIO OCORRERÁ DIA 17 ENTÃO NÃO PERCAM TEMPO 😎</p>
        </div>
    </AboutProject>
    <Footer />
</React.Fragment>