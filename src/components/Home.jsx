import React from 'react';
import '../assets/styles/components/Home.scss';
import homeImg from '../assets/statics/images/1.jpg';
import Logo from '../assets/statics/images/LogoLight.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from './Button';
import { connect } from 'react-redux';
// import { lanSelect } from '../actions/index';

const Home = (props) => {
  AOS.init();

  const langReducer = props.langReducer;

  if (langReducer === 'ES') {
    return (
      <div className='home__container'>
        <section className='home__left-section'>
          <div className='home__left-content'>
            <div className='home__left-content--aside'>
              <img
                src={homeImg}
                alt=''
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-delay='10'
                data-aos-offset='0'
              />
            </div>
          </div>
        </section>

        <section className='home__right-section'>
          <div className='home__right-content'>
            <div className='home__right-content--aside'>
              <img
                src={Logo}
                alt=''
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-delay='10'
                data-aos-offset='0'
              />
              <p data-aos='fade-left'>
                Conoce mas acerca de nuestra empeza, que es lo mejor que podemos
                hacer para ti y aqui continuamos con un texto sea claro, corto y
                precizo que llame a la accion de dar click
              </p>
              <Button name='Conocenos' route='#' />
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div className='home__container'>
        <section className='home__left-section'>
          <div className='home__left-content'>
            <div className='home__left-content--aside'>
              <img
                src={homeImg}
                alt=''
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-delay='10'
                data-aos-offset='0'
              />
            </div>
          </div>
        </section>

        <section className='home__right-section'>
          <div className='home__right-content'>
            <div className='home__right-content--aside'>
              <img
                src={Logo}
                alt=''
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-delay='10'
                data-aos-offset='0'
              />
              <p data-aos='fade-left'>
                Learn more about our startup, which is the best we can for you
                and here we continue with a text that is clear, short and I need
                to call the action to click
              </p>
              <Button name='About Us' route='#' />
            </div>
          </div>
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(Home);
