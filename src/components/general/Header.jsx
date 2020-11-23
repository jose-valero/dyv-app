import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import LogoImg from '../../assets/statics/images/mini-logo.png';
import '../../assets/styles/components/general/Header.scss';

const Header = () => {
  return (
    <header className='menu__container'>
      <Link to='/' activestyle={{ border: 'none' }}>
        <img className='brand' src={LogoImg} alt='Logo' />
      </Link>
      <nav className='menu'>
        <input type='checkbox' id='menuToggle' />
        <label htmlFor='menuToggle' className='menu-icon'>
          <HiMenuAlt3 className='menu__icon-bars' />
        </label>
        <ul className='menu__list-container'>
          <Link
            className='menu__links'
            to='/about'
            activestyle={{ border: 'none' }}
          >
            <li className='menu__names'>About</li>
          </Link>
          <Link
            className='menu__links'
            to='/services'
            activestyle={{ border: 'none' }}
          >
            <li className='menu__names'>Services</li>
          </Link>
          <Link
            className='menu__links'
            to='/portafolio'
            activestyle={{ border: 'none' }}
          >
            <li className='menu__names'>Portafolio</li>
          </Link>
          <Link
            className='menu__links'
            to='/clients'
            activestyle={{ border: 'none' }}
          >
            <li className='menu__names'>Clients</li>
          </Link>
          <Link
            className='menu__links'
            to='/contact'
            activestyle={{ border: 'none' }}
          >
            <li className='menu__names'>Contact</li>
          </Link>
          <Link className='menu__links' to='/' activestyle={{ border: 'none' }}>
            <TiHome className='menu__home-icon' />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
