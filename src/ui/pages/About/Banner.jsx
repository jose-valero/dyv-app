import { BannerContainer } from './Styles';
import { connect } from 'react-redux';
import { Language } from '../../../data/data';
import img_1 from './assets/2.jpg';

const Banner = ({ langReducer }) => {
  return (
    <BannerContainer>
      <div className='dyv__col'>
        <div className='hovereffect'>
          <img src={img_1} alt='..' className='img-responsive' />
          <div className='overlay'>
            <h2>{Language[`${langReducer}`].about.banner_tech}</h2>
          </div>
        </div>
      </div>
      <div
        className='about__banner-card-detail dyv__col'
        id='about__banner--item_2'
      >
        <small>{Language[`${langReducer}`].about.banner_art}</small>
      </div>
      <div
        className='about__banner-card-detail dyv__col'
        style={{ marginRight: '10%' }}
        id='about__banner--item_3'
      >
        <small>{Language[`${langReducer}`].about.banner_tools}</small>
      </div>
    </BannerContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(Banner);
