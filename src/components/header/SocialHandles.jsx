import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs'
import { SiDogecoin } from "react-icons/si";
import './header.css'

const SocialHandles = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/arecio-canton-95026a208/" target="_blank" rel="noreferrer noopener" ><BsLinkedin /></a>
        <a href="https://www.instagram.com/areciocodes/" target="_blank" rel="noreferrer noopener" ><BsGithub /></a>
        <a href="https://opensea.io/account" target="_blank" rel="noreferrer noopener" ><SiDogecoin /></a>
        <a href="https://www.instagram.com/areciocodes/" target="_blank" rel="noreferrer noopener" ><BsInstagram /></a>
        <a href="https://twitter.com/areciocodes" target="_blank" rel="noreferrer noopener"><BsTwitter /></a>
    </div>
  )
}

export default SocialHandles