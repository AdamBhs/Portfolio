import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./NavbarStyle.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleNavMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      document.addEventListener('click', handleClickOutside);
    } else {
      document.body.classList.remove('menu-open');
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className='nav-container' ref={navRef}>
      <Link className='sit-logo' to="/" onClick={() => handleNavLinkClick('/')}>Adem<span>.</span></Link>
      <HiOutlineBars3 className='bars-menu' onClick={handleNavMenuClick} />
      <nav className='nav-normal'>
        <Link exact to="/" className={`link ${activeLink === '/' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/')}>Home</Link>
        <Link to="/services" className={`link ${activeLink === '/services' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/services')}>Services</Link>
        <Link to="/resume" className={`link ${activeLink === '/resume' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/resume')}>Resume</Link>
        <Link to="/work" className={`link ${activeLink === '/work' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/work')}>Work</Link>
        <Link to="/contact" className={`link ${activeLink === '/contact' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/contact')}>Contact</Link>
        <Link to="/contact" className="btn_hire" onClick={() => handleNavLinkClick('/contact')}><span>Hire me</span></Link>
      </nav>
      <nav className={`nav${isOpen ? ' open' : ''}`}>
        <IoMdClose className='close-nav' onClick={handleNavMenuClick}/>
        <Link exact to="/" className={`link ${activeLink === '/' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/')}>Home</Link>
        <Link to="/services" className={`link ${activeLink === '/services' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/services')}>Services</Link>
        <Link to="/resume" className={`link ${activeLink === '/resume' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/resume')}>Resume</Link>
        <Link to="/work" className={`link ${activeLink === '/work' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/work')}>Work</Link>
        <Link to="/contact" className={`link ${activeLink === '/contact' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick('/contact')}>Contact</Link>
        <Link to="/contact" className="btn_hire" onClick={() => handleNavLinkClick('/contact')}><span>Hire me</span></Link>
      </nav>
    </header>
  );
};

export default Navbar;
