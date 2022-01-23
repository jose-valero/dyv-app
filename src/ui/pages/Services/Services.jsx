import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import { PageContainer } from '../../components/stateless/Container/PageContainer';
import Skils from './Skils';
import './Services.scss';

const Hero = lazy(() => import('../../components/stateless/Hero/Hero'));
const SEO = lazy(() => import('../../components/utils/SEO/SEO'));
const NextView = lazy(() => import('../../components/stateless/NextView/NextView'));
const Spinnator = lazy(() => import('../../components/stateless/Spinner/Spinner'));
const CarouselView = lazy(() => import('../../components/stateless/Carousel/Carousel'));
const Description = lazy(() => import('../../components/stateless/BannerDescription/Description'));
const Services = () => {
  const lang = useSelector((state) => state.langReducer);

  const SERVICES_DATA = Language[`${lang}`].services;
  const { next_page, carousel, skills, seo } = SERVICES_DATA;

  return (
    <PageContainer>
      <Suspense fallback={<Spinnator />}>
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
      </Suspense>
    </PageContainer>
  );
};

export default Services;
