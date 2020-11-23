import React from 'react';
import '../../assets/styles/components/general/Footer.scss';
import fullLogo from '../../assets/statics/images/LogoDark.png';
const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__section-logo'>
        <img src={fullLogo} alt='' />
      </div>
      <div className='footer__section-content'>
        <div className='footer__section-content--navigation'>
          <div>Navigations links</div>
          <div>Navigations links</div>
          <div>Navigations links</div>
          <div>Navigations links</div>
        </div>
        <div className='footer__section-content--newsletter'>
          <div>news</div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
