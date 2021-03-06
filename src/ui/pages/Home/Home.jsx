import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { Language } from '../../../data/data';
import AOS from 'aos';
import homeImg from '../../../assets/images/1.jpg';
import Logo from '../../../assets/images/LogoLight.png';
import './Home.scss';
import 'aos/dist/aos.css';

const Home = () => {
  const lang = useSelector((state) => state.langReducer);
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
            <p data-aos='fade-left'>{Language[`${lang}`].home.brandText}</p>
            <Button name='Conocenos' route='/about' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
