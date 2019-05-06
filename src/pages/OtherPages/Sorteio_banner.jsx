import React from 'react'
import Navbar from '../../template/Navbar/Navbar';
import Footer from '../../template/Footer/Footer';
import { BannerStatic } from '../../template/Banner/Banner';

import sorteio_mobile from '../../assets/imgs/sorteio_ssd_mobile.png'
import sorteio from '../../assets/imgs/sorteio_ssd.png'
import sorteio_2x from '../../assets/imgs/sorteio_ssd_2x.png'
import AboutProject from '../../template/AboutProject/AboutProject';

export default props => <React.Fragment>
    <Navbar />
    <BannerStatic
        title="Quer ganhar um SSD de 240GB?"
        subtitle="Compre uma rifa e concorra!"
        urlImgs={[
            { src: sorteio_mobile, size: 768 },
            { src: sorteio, size: 1920 },
            { src: sorteio_2x }
        ]} />
    <AboutProject>
        <div className="row">
            <p>Kkk eae man, suave? 😎</p>
        </div>
        <div className="row">
            <p>Queria te fazer uma pergunta, quando você tenta abrir os programas do seu computador, dá aquela travadinha de leve? 🤔 Quando você vai dar aquela jogada, demora uma vida e mais seis meses para carregar?🤔</p>
        </div>
        <div className="row">
            <p>E que tal se seu office carregasse em apenas alguns segundos?🤩</p>
        </div>
        <div className="row">
            <p>Pra fazer aquele trabalhinho maroto heim?🧐 O que acha?</p>
        </div>
        <div className="row">
            <p>E se eu te disser que tá rolando uma venda de rifas em que o prêmio é um SSD de 240GB pra deixar o seu PC até 10x mais rápido do que com seu antigo HD.🛫🛫🛫</p>
        </div>
        <div className="row">
            <p>Beleza parça, falou falou e não disse nada🤙🏽</p>
        </div>
        <div className="row">
            <p>Quanto custa essa rifa?</p>
        </div>
        <div className="row">
            <p>Apenas R$ 2,00 😎</p>
        </div>
        <div className="row">
            <p>
                Só 2 reais?
                SIMM SÓ DOIS REAIS❣️
                Ta esperando o quê?
            </p>
        </div>
        <div className="row">
            <p>Como faço pra conseguir essa rifa?</p>
        </div>
        <div className="row">
            <p>É só entrar em contato com os alunos do PET Computação💻</p>
        </div>
        <div className="row">
            <p>Através das nossas mídias sociais</p>
        </div>
        <div className="row">
            <p>
                O SORTEIO OCORRERÁ DIA 17 ENTÃO NÃO PERCAM TEMPO 😎
            </p>
        </div>
    </AboutProject>
    <Footer />
</React.Fragment>