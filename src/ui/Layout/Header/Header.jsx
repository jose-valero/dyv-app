import React from 'react';
import { Language } from '../../../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { lanSelect } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import LogoImg from './assets/mini-logo.png';
import spainFlag from './assets/spainFlag.png';
import usaFlag from './assets/usaFlag.png';
import './Header.scss';

const Header = () => {
  const lang = useSelector((state) => state.langReducer);
  const dispatch = useDispatch();

  const langES = () => {
    dispatch(lanSelect('ES'));
  };
  const langEN = () => {
    dispatch(lanSelect('EN'));
  };

  return (
    <header className='menu__container'>
      <Link to='/'>
        <img className='brand' src={LogoImg} alt='Logo' />
      </Link>
      <nav className='menu'>
        <input type='checkbox' id='menuToggle' />
        <label htmlFor='menuToggle' className='menu-icon'>
          <HiMenuAlt3 className='menu__icon-bars' />
        </label>
        <ul className='menu__list-container'>
          <Link className='menu__links' to='/about'>
            <li className='menu__names'>{Language[`${lang}`].navbar.knowus}</li>
          </Link>
          <Link className='menu__links' to='/services'>
            <li className='menu__names'>
              {Language[`${lang}`].navbar.services}
            </li>
          </Link>
          <Link className='menu__links' to='/portafolio'>
            <li className='menu__names'>
              {Language[`${lang}`].navbar.portafolio}
            </li>
          </Link>
          <Link className='menu__links' to='/clients'>
            <li className='menu__names'>
              {Language[`${lang}`].navbar.clients}
            </li>
          </Link>
          <Link className='menu__links' to='/contact'>
            <li className='menu__names'>
              {Language[`${lang}`].navbar.contact}
            </li>
          </Link>
        </ul>
        <div className='menu__language'>
          <Link className='menu__language--esp' to='#' onClick={langES}>
            <img src={spainFlag} alt='' />
          </Link>
          <Link className='menu__language--eng' to='#' onClick={langEN}>
            <img src={usaFlag} alt='' />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
