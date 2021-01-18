// import { useSelector } from 'react-redux';
import { PageContainer } from '../../components/Container/PageContainer';
import Carousel from './Carousel';
// import { Language } from '../../../data/data';
import Hero from '../../components/Hero/Hero';
import Skils from './Skils';
import './Services.scss';

const Services = () => {
  // const lang = useSelector((state) => state.langReducer);
  return (
    <PageContainer>
      <Hero />
      <>
        <Carousel />
        <Skils />
      </>
    </PageContainer>
  );
};

export default Services;
