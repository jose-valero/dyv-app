import { connect } from 'react-redux';
import { Container } from '../../components/Container';
import Carousel from './Carousel';
import { Language } from '../../../data/data';
import { Hero } from '../../components/Hero';
import './Services.scss';

const Services = ({ langReducer }) => {
  return (
    <Container>
      <Hero>
        <h1>{Language[`${langReducer}`].services.hero_title}</h1>
      </Hero>
      <>
        <Carousel />
      </>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};
export default connect(mapStateToProps, {})(Services);
