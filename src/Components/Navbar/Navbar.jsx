import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/UNO_Logo.png'

const Navbar = () => {

  const [sticky, setsticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setsticky(true) : setsticky(false);
    })
  }, []);

  return (
    <nav className={`${sticky? 'dark-nav' : ''}`}>
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