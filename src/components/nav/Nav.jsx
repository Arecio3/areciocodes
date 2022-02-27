import React, { useState } from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import { BiMessageRounded } from 'react-icons/bi'
import { FaUserAstronaut } from 'react-icons/fa'
import { BsUiChecks } from 'react-icons/bs'
import { HiCode } from 'react-icons/hi'
import { GoHeart } from 'react-icons/go'

const Nav = () => {
  const [activePage, setActivePage] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActivePage('#')} className={activePage === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActivePage('#about')} className={activePage === '#about' ? 'active' : ''}><FaUserAstronaut /></a>
      <a href="#portfolio" onClick={() => setActivePage('#portfolio')} className={activePage === '#portfolio' ? 'active' : ''}><GoHeart /></a>
      <a href="#experience" onClick={() => setActivePage('#experience')} className={activePage === '#experience' ? 'active' : ''}><MdWork /></a>
      <a href="#services" onClick={() => setActivePage('#services')} className={activePage === '#services' ? 'active' : ''}><HiCode /></a>
      <a href="#reviews" onClick={() => setActivePage('#reviews')} className={activePage === '#reviews' ? 'active' : ''}><BsUiChecks /></a>
      <a href="#contact" onClick={() => setActivePage('#contact')} className={activePage === '#contact' ? 'active' : ''}><BiMessageRounded/></a>
    </nav>
  )
}

export default Nav