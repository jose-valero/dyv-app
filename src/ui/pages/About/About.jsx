// import React from 'react';
import { connect } from 'react-redux';
import { Language } from '../../../data/data';
import Banner from './Banner';
import Bio from './Bio';
import Description from './Description';
import { PageContainer } from '../../components/Container';
import { Hero } from '../../components/Hero';
import AOS from 'aos';
import './About.scss';

const About = ({ langReducer }) => {
  AOS.init();

  return (
    <>
      <PageContainer>
        <Hero>
          <h1>{Language[`${langReducer}`].about.hero_title}</h1>
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

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(About);
