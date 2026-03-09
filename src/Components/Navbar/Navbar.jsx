import React from 'react'
import './Navbar.css'
import logo from '../../assets/UNO_Logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>rules</li>
        <li>Purchase</li>
        <li>About us</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar