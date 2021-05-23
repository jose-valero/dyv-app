import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import { Hero, NextView, Description, CarouselView, PageContainer } from '../../components/stateless';
import { SEO } from '../../components/utils';
import Skils from './Skils';
import './Services.scss';

const Services = () => {
  const lang = useSelector((state) => state.langReducer);

  const SERVICES_DATA = Language[`${lang}`].services;
  const { next_page, carousel, skills, seo } = SERVICES_DATA;

  return (
    <PageContainer>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image}
        image_alt={seo.image_alt}
        keywords={seo.keywords}
      />
      <Hero displayOnPage='services' />
      <Description title='Servicios de calidad' />
      <CarouselView data={carousel} />
      <Skils row_1={skills.row_1} row_2={skills.row_2} row_3={skills.row_3} row_4={skills.row_4} />
      <NextView nextTo={next_page} goTo={'/portafolio'} />
    </PageContainer>
  );
};

export default Services;
