import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import AOS from 'aos';
import './Home.scss';
import 'aos/dist/aos.css';

const Button = lazy(() => import('../../components/stateless/Button/Button'));
const Spinnator = lazy(() =>
  import('../../components/stateless/Spinner/Spinner')
);
const SEO = lazy(() => import('../../components/utils/SEO/SEO'));

const Home = () => {
  AOS.init();
  const lang = useSelector((state) => state.langReducer);
  const HOME_DATA = Language[`${lang}`].home;
  const { seo, images, brand_text } = HOME_DATA;

  return (
    <div className='home__container'>
      <Suspense fallback={<Spinnator />}>
        <SEO
          title={seo.title}
          description={seo.description}
          image={seo.image}
          image_alt={seo.image_alt}
          keywords={seo.keywords}
        />
        <section className='home__left-section'>
          <div className='home__left-content'>
            <div className='home__left-content--aside'>
              <img
                src={images.background}
                alt={seo.image_alt}
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
                src={images.light_logo}
                alt={seo.image_alt}
                data-aos='fade-zoom-in'
                data-aos-easing='ease-in-back'
                data-aos-delay='10'
                data-aos-offset='0'
              />
              <p
                data-aos='fade-left'
                className='home__right-content--aside---title'
              >
                {brand_text}
              </p>
              <Button name='Conocenos' route='/about' />
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
