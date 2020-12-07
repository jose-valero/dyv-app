import React from 'react';
import '../assets/styles/components/Home.scss';
import homeImg from '../assets/statics/images/1.jpg';
import Logo from '../assets/statics/images/LogoLight.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from './Button';

const Home = () => {
  AOS.init();
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              magni quas, esse natus ad sed explicabo vel impedit quibusdam
            </p>
            <Button name='Conocenos' route='#' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
