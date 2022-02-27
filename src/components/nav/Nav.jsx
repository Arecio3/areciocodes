import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import { BiMessageRounded } from 'react-icons/bi'
import { FaUserAstronaut } from 'react-icons/fa'
import { BsUiChecks } from 'react-icons/bs'
import { HiCode } from 'react-icons/hi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome /></a>
      <a href="#about"><FaUserAstronaut /></a>
      <a href="#experience"><HiCode /></a>
      <a href="#services"><MdWork /></a>
      <a href="#reviews"><BsUiChecks /></a>
      <a href="#contact"><BiMessageRounded/></a>
    </nav>
  )
}

export default Nav