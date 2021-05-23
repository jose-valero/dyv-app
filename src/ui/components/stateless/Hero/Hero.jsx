import './Hero.scss';
import { useSelector } from 'react-redux';
import { Language } from '../../../../data';

const Hero = ({ displayOnPage }) => {
  const lang = useSelector((state) => state.langReducer);
  return (
    <div className='hero__container'>
      <div className='hero__animated'>
        <p>{Language[`${lang}`][displayOnPage].hero_scape}</p>
      </div>
      <div className='hero__animated'>
        <p className='hero__text ml-2'>{Language[`${lang}`][displayOnPage].hero_title}</p>
      </div>
    </div>
  );
};
export default Hero;
