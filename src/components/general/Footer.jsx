import React from 'react';
import fullLogo from '../../assets/statics/images/LogoLight.png';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

import '../../assets/styles/components/general/Footer.scss';
import {
  AiOutlineWhatsApp,
  AiFillMail,
  AiFillEnvironment,
} from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';

const Footer = () => {
  return (
    <>
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
                <Link to='/about'>About</Link>
              </li>
              <li className='footer__nav--content--items'>
                <Link to='/portafolio'>Portafolio</Link>
              </li>
              <li className='footer__nav--content--items'>
                <Link to='/clients'>Clients</Link>
              </li>
              <li className='footer__nav--content--items'>
                <Link to='/services'>Services</Link>
              </li>
              <li className='footer__nav--content--items'>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__newsletter'>
          <div className='footer__newsletter--content'>
            <h2>Newsletter</h2>
            <p>Subscribe for free and keep in touch with our lastest content</p>
            <>
              <form>
                <input type='email' placeholder='Your email address' />
                <Button
                  type='submit'
                  name='Go!'
                  className='sendButton'
                  value='Go!'
                  route="#"
                />
              </form>
            </>
          </div>
        </div>
        <div className='footer__social'>
          <div className='footer__social--content'>
            <h2 style={{ textAlign: 'center' }}>Let's Talk</h2>
            <div className='footer__social--content--items'>
              <AiOutlineWhatsApp style={iconStyle} />
              <span>+54 1165986136</span>
            </div>
            <div className='footer__social--content--items'>
              <AiFillMail style={iconStyle} />
              <span>jhondoe@example.com</span>
            </div>
            <div className='footer__social--content--items'>
              <AiFillEnvironment style={iconStyle} />
              <span>GBA, Pilar, Argentina</span>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__quote'>
        <small>
          This Page was made with 💜 by Diseño<b>&</b>Vanguardia
        </small>
      </div>
    </>
  );
};

const iconStyle = {
  fill: '#b3b3b5',
  marginRight: '0.5rem',
  textAlign: 'end',
  width: '20px',
  height: 'auto',
};

const formGroup = {
  position: 'relative',
  // display: -ms-flexbox;
  display: 'flex',
  // -ms-flex-wrap: wrap;
  flexWrap: 'wrap',
  // -ms-flex-align: stretch;
  alignItems: 'stretch',
  width: '100%',
};

export default Footer;
