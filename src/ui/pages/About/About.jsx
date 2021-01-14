// import React from 'react';

import { Language } from '../../../data/data';
import { useSelector } from 'react-redux';
import Banner from './Banner';
import Bio from './Bio';
import Description from './Description';
import { PageContainer } from '../../components/Container';
import { Hero } from '../../components/Hero';
import AOS from 'aos';
import './About.scss';

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
          <Banner />
          <Description />
        </>
      </PageContainer>
    </>
  );
};

export default About;
