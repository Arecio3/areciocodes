import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pexels-skyler-ewing-9382466.jpg'
import IMG2 from '../../assets//pexels-aleksejs-bergmanis-681335.jpg'
import IMG3 from '../../assets/pexels-clive-kim-4220967.jpg'
import IMG4 from '../../assets/image_processing20200610-7773-knt196.jpeg'
import IMG5 from '../../assets/Google-Logo-Retro-Doodle-World-Wide-Web-30-1.webp'
import IMG6 from '../../assets/Documentcreatie_Header.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
        </div>
          <h3>Hummingbird Lawn Services</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Arecio3/Humming_bird" target="_blank" rel="noreferrer noopener" className='btn'>Github</a>
          <a href="https://hummingbirdlawn.com/" target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Website</a>
          </div>
        </article> 
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
        </div>
          <h3>Value Haulers</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Arecio3/Humming_bird" target="_blank" rel="noreferrer noopener" className='btn'>Github</a>
          <a href="https://hummingbirdlawn.com/" target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Website</a>
          </div>
        </article> 
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
        </div>
          <h3>Popnado</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Arecio3/Humming_bird" target="_blank" rel="noreferrer noopener" className='btn'>Github</a>
          <a href="https://hummingbirdlawn.com/" target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Website</a>
          </div>
        </article> 
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
        </div>
          <h3>Halo</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Arecio3/Humming_bird" target="_blank" rel="noreferrer noopener" className='btn'>Github</a>
          <a href="https://hummingbirdlawn.com/" target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Website</a>
          </div>
        </article> 
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
        </div>
          <h3>Searchy</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Arecio3/Humming_bird" target="_blank" rel="noreferrer noopener" className='btn'>Github</a>
          <a href="https://hummingbirdlawn.com/" target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Website</a>
          </div>
        </article> 
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
        </div>
          <h3>Documaker</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Arecio3/Humming_bird" target="_blank" rel="noreferrer noopener" className='btn'>Github</a>
          <a href="https://hummingbirdlawn.com/" target="_blank" rel="noreferrer noopener" className='btn btn-primary'>Website</a>
          </div>
        </article> 
      </div>
    </section>
  )
}

export default Portfolio