import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import { Hero, NextView, Description, CarouselView, PageContainer } from '../../components/stateless';
import Skils from './Skils';
import './Services.scss';

const Services = () => {
  const lang = useSelector((state) => state.langReducer);
  const nextPageText = Language[`${lang}`].services.nextPage;

  const dataDetail = Language[`${lang}`].services.carousel;

  const { id, image, description } = dataDetail;

  return (
    <PageContainer>
      <Hero displayOnPage='services' />
      <Description title='Servicios de calidad' />
      <CarouselView id={id} image={image} description={description} data={dataDetail} />
      <Skils />
      <NextView nextTo={nextPageText} goTo={'/portafolio'} />
    </PageContainer>
  );
};

export default Services;
