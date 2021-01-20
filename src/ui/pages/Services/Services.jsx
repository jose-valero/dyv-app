// import { useSelector } from 'react-redux';
import { PageContainer } from '../../components/Container/PageContainer';
import CarouselPage from './CarouselPage';
// import { Language } from '../../../data/data';
import Hero from '../../components/Hero/Hero';
import Skils from './Skils';
import './Services.scss';
import Description from '../../components/BannerDescription/Description';

const Services = () => {
  // const lang = useSelector((state) => state.langReducer);
  return (
    <PageContainer>
      <Hero />
      <Description text="text" title="title"/>
      <CarouselPage />
      <Description text="text" title="title"/>
      <Skils />
    </PageContainer>
  );
};

export default Services;
