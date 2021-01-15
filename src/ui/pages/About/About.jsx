// import React from 'react';

import { Language } from '../../../data/data';
import { useSelector } from 'react-redux';
import Values from './Values';
import Mission from './Mission';

import { PageContainer } from '../../components/Container';
import { Hero } from '../../components/Hero';
import AOS from 'aos';
import './About.scss';
import Bio from './Bio';

const About = () => {
  const lang = useSelector((state) => state.langReducer);
  AOS.init();
  return (
    <>
      <PageContainer>
        <Hero>
          <h1>{Language[`${lang}`].about.hero_title}</h1>
        </Hero>
        <>
          <Bio />
          <Mission />
          <Values />
        </>
      </PageContainer>
    </>
  );
};

export default About;
