import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/UNO_Logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [sticky, setsticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setsticky(true) : setsticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu?  setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Rules' smooth={true} offset={-260} duration={500}>rules</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='purchase' smooth={true} offset={-260} duration={500}>Purchase</Link></li>
        <li><Link to='more' smooth={true} offset={-260} duration={500}>More</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar