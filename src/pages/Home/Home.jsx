import React from 'react'
import './Home.css'

import Navbar from '../../template/Navbar/Navbar'
import Diary from '../../template/Diary/Diary'
import RecentActivities from '../../template/RecentActivities/RecentActivities'
import CardRecentActivities from '../../template/RecentActivities/CardRecentActivities'
import Banner from '../../template/Banner/Banner'
import Footer from '../../template/Footer/Footer'
import BannerItem from '../../template/Banner/BannerItem/BannerItem'
import CardDiary, { Card } from '../../template/Diary/CardDiary'

import cartaz_ssd from '../../assets/imgs/sorteio_ssd.png'
import cartaz_ssd_mobile from '../../assets/imgs/sorteio_ssd_mobile.png'

import cartaz_minicurso from '../../assets/imgs/cartaz_minicurso.png'
import cartaz_minicurso_mobile from '../../assets/imgs/logos/minicurso_mobile.png'

const url = "https://calendar.google.com/calendar/embed?src=petcomputacao%40icomp.ufam.edu.br&ctz=America%2FBoa_Vista"
const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner>
            <BannerItem active urlImgs={[
                { src: cartaz_minicurso_mobile, size: 768 },
                { src: cartaz_minicurso }
            ]}
                url='/minicurso_banner'
                subtitle="Minicurso de C com foco em Algoritmos e Estruturas de dados I"
                title="Minicurso de C"
                textButton="Ver Mais" />

            <BannerItem urlImgs={[
                { src: cartaz_ssd_mobile, size: 768 },
                { src: cartaz_ssd }
            ]}
                url='/sorteio_banner'
                subtitle="O dinheiro arrecadado será utilizado em projetos do PET"
                title="Sorteio de SSD 240GB"
                textButton="Ver Mais" />
        </Banner>
        <Diary>
            <CardDiary>
                <Card url={url} date="06/05" title="Reunião do IntegraPET" />
                <Card url={url} date="08/05" title="Reunião Mensal do PET" />
            </CardDiary>
            <CardDiary>
                <Card url={url} date="14/05" title="Início do Minicurso de C" />
                <Card url={url} date="16/05" title="ConectPET" />
            </CardDiary>
        </Diary>
        <RecentActivities>
            <CardRecentActivities title="PET OBI"
                url='/petobi'
                description={description}
                urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                textButton="Ver Mais" />
            <CardRecentActivities title="Computação Desplugada"
                url='/compdes'
                description={description}
                urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                textButton="Ver Mais" />
            <CardRecentActivities title="Oficina de Programação"
                description={description}
                url="/oficina"
                urlImg="http://pet.icomp.ufam.edu.br/img/computacao_desplugada.jpg"
                textButton="Ver Mais" />
        </RecentActivities>
        <Footer />
    </React.Fragment>
)