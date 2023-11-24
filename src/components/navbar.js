import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />

      <div className="desktopMenu">
        <a href='#home' className='desktopMenuListItem'>Home</a>
        <a href='#about' className='desktopMenuListItem'>About Me</a>

        <a href="#skills" className='desktopMenuListItem'>Experience</a>
        <a href="#contact" className='desktopMenuListItem'>contact Me</a>

      </div>

      <button className='desktopMenuBtn'>
        <img src="" alt='' className="desktopMenuImg" /> Contact me
      </button>
    </nav>
  );
}

export default Navbar;
