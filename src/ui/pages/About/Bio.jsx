import testImg from './assets/yusi.jpg';
import { Language } from '../../../data/data';
import { connect } from 'react-redux';

const Bio = ({ langReducer }) => {
  return (
    <div className='about__bio-content'>
      <div className='dyv__row'>
        <div className='about__left-section dyv__col dyv__col-xl-6 dyv__col-lg-6 dyv__col-md-6 dyv__col-xs-12'>
          <div className='about__left-section--content'>
            <h1>{Language[`${langReducer}`].about.bio_title}</h1>
            <p>{Language[`${langReducer}`].about.bio_text}</p>
          </div>
        </div>
        <div className='about__right-section  dyv__col dyv__col-xl-6 dyv__col-lg-6 dyv__col-md-6 dyv__col-xs-12'>
          <div className='about__right-section--content'>
            <img src={testImg} alt='' data-aos='fade-left' className='' />
          </div>
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
