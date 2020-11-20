import React from 'react';
import LogoImg from '../../assets/statics/images/LogoDark.png';
import '../../assets/styles/Logo.scss';
import '../../assets/styles/Lang.scss';

const Logo = () => {
  return (
    <>
      <a href='/'>
        <img className='logo__position' src={LogoImg} alt='' />
      </a>
    </>
  );
};

export default Logo;