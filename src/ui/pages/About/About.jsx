// import React from 'react';

import { Language } from '../../../data/data';
import { useSelector } from 'react-redux';
import Values from './Values';
import Mission from './Mission';
import { PageContainer } from '../../components/Container/PageContainer';
import Hero from '../../components/Hero/Hero';
import AOS from 'aos';
import Bio from './Bio';
import NextView from '../../components/NextView/NextView';
import './About.scss';

const About = () => {
  const lang = useSelector((state) => state.langReducer);
  const text = Language[`${lang}`].about.nextPage;
  AOS.init();
  return (
    <>
      {/* colocar todos los props aqui ___________ */}
      <PageContainer>
        <Hero />
        <>
          <Bio />
          <Mission />
          <Values />
          <NextView nextTo={text} goTo='/services' />
        </>
      </PageContainer>
    </>
  );
};

export default About;
