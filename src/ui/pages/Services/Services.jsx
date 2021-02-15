// import { useSelector } from 'react-redux';
import { PageContainer } from '../../components/Container/PageContainer';
import CarouselPage from './CarouselPage';
import { useSelector } from 'react-redux';
import NextView from '../../components/NextView/NextView';
import { Language } from '../../../data';
import Hero from '../../components/Hero/Hero';
import Skils from './Skils';
import Description from '../../components/BannerDescription/Description';
import './Services.scss';

const Services = () => {
  const lang = useSelector((state) => state.langReducer);
  const nextPageText = Language[`${lang}`].services.nextPage;

  return (
    <PageContainer>
      <Hero displayOnPage='services' />
      <Description
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum impedit quisquam vel accusantium ducimus, necessitatibus nam aliquam atque esse repellendus blanditiis quos totam omnis quo enim. Doloribus, alias perferendis?'
        title='title'
      />
      <CarouselPage />
      <Description
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum impedit quisquam vel accusantium ducimus, necessitatibus nam aliquam atque esse repellendus blanditiis quos totam omnis quo enim. Doloribus, alias perferendis?'
        title='title'
      />
      <Skils />
      <NextView nextTo={nextPageText} goTo={'/portafolio'} />
    </PageContainer>
  );
};

export default Services;
