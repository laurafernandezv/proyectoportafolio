import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/Camara-logo.png'
import insta from '../../public/instagram.jpg'

const Header = () => {
  return (
    <header className='encabezado'>
      <section className='menu-navegacion'>
        <Link to={'/'}>INICIO</Link>
        <Link to={'/bio'}>BIO</Link>
        <Link to={'/contacto'}>Contacto</Link>
    
      </section>
      <section>
      <a href='https://www.instagram.com/' target="_blank"><img src={insta} alt='' className='insta'/></a>
      </section>
      <section className='logo'>
      
      <img src={logo} alt="" />
         
      </section>
      
    </header>
  )
}

export default Header