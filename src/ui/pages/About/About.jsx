import React from 'react';
import { connect } from 'react-redux';
import { RiComputerLine } from 'react-icons/ri';
import { MdPalette } from 'react-icons/md';
import { GoTools } from 'react-icons/go';
import AOS from 'aos';
import testImg from './assets/yusi.jpg';

import './About.scss';

const About = ({ langReducer }) => {
  AOS.init();

  if (langReducer === 'ES') {
    return (
      <>
        <div className='about__container'>
          <div className='about__hero'>
            <h1>Conocenos un poco mas...</h1>
          </div>

          <div className='about__bio-content'>
            <div className='about__left-section'>
              <div className='about__left-section--content'>
                <h1>long story short</h1>
                <p data-aos='fade-right'>
                  La aventura comienza! Viviendo el presente y con mira hacia el
                  futuro, <b>DISEÑO & VANGUARDIA</b>, nace como resultado de la
                  pasión por el diseño y el arte en el 2015. Yusmary Villarroel,
                  su fundadora, inicia sus estudios de arquitectura en el 2006,
                  y desde el 2010 inicia su viaje por el mundo del diseño de
                  interiores. Nuestro principal OBJETIVO es ofrecer mejor
                  calidad de vida. Desarrollar proyectos que se conviertan en
                  realidad. Hacer que lo ordinario sea extraordinario. Para
                  nosotros es muy importante que la función vaya de la mano con
                  la estética, que cada espacio tenga personalidad y cuente una
                  historia, el cual se adapte a sus necesidades y al día- día.
                  EN <b>DISEÑO & VANGUARDIA</b> CREAMOS SU ESPACIO DE ENSUEÑO!.
                </p>
              </div>
            </div>

            <div className='about__right-section'>
              <div className='about__right-section-content'>
                <img src={testImg} alt='' data-aos='fade-left' className='' />
              </div>
            </div>
          </div>

          <div className='about__banner-container'>
            <>
              <div className='about__banner-card-detail'>
                <RiComputerLine style={iconStyle} />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet corporis totam assumenda vitae
                </p>
              </div>
              <div className='about__banner-card-detail'>
                <MdPalette style={iconStyle} />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet corporis totam assumenda vitae
                </p>
              </div>
              <div className='about__banner-card-detail'>
                <GoTools style={iconStyle} />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet corporis totam assumenda vitae
                </p>
              </div>
            </>
          </div>
          <div className='about__section-bottom'>
            <div className='about__section-bottom--content'>
              <span>otro contenido aqui</span>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='about__container'>
          <div className='about__hero'>
            <h1>Conocenos un poco mas...</h1>
          </div>
          <div className='about__content'>
            <p>
              The adventure begins! Living the present and looking towards the
              future, <b>DESIGN & VANGUARDIA</b>, was born as a result of the
              passion for design and art in 2015. Yusmary Villarroel, its
              founder began his architectural studies in 2006, and since 2010
              begins his journey through the world of interior design. Our The
              main OBJECTIVE is to offer a better quality of life. To develop
              projects that become reality. Making the ordinary is
              extraordinary. For us it is very important that the function go
              hand in hand with aesthetics, that each space has personality and
              tell a story, which suits your needs and up-to-the-minute. AT
              <b> DISEÑO & VANGUARDIA</b> WE CREATE YOUR DREAM SPACE!
            </p>
            <img src={testImg} alt='' />
          </div>
        </div>
      </>
    );
  }
};

const iconStyle = {
  width: '200px',
  height: 'auto',
  margin: '1rem',
  fill: '  #b3b3b5',
};

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(About);
