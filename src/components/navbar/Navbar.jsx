import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavbarStyle.css"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };
  return (
    <header className='nav-container'>
      <Link className='sit-logo' to="/" onClick={() => handleNavLinkClick('/')}>Adem<span>.</span></Link>
      <nav>
        <Link exact to="/"  className={`link ${activeLink === '/' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/')}>Home</Link>
        <Link to="/services"  className={`link ${activeLink === '/services' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/services')}>Services</Link>
        <Link to="/resume"  className={`link ${activeLink === '/resume' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/resume')}>Resume</Link>
        <Link to="/work"  className={`link ${activeLink === '/work' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/work')}>Work</Link>
        <Link to="/contact"  className={`link ${activeLink === '/contact' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/contact')}>Contact</Link>
        <Link to="/contact" className="btn_hire" onClick={() => handleNavLinkClick('/contact')}><span>Hire me</span></Link>
    </nav>
    </header>
  )
}

export default Navbar;