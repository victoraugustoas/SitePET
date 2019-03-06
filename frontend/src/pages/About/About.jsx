import React from 'react'

import Navbar from '../../template/Navbar/Navbar'
import { FooterAlternative } from '../../template/Footer/Footer'
import { BannerStatic } from '../../template/Banner/Banner'

export default props => (
    <React.Fragment>
        <Navbar />
        <BannerStatic urlImg="https://www.w3schools.com/css/img_5terre_wide.jpg"
            altImg="Sobre" title="Sobre" subtitle="Saiba mais sobre o PET Computação =D" />

        <div className="container">
            <h2>Sobre o PET Computação</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum est quis massa vulputate, eu efficitur ex volutpat. Aliquam erat volutpat. Sed ultrices dignissim risus ac commodo. Etiam rutrum ante non bibendum mattis. Cras quis iaculis ex, at facilisis risus. Ut in hendrerit nisi. Sed nisl nisi, fringilla at massa ut, pharetra porttitor sapien. Nunc vitae malesuada ex. Cras metus lectus, lobortis volutpat pretium et, laoreet at sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum sollicitudin nunc a scelerisque. Morbi fermentum pellentesque sem id ullamcorper. Aliquam quis lectus vitae nisl sodales porta vitae id turpis. Curabitur eget massa nec libero consectetur volutpat. Praesent ullamcorper dui nunc, id congue ligula fermentum vel. Fusce massa sapien, elementum sit amet malesuada sed, consequat ac metus. Duis vitae laoreet odio. Nulla erat magna, vehicula rhoncus luctus vel, varius ut magna.
            </p>
            <p>
                Aliquam varius massa a sapien mattis convallis. Phasellus volutpat diam libero, id tempus mi fermentum et. Praesent ultrices porta tristique. Nulla ut neque nisi. Nunc odio eros, accumsan in condimentum id, dictum facilisis orci. Integer lobortis quam non auctor semper. Integer elementum enim sit amet ante commodo consequat. Donec eget orci justo. Donec sit amet pulvinar urna, varius mollis odio. Nullam consectetur venenatis iaculis. Sed vitae libero sit amet nisi mollis tempor maximus vitae nisi.
            </p>
            <p>
                Maecenas lorem arcu, ultricies et arcu vitae, sodales condimentum odio. Aenean in porta sapien. Vestibulum posuere purus nec tristique vestibulum. Vestibulum sed sapien vel ipsum interdum laoreet. Ut dapibus, tellus et rhoncus sollicitudin, augue magna pulvinar diam, maximus lacinia tellus mauris id enim. Praesent sollicitudin arcu consequat blandit pulvinar. Sed scelerisque elit quis tortor commodo, non iaculis neque ullamcorper. Nullam pulvinar faucibus massa, quis ornare eros cursus efficitur. Aenean dictum, justo ut accumsan volutpat, diam nisl rhoncus velit, at accumsan massa urna non magna. Sed sodales justo vitae lacus congue, eget rhoncus lacus iaculis. Nunc eget iaculis elit. Morbi consequat justo sit amet justo tempor fermentum. Ut euismod efficitur neque sit amet fermentum. Aenean rutrum faucibus purus. Mauris auctor nisi nibh, quis feugiat neque pellentesque eu.
            </p>
            <p>
                Suspendisse tincidunt nisl non placerat suscipit. Nam sollicitudin quam in nisl commodo congue. Aenean vitae efficitur nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam quis eleifend felis. Etiam convallis neque enim, a eleifend sem maximus nec. Sed mollis nulla sem, ut malesuada mi vestibulum sit amet. Suspendisse luctus et neque ut placerat. Ut egestas turpis mauris, eu accumsan velit facilisis quis. Sed in dolor nec orci blandit condimentum in at risus. Nulla ultrices odio at fringilla facilisis. Vestibulum sed augue dolor. Integer nunc velit, viverra nec lacinia et, dapibus a odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed at lectus luctus, cursus libero sed, elementum tellus.
            </p>
        </div>
        <FooterAlternative />

    </React.Fragment >
)