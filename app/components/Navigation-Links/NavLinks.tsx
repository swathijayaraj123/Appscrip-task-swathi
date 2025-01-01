'use client';
import React, { useState } from 'react';
import './NavLinks.css'

const NavbarLinks = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="navbar1">
      <ul className={`nav-links ${navOpen ? 'active' : ''}`} onClick={()=>setNavOpen(!navOpen)}> 
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
      
      <div className="hamburger" onClick={toggleNav}>
        <img src="https://img.icons8.com/?size=100&id=myPLJvyrnck4&format=png&color=000000" alt="Hamburger Icon" className='hamburger-img' />
      </div>
    </nav>
  );
};

export default NavbarLinks;
