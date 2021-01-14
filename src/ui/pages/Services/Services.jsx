import { useSelector } from 'react-redux';
import { PageContainer } from '../../components/Container';
import Carousel from './Carousel';
import { Language } from '../../../data/data';
import { Hero } from '../../components/Hero';
import Skils from './Skils';
import './Services.scss';

const Services = () => {
  const lang = useSelector((state) => state.langReducer);
  return (
    <PageContainer>
      <Hero>
        <h1>{Language[`${lang}`].services.hero_title}</h1>
      </Hero>
      <>
        <Carousel />
        <Skils />
      </>
    </PageContainer>
  );
};

export default Services;
