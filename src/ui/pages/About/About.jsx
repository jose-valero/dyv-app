// import React from 'react';
import { connect } from 'react-redux';
import { Language } from '../../../data/data';
import AOS from 'aos';
import Banner from './Banner';
import Bio from './Bio';
import Timeline from './Timeline';
import './About.scss';
import TimeTrap from './TimeTrap';

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
          <Timeline />
          {/* <TimeTrap /> */}
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
