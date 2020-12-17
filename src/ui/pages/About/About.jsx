// import React from 'react';
import { connect } from 'react-redux';
import { Language } from '../../../data/data';
import AOS from 'aos';
import Banner from './Banner';
import Bio from './Bio';
import './About.scss';
import Skills from './Skills';
import { Container, Row, Col } from 'react-bootstrap';

const About = ({ langReducer }) => {
  AOS.init();

  return (
    <>
      <div className='about__container'>
        <div className='about__hero'>
          <h1>{Language[`${langReducer}`].about.hero_title}</h1>
        </div>
        <Container fluid>
          <Row>
            <Col lg={12} md={6}>
              <Bio  />
              <Banner lg={12} />
            </Col>
          </Row>
        </Container>

        <Skills />
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
