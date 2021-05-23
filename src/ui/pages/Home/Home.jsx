import { useSelector } from 'react-redux';
import AOS from 'aos';
import { Language } from '../../../data';
import { Button } from '../../components/stateless';
import { SEO } from '../../components/utils';
import './Home.scss';
import 'aos/dist/aos.css';

const Home = () => {
  AOS.init();
  const lang = useSelector((state) => state.langReducer);
  const HOME_DATA = Language[`${lang}`].home;
  const { seo, images, brand_text } = HOME_DATA;

  return (
    <div className='home__container'>
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
              alt={images.image_alt}
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
              alt=''
              data-aos='fade-zoom-in'
              data-aos-easing='ease-in-back'
              data-aos-delay='10'
              data-aos-offset='0'
            />
            <p data-aos='fade-left' className='home__right-content--aside---title'>
              {brand_text}
            </p>
            <Button name='Conocenos' route='/about' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
