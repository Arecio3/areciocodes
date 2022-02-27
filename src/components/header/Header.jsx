import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {

  return (
    <header>
      {/* BEM Naming Convention */}
      <div className="container header__container">
        <h5>Hello, I'm</h5>
          <h1>Arecio Canton</h1>
          <h5 className="text-light">Full Stack Developer & Software Engineer</h5>
          <CTA />
      </div>
    </header>
  )
}

export default Header