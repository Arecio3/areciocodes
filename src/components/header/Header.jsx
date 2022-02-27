import React from 'react'
import './header.css'
import CTA from './CTA'
import selfie from '../../assets/profeshMe.png'
import SocialHandles from './SocialHandles'
const Header = () => {

  return (
    <header>
      {/* BEM Naming Convention */}
      <div className="container header__container">
        <h5>Hello, I'm</h5>
          <h1>Arecio Canton</h1>
          <h5 className="text-light">Full Stack Developer & Software Engineer</h5>
          <CTA />
            <SocialHandles />

          <div className="me">
            <img src={selfie} alt="" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header