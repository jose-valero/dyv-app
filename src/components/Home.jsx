import React from 'react';
import '../assets/styles/Home.scss';

const Home = () => {
  return (
    <div className='home__container'>
      <section className='home__left-section'>
        <div className='home__left-content'>
          <div className='home__left-content--aside'>
            <span>Left</span>
            <span>Left</span>
            <span>Left</span>
          </div>
        </div>
      </section>

      <section className='home__right-section'>
        <div className='home__right-content'>
          <div className='home__right-content--aside'>
            <span>Right</span>
            <span>Right</span>
            <span>Right</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
