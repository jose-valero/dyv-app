import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaWhatsapp, FaEnvelopeOpenText } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.scss';

import fullLogo from 'assets/images/LogoLight.png';

const InputText = lazy(() =>
  import('../../components/stateless/InputText/InputText')
);
const Footer = () => {
  const successToast = () => {
    toast(`Sent successfully`, {
      className: 'footer__customToast--success',
      draggable: true,
      pauseOnHover: true,
      position: toast.POSITION.BOTTOM_RIGHT,
      closeOnClick: true,
    });
  };
  const errorToast = () => {
    toast('API ERROR', {
      className: 'footer__customToast--error',
      draggable: true,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios
      ///////////- firebase usage -//////////
      ///////////////////////////////////////
      ////- aqui sera firebase, example: -///
      //   db.collection("users").add({
      //     first: "Alan",
      //     middle: "Mathison",
      //     last: "Turing",
      //     born: 1912
      // })
      // .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      // })
      // .catch((error) => {
      //     console.error("Error adding document: ", error);
      // });
      ////////////////////////////////////////
      .get('/uasdasd')
      .then((status) => {
        if (status === 200) {
          console.log(res);
          successToast();
        }
      })
      .catch((err) => {
        if (err) {
          console.log('no', err);
          errorToast();
        }
      });
  };

  return (
    <>
      <Suspense fallback={<span>loading...</span>}>
        <Container className='footer__container' fluid>
          <Row>
            {/* Logo */}
            <Col md={2} lg={2} xl={2} className='footer__section-logo'>
              <img src={fullLogo} alt='hola logo' />
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
                    <Link to='/allies'>Aliados</Link>
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
                    <InputText label='Email' light />
                    <button
                      type='submit'
                      value='Submit'
                      className='footer__newsletter--button'
                    >
                      <IoMdSend name='Go!' className='sendButton' />
                    </button>
                    <ToastContainer
                      position='bottom-right'
                      transition={Zoom}
                      draggable={false}
                      autoClose={5000}
                      hideProgressBar={true}
                    />
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
                        <span>+54 3816592931</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <Link to='/contact'>
                      <div className='footer__social--content--items'>
                        <FaEnvelopeOpenText style={iconStyle} />
                        <span>dvanguardiavzla@gmail.com</span>
                      </div>
                    </Link>
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
              {/* <small style={{borderTop: "1px red solid"}}>
              ...
            </small> */}
            </div>
          </Col>
        </Row>
      </Suspense>
    </>
  );
};

const iconStyle = {
  fill: '#b3b3b5',
};

export default Footer;
