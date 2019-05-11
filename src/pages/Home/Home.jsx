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

const cartaz_ssd_2x = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557458260/sorteio_ssd_2x_gz23nb.png`
const cartaz_ssd_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/v1557499536/sorteio_ssd_mobile_xo2wci.png`

const cartaz_minicurso_2x = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557458232/cartaz_minicurso_2x_lqqitm.png`
const cartaz_minicurso_mobile = `https://res.cloudinary.com/cloudpetimgs/image/upload/v1557499934/minicurso_mobile_jgyhju.png`

const code = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557458245/code_jofkpn.jpg`
const integrapet = `https://res.cloudinary.com/cloudpetimgs/image/upload/c_scale,w_${window.innerWidth}/v1557539577/IntegraPET_f0flv2.jpg`

const url = "https://calendar.google.com/calendar/embed?src=petcomputacao%40icomp.ufam.edu.br&ctz=America%2FBoa_Vista"
const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`

export default props => (
    <React.Fragment>
        <Navbar />
        <Banner>
            <BannerItem active urlImgs={[
                { src: cartaz_minicurso_mobile, size: 768 },
                { src: cartaz_minicurso_2x }
            ]}
                url='/minicurso_banner'
                subtitle="Minicurso de C com foco em Algoritmos e Estruturas de dados I"
                title="Minicurso de C"
                textButton="Ver Mais" />

            <BannerItem urlImgs={[
                { src: cartaz_ssd_mobile, size: 768 },
                { src: cartaz_ssd_2x }
            ]}
                url='/sorteio_banner'
                subtitle="O dinheiro arrecadado será utilizado em projetos do PET"
                title="Sorteio de SSD 240GB"
                textButton="Ver Mais" />
            <BannerItem
                urlImgs={[
                    { src: code }
                ]}
                url='/recent_sitepet'
                title="Novo site do PET Computação"
                subtitle="Confira o novo site do PET, e veja também algumas notas que escrevemos sobre o desenvolvimento desse projeto."
                textButton="Ver Mais"
            />
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
            <CardRecentActivities title="Novo site do PET Computação"
                url='/recent_sitepet'
                description="Confira o novo site do PET, e veja também algumas notas que escrevemos sobre o desenvolvimento desse projeto."
                urlImg={code}
                textButton="Ver Mais" />
            <CardRecentActivities title="PET Computação sedia o IntegraPET"
                url='/recent_integrapet'
                description={'O PET Computação organizou no dia 06/05/2019 o evento chamado IntegraPET, que contou com a participação de vários representantes dos PET’s da UFAM.'}
                urlImg={integrapet}
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