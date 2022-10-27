import React from 'react'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer'>
        <FaTwitterSquare className='footer-icons'/>
        <FaFacebookSquare className='footer-icons'/>
        <FaInstagramSquare className='footer-icons'/>
        <FaGithubSquare className='footer-icons'/>
    </footer>
  )
}
