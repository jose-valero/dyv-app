import React from 'react';

import { HiMenuAlt3 } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import LogoImg from '../../assets/statics/images/mini-logo.png';
import '../../assets/styles/components/Header.css';

const Header = () => {
  return (
    <header>
      <img className='brand' src={LogoImg} alt='Logo' />
      <nav className='menu'>
        <input type='checkbox' id='menuToggle' />
        <label htmlFor='menuToggle' className='menu-icon'>
          <HiMenuAlt3 className='menu__icon-bars' />
        </label>
        <ul>
          <a href='/'>
            <li>About</li>
          </a>
          <a href='/'>
            <li>Services</li>
          </a>
          <a href='/'>
            <li>Portafolio</li>
          </a>
          <a href='/'>
            <li>Clients</li>
          </a>
          <a href='/'>
            <li>Contact</li>
          </a>
          <a href='/'>
            <TiHome className='menu__home-icon' />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
