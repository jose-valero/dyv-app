import React from 'react';
import { connect } from 'react-redux';
import testImg from '../assets/statics/images/1.jpg';
import AOS from 'aos';
import '../assets/styles/components/About.scss';

const About = (props) => {
  AOS.init();

  const langReducer = props.langReducer;

  if (langReducer === 'ES') {
    return (
      <>
        <div className='about__container'>
          <div className='about__hero'>
            <h1>Conocenos un poco mas...</h1>
          </div>
          <div className='about__content'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis et numquam reprehenderit eaque? Dolor assumenda autem
              deleniti dolore molestias expedita suscipit impedit odit id a
              possimus deserunt repellendus, veritatis eum!
            </p>
            <img src={testImg} alt='' />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='about__container'>English</div>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(About);
