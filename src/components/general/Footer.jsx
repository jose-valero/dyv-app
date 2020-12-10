import React, { useState } from 'react';
import fullLogo from '../../assets/statics/images/LogoLight.png';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import '../../assets/styles/components/general/Footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Submitting email ${email}`);
    setEmail('');
  };

  const sendOnChange = (e) => {
    setEmail(e.target.value);
  };

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
              <form onSubmit={handleSubmit}>
                <input
                  type='email'
                  htmlFor='Email'
                  placeholder='Your email address'
                  value={email}
                  onChange={sendOnChange}
                  required
                />
                <button
                  type='submit'
                  value='Submit'
                  className='footer__newsletter--button'
                >
                  <IoMdSend
                    name='Go!'
                    className='sendButton'
                    style={iconSend}
                  />
                </button>
              </form>
            </>
          </div>
        </div>
        <div className='footer__social'>
          <div className='footer__social--content'>
            <h2 style={{ textAlign: 'center' }}>Let's Talk</h2>
            <div className='footer__social--content--items'>
              <FaWhatsapp style={iconStyle} />
              <span>+54 1165986136</span>
            </div>
            <div className='footer__social--content--items'>
              <FaEnvelopeOpenText style={iconStyle} />
              <span>dyv@gmail.com</span>
            </div>
            <div className='footer__social--content--items'>
              <FaMapMarkerAlt style={iconStyle} />
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
};

const iconSend = {
  fill: '#b3b3b5',
  margin: '0.25rem',
  width: '24px',
  height: 'auto',
};
export default Footer;
