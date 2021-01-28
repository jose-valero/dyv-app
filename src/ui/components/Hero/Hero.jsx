import './Hero.scss';
import { useSelector } from 'react-redux';
import { Language } from '../../../data/data';
const Hero = ({ displayOnPage }) => {
  const lang = useSelector((state) => state.langReducer);
  return (
    <div className='hero__container'>
      <div className='hero__animated'>
        {Language[`${lang}`][displayOnPage].hero_scape}
      </div>
      <div className='hero__animated'>
        <span className='hero__text ml-2'>
          {Language[`${lang}`][displayOnPage].hero_title}
        </span>
      </div>
    </div>
  );
};

export default Hero;
