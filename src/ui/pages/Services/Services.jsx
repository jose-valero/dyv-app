import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import { PageContainer } from '../../components/Container/PageContainer';
import Skils from './Skils';
import CarouselPage from './CarouselPage';
import { Hero, NextView, Description } from '../../components';
import './Services.scss';

const Services = () => {
  const lang = useSelector((state) => state.langReducer);
  const nextPageText = Language[`${lang}`].services.nextPage;
  // const nextPageText = Language[`${lang}`].services.nextPage;

  return (
    <PageContainer>
      <Hero displayOnPage='services' />
      <Description title='Servicios de calidad' />
      <CarouselPage />
      {/* <Description
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum impedit quisquam vel accusantium ducimus, necessitatibus nam aliquam atque esse repellendus blanditiis quos totam omnis quo enim. Doloribus, alias perferendis?'
        title='asd'
      /> */}
      <Skils />
      <NextView nextTo={nextPageText} goTo={'/portafolio'} />
    </PageContainer>
  );
};

export default Services;
