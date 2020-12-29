// import React from 'react';
import { connect } from 'react-redux';
import { Language } from '../../../data/data';
import AOS from 'aos';
import Banner from './Banner';
import Bio from './Bio';
import Timeline from './Timeline';
import TimeTrap from './TimeTrap';
import { Container } from '../../components/Container';
import { Hero } from '../../components/Hero';
import './About.scss';

const About = ({ langReducer }) => {
  AOS.init();

  return (
    <>
      <Container>
        <Hero>
          <h1>{Language[`${langReducer}`].about.hero_title}</h1>
        </Hero>
        <>
          <Bio />
          <Banner />
          <Timeline />
          {/* <TimeTrap /> */}
        </>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(About);
