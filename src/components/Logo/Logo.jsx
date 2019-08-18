import React from 'react'
import './Logo.scss'

const logo = `https://res.cloudinary.com/cloudpetimgs/image/upload/v1557458249/pet_comp_logo_gjra5s.svg`

export default props => {
    return (
        <div id="logoTop" className="logo">
            <a href="/">
                <img src={logo} alt={'logo'} />
            </a>
        </div>
    )
}