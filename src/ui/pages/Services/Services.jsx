import { connect } from 'react-redux';
import { PageContainer } from '../../components/Container';
import Carousel from './Carousel';
import { Language } from '../../../data/data';
import { Hero } from '../../components/Hero';
import Skils from './Skils';
import './Services.scss';

const Services = ({ langReducer }) => {
  return (
    <PageContainer>
      <Hero>
        <h1>{Language[`${langReducer}`].services.hero_title}</h1>
      </Hero>
      <>
        <Carousel />
        <Skils />
      </>
    </PageContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};
export default connect(mapStateToProps, {})(Services);
