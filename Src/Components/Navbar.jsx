import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from './../assets/logo1.png'
import menuIcon from '../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt='' className='logo' />
        <ul className={mobileMenu?'':"hide-mobile-menu"}>
            <li><Link to='home' smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={closeMenu}>Cantact Us</Link></li>
        </ul>
        <img src={menuIcon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar