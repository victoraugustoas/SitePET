import React from 'react'
import Navbar from '../../template/Navbar/Navbar';
import Footer from '../../template/Footer/Footer';
import { BannerStatic } from '../../template/Banner/Banner';
import AboutProject from '../../template/AboutProject/AboutProject';

import minicurso from '../../assets/imgs/cartaz_minicurso.png'
import minicurso_2x from '../../assets/imgs/cartaz_minicurso_2x.png'
import minicurso_mobile from '../../assets/imgs/logos/minicurso_mobile.png'

export default props => {
    return <React.Fragment>
        <Navbar />
        <BannerStatic
            title="Minicurso da linguagem C"
            subtitle="Venha participar do minicurso oferecido pelo PET Computação"
            urlImgs={[
                { src: minicurso_mobile, size: 768 },
                { src: minicurso, size: 1920 },
                { src: minicurso_2x }
            ]} />
        <AboutProject title="Saiba mais sobre o minicurso">
            <div className="row">
                <p>E aí k-loiros, suave?🤙🏽</p>
            </div>
            <div className="row">
                <p>Ficamos sabendo que rolou um nivelamento TOP😍 de linguagem C🖥, feito pela galera do CACi.Com.</p>
            </div>
            <div className="row">
                <p>Sabem que AED 1 ta vindo aí né? E ainda dizendo assim "Eu sou inevitável".</p>
            </div>
            <div className="row">
                <p>Que tal dar aquela revisada na sintaxe da Linguagem heim? 🤔</p>
            </div>
            <div className="row">
                <p>Hmmm não sei não, nem sei nada, como vou revisar?</p>
            </div>
            <div className="row">
                <p>Fiquem tranquilos, porque está vindo aí o super Minicurso de C do Pet Computação🖥 para que você não chegue em AED 1 sem ter a mínima noção da sintaxe, aprenda as estruturas condicionais, de controle e de repetição e ainda aquelas estruturas de dados que são muito usadas 😎</p>
            </div>
            <div className="row">
                <p>E O MELHOR, AO FINAL DO MINICURSO VOCÊ AINDA GANHA AQUELAS HORAS COMPLEMENTARES, E AÍ VAI FICAR DE FORA?🤔</p>
            </div>
            <div className="row">
                <h2>Informações:</h2>
            </div>
            <div className="row">
                <ul>
                    <li>Início das aulas: 14/05</li>
                    <li>Aulas todas as terças e quintas</li>
                    <li>Ao final do curso você reberá um certificado de 16 horas complementares</li>
                    <li>O conteúdo ministrado no curso visa a disciplina de Algoritmos e Estruturas de dados I</li>
                    <li>Local: Laboratório de graduação 1 do IComp</li>
                </ul>
            </div>
            <div className="row">
                <p>Você pode se inscrever aqui: </p>
            </div>
            <div className="row">
                <p>
                    <a href="https://docs.google.com/forms/d/1Bdr75DwyhEo8p2l7VsXLxTfWV1K59ojQhFcp2LubLVg/viewform?edit_requested=true&fbclid=IwAR02Z3EYWXfYpEKfeM78KG3FhhCBXTwm6bsuAg0tHoQd_v1zyQF67dYd9vk"> Inscrição para o minicurso</a>
                </p>
            </div>

        </AboutProject>
        <Footer />
    </React.Fragment>
}