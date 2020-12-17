import testImg from './assets/yusi.jpg';
import { Language } from '../../../data/data';
import { connect } from 'react-redux';

const Bio = ({ langReducer }) => {
  return (
    <div className='about__bio-content'>
      <div className='about__left-section'>
        <div className='about__left-section--content'>
          <h1>{Language[`${langReducer}`].about.bio_title}</h1>
          <p data-aos='fade-right'>
            {Language[`${langReducer}`].about.bio_text}
          </p>
        </div>
      </div>
      <div className='about__right-section'>
        <div className='about__right-section--content'>
          <img src={testImg} alt='' data-aos='fade-left' className='' />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(Bio);
