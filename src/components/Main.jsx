import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import burguerKing from '../../public/burguerKing.png'
import mcdonals from '../../public/mcdonalds.png'
import deli from '../../public/deli.jpg'
import aptlujo from '../../public/lujoapt.jpg'
import casalujo from '../../public/casa-lujo.jpg'

const Main = () => {
  return (
    <header>
      <Header />
      <section className='vistapp'>
        <img src={burguerKing} alt="" className='imagenes'/>
        <Link to={'/produccion1'} className='boton'>Burguer King</Link>
        <img src={mcdonals} alt="" className='imagenes'/>
        <Link to={'/produccion2'}className='boton'>MacDonals</Link>
        <img src={deli} alt="" className='imagenes'/>
        <Link to={'/produccion3'}className='boton'>Deli Burgues Gurmet</Link>
      </section>
  
      <section className='vistapp'>
      <img src={aptlujo} alt="" className='imagenes'/>
        <Link to={'/produccion4'}>Apartamentos de lujo</Link>
       <img src={casalujo} alt="" className='imagenes'/>
        <Link to={'/produccion5'}>Casas de lujo</Link>
      </section>
     
    </header>
    
  )
}

export default Main