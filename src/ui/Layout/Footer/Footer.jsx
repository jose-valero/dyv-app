import React, { useState, useEffect } from 'react';
import fullLogo from '../../../assets/images/LogoLight.png';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import InputText from '../../components/InputText/';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'react-toastify/dist/ReactToastify.css';
import './Footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const nameInputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`🎯 Submitting email ${email}`);
    setEmail('');
  };

  const sendOnChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    nameInputRef.current.focus();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container className='footer__container' fluid>
        <Row>
          {/* Logo */}
          <Col md={2} lg={2} xl={2} className='footer__section-logo'>
            <img src={fullLogo} alt='' />
          </Col>
          {/* Navigations */}
          <Col xs={3} sm={3} md={2} lg={2} xl={2} className='footer__nav p-0'>
            <div className='footer__nav--content'>
              <h1>Navigation</h1>
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
          </Col>
          {/* NewsLetter */}
          <Col
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            className='footer__newsletter p-0'
          >
            <div className='footer__newsletter--content'>
              <h1>Newsletter</h1>
              <p>
                Subscribe for free and keep in touch with our lastest content
              </p>
              <>
                <form onSubmit={handleSubmit}>
                  <InputText
                    value={email}
                    onChange={sendOnChange}
                    label='Email'
                    ref={nameInputRef}
                  />
                  <button
                    type='submit'
                    value='Submit'
                    className='footer__newsletter--button'
                  >
                    <IoMdSend
                      name='Go!'
                      className='sendButton'
                      // style={iconSend}
                    />
                  </button>
                  <ToastContainer position='bottom-right' />
                </form>
              </>
            </div>
          </Col>
          {/* SocialMedia */}
          <Col
            xs={4}
            sm={4}
            md={3}
            lg={3}
            xl={3}
            className='footer__social p-0'
          >
            <div className='footer__social--content'>
              <h1>Let's Talk</h1>
              <ul>
                <li>
                  <a
                    href='https://wa.link/702wra'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='footer__social--content--items'>
                      <FaWhatsapp style={iconStyle} />
                      <span>+54 1165986136</span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link to='/contact'>
                    <div className='footer__social--content--items'>
                      <FaEnvelopeOpenText style={iconStyle} />
                      <span>dyv@gmail.com</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <a
                    href='https://goo.gl/maps/6Sxkp7BUq1Rsb9Go6'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='footer__social--content--items'>
                      <FaMapMarkerAlt style={iconStyle} />
                      <span>GBA, Pilar, Arg</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* Quote */}
      </Container>
      <Row>
        <Col xs='12'>
          <div className='footer__quote'>
            <small>
              This Page was made with <FaHandHoldingHeart style={{fill: "#cfad97"}}/> by Diseño<b>&</b>
              Vanguardia
            </small>
          </div>
        </Col>
      </Row>
    </>
  );
};

const iconStyle = {
  fill: '#b3b3b5',
};

export default Footer;
