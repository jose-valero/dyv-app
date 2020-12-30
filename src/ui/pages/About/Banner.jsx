import { RiComputerLine } from 'react-icons/ri';
import { MdPalette } from 'react-icons/md';
import { GoTools } from 'react-icons/go';
import { BannerContainer, iconStyle } from './Styles';
import { connect } from 'react-redux';
import { Language } from '../../../data/data';

const Banner = ({ langReducer }) => {
  return (
    <BannerContainer>
      <div
        className='about__banner-card-detail dyv__col'
        style={{ marginLeft: '9%' }}
      >
        <RiComputerLine style={iconStyle} />
        <p>{Language[`${langReducer}`].about.banner_tech}</p>
      </div>
      <div className='about__banner-card-detail dyv__col'>
        <MdPalette style={iconStyle} />
        <p>{Language[`${langReducer}`].about.banner_art}</p>
      </div>
      <div
        className='about__banner-card-detail dyv__col'
        style={{ marginRight: '9%' }}
      >
        <GoTools style={iconStyle} />
        <p>{Language[`${langReducer}`].about.banner_tools}</p>
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
