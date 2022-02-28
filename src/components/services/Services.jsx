import React from 'react'
import './services.css'
import { BsLightningChargeFill, BsPatchCheckFill } from 'react-icons/bs'
import { AiOutlineFire }  from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsLightningChargeFill className="service__list-icon"/>
              <p>Modern Design</p>
            </li>
            <li>
              <BsLightningChargeFill className="service__list-icon"/>
              <p>Fast and Reliable</p>
            </li>
            <li>
              <BsLightningChargeFill className="service__list-icon"/>
              <p>Unique but Familiar</p>
            </li>
            <li>
              <BsLightningChargeFill className="service__list-icon"/>
              <p>Fully Responsive</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Full Stack Web-Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icon"/>
              <p>Big O Notaion</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon"/>
              <p>SEO</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon"/>
              <p>Database Management</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon"/>
              <p>User Authentication</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon"/>
              <p>API'S</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon"/>
              <p>Google Auth</p>
            </li>
            <li>
              <BsPatchCheckFill className="service__list-icon"/>
              <p>Email / Phone Confirmation</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creator</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineFire className="service__list-icon"/>
              <p>3D</p>
            </li>
            <li>
              <AiOutlineFire className="service__list-icon"/>
              <p>NFT</p>
            </li>
            <li>
              <AiOutlineFire className="service__list-icon"/>
              <p>Data Modeling</p>
            </li>
            <li>
              <AiOutlineFire className="service__list-icon"/>
              <p>Games</p>
            </li>
            <li>
              <AiOutlineFire className="service__list-icon"/>
              <p>Raspberry PI</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services