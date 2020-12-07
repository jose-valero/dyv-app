import React from 'react';
import fullLogo from '../../assets/statics/images/LogoLight.png';
import { Link } from 'react-router-dom';

import '../../assets/styles/components/general/Footer.scss';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__section-logo'>
        <img src={fullLogo} alt='' />
      </div>
      <div className='footer__nav'>
        <div className='footer__nav--content'>
          <h2>Navigation</h2>
          <ul>
            <li className='footer__nav--content--items'>
              <Link to='/'>Home</Link>
            </li>
            <li className='footer__nav--content--items'>
              <Link to='/'>About</Link>
            </li>
            <li className='footer__nav--content--items'>
              <Link to='/'>Portafolio</Link>
            </li>
            <li className='footer__nav--content--items'>
              <Link to='/'>Clients</Link>
            </li>
            <li className='footer__nav--content--items'>
              <Link to='/'>Services</Link>
            </li>
            <li className='footer__nav--content--items'>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__newsletter'>
        <div className='footer__newsletter--content'>HolaNews</div>
      </div>
      <div className='footer__social'>
        <div className='footer__social--content'>HolaSocial</div>
      </div>
    </div>
  );
};

export default Footer;
