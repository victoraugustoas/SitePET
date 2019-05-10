import React from 'react'
import Navbar from '../../template/Navbar/Navbar';
import { BannerStatic } from '../../template/Banner/Banner';

import code from '../../assets/imgs/code.jpg'
import AboutProject from '../../template/AboutProject/AboutProject';
import Quote from '../../template/Quote/Quote';
import Footer from '../../template/Footer/Footer';

export default props => {
    return <React.Fragment>
        <Navbar />
        <BannerStatic
            title="Novo site do PET Computação"
            subtitle="O novo site do PET Computação está online de cara nova"
            urlImgs={[
                { src: code }
            ]}
        />
        <AboutProject>
            <div className="row">
                <p>
                    <span className="capitular-letter">O</span> site foi criado em 2019 com intuito de aproximar não só os estudantes das graduações do IComp, mas sim o corpo docente e os demais departamentos da UFAM das atividades que o PET Computação está realizando.
                    Sendo o portal de atividades do PET e também a nossa face para a comunidade, o site terá caráter informativo para todos que desejam saber o que o está sendo realizado nos bastidores.
                </p>
                <p>
                    O website faz parte de um plano de divulgação juntamente com as redes sociais, visando alcançar o público acadêmico e externo como eventos, palestras e atividades realizadas.
                </p>
                <p>
                    Foi criado pelos próprios petianos, com uma nova cara e algumas novidades. Ele está sendo desenvolvido para que os visitantes se sintam familiarizados com o ambiente, podendo navegar com facilidade.
                </p>
                <h4>Ferramentas utilizadas</h4>
                <div className="row">
                    <p>
                        As ferramentas utilizadas para o desenvolvimento foram:
                    </p>
                    <ul>
                        <li>React que é uma biblioteca JavaScript de código aberto para criar interfaces de usuário;</li>
                        <li>
                            O próprio conhecimento sobre HTML e CSS, que ditou muito no desenvolvimento do site.
                        <ul>
                                <li>HTML - é uma linguagem de marcação utilizada na construção de páginas na Web. </li>
                                <li>CSS - O Cascading Style Sheets (CSS) é uma "folha de estilo" composta por “camadas” e utilizada para definir a apresentação (aparência) em páginas da internet que adotam para o seu desenvolvimento linguagens de marcação.</li>
                            </ul>
                        </li>
                        <li>Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web. </li>
                    </ul>
                    <p>
                        As cores também foram muito importantes na criação, pois elas darão ao usuário que estiver visualizando um sentimento sobre o site. A cor predominante é o azul, essa cor é proveniente do logo do PET Computação. O verde por exemplo usado em algumas partes, remete a sensação de renovação, que nesse caso é o'que está acontecendo com o site, passando por um processo de reformulação.
                </p>
                    <p>
                        Visando colocar em prática os assuntos que aprendemos ao estudar para o desenvolvimento, nos deparamos com alguns obstáculos, e a partir deles tivemos algumas lições aprendidas.
                </p>
                    <p>
                        Primeiramente a organização da equipe, pelo grupo que estava desenvolvendo ser heterogêneo no que diz respeito ao nível de conhecimento de cada um, tivemos que prolongar o prazo de entrega do site, para que todos os envolvidos pudessem aprender os assuntos e assim, por em prática.
                </p>
                    <Quote
                        reference="Brenda Aguiar - Petiana (nutella)"
                        body="Como já sabia o básico de HTML e CSS, fazer o site me ajudou a ter mais experiência em programação web. Com a ajuda dos colegas petianos, pude aprender coisas que eu sei que futuramente irei precisar na graduação e no mercado de trabalho."
                    />
                    <Quote
                        body="Percebi que alguns de meus colegas estavam com dificuldades, e durante o desenvolvimento, nós tínhamos uma reunião pequena para tirar dúvidas e ajudar os demais com alguma dificuldade, foi uma experiência muito boa."
                        reference="Victor Augusto - Petiano (raiz)"
                    />
                    <p>
                        Outra lição aprendida foi sobre as próprias tecnologias utilizadas, que por se tratar de um projeto um pouco complexo, mostra a nós mesmos a nossa capacidade de resolver problemas utilizando as ferramentas à nossa disposição.
                </p>
                    <p>
                        Apesar de estar estar online, não significa que o trabalho acabou, ainda há muitas coisas a serem feitas e muito o'que aprender. Portanto o desenvolvimento irá continuar, para aperfeiçoar ainda mais nossa plataforma.
                </p>
                </div>
            </div>
        </AboutProject>
        <Footer />
    </React.Fragment>
}