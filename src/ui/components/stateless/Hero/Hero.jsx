// import React, { useState, useEffect } from 'react';
import './Hero.scss';
import { useSelector } from 'react-redux';
import { Language } from '../../../../data';
import { useLocation } from 'react-router-dom';

const Hero = ({ displayOnPage }) => {
  const lang = useSelector((state) => state.langReducer);
  const location = useLocation();

  const pathRegex = /[^/]/gi;
  const validationPath = location.pathname.match(pathRegex);
  const path = validationPath !== null ? validationPath.join('') : 'home';

  return (
    <div className='hero__container'>
      <div className='hero__animated'>{/* <p>{Language[`${lang}`][path]?.hero_scape}</p> */}</div>
      <div className='hero__animated'>
        <p className='hero__text ml-2'>{Language[`${lang}`][displayOnPage].hero_title}</p>
      </div>
    </div>
  );
};
export default Hero;
