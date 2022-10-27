import React from 'react'
import img from './img.jpg'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

export default function Head() {
  return (
    <div className='head'>
        <img src={img} alt='' className='main-img'></img>
        <h1 className='head-name'>Skerdi Nelaj</h1>
        <h3 className='head-position'>Frontend Developer</h3>
        <small className='head-email'>nskerdi@gmail.com</small>
        <div className='div-buttons'>
            <button className='head-button mail-btn'><FaEnvelope/>Email</button>
            <button className='head-button linkedin-btn'><FaLinkedinIn className='linkedin-icon'/>LinkedIn</button>
        </div>
    </div>
  )
}
