import React from 'react';
import '../../assets/styles/components/general/Footer.scss';
import fullLogo from '../../assets/statics/images/LogoDark.png';
const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__section-logo'>
        <img src={fullLogo} alt='' />
      </div>
      <div className='footer__nav'>
        <div className='footer__nav--content'>holaNav</div>
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
