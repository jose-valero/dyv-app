// import React from 'react';
import { connect } from 'react-redux';
import { Language } from '../../../data/data';
import AOS from 'aos';
import Banner from './Banner';
import Bio from './Bio';
import Skills from './Skills';
import './About.scss';

const About = ({ langReducer }) => {
  AOS.init();

  return (
    <>
      <div className='about__container'>
        <div className='about__hero'>
          <h1>{Language[`${langReducer}`].about.hero_title}</h1>
        </div>
        <>
          <Bio />
          <Banner />
          <Skills />
        </>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(About);
