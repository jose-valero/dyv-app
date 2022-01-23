import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import { Language } from '../../../data';
import { PageContainer } from '../../components/stateless/Container/PageContainer';

const SEO = lazy(() => import('../../components/utils/SEO/SEO'));
const Hero = lazy(() => import('../../components/stateless/Hero/Hero'));
const Spinnator = lazy(() => import('../../components/stateless/Spinner/Spinner'));
const CarouselView = lazy(() => import('../../components/stateless/Carousel/Carousel'));

const PortafolioDetails = ({ id, match }) => {
  const lang = useSelector((state) => state.langReducer);
  const project_id = match.params.id;
  const PORTAFOLIO_DATA = Language[lang].portafolio;
  const { portafolio_detail, seo } = PORTAFOLIO_DATA;
  const PORTAFOLIO_DETAIL_DATA = portafolio_detail[project_id];
  const PORTAFOLIO_DETAIL_CAROUSEL = PORTAFOLIO_DETAIL_DATA.carousel;

  const { title, description, location, donwload, description_title, keywords } = PORTAFOLIO_DETAIL_DATA;

  return (
    <PageContainer>
      <Suspense fallback={<Spinnator />}>
        <Hero displayOnPage='portafolio' />
        <SEO
          title={seo.title}
          description={seo.description}
          image={seo.image}
          image_alt={seo.image_alt}
          keywords={seo.keywords}
        />
        <Container className='portafolioDetail__container' id={id}>
          <p className='portafolioDetail__container-title'>{title}</p>
          <p className='portafolioDetail__container-location'>{location}</p>
          <Row className='portafolioDetail__content'>
            <Col sm={12} md={4} lg={5} className='portafolioDetail__content-description'>
              <p className='portafolioDetail__content-description--title'>{description.description_title}</p>
              <p className='portafolioDetail__content-description--text'>{description.text.paragraph_1}</p>
              <p className='portafolioDetail__content-description--text'>{description.text.paragraph_2}</p>
              <p className='portafolioDetail__content-description--text'>{description.text.paragraph_3}</p>
              <p className='portafolioDetail__content-description--text'>{description.text.paragraph_4}</p>
            </Col>
            <Col sm={12} md={8} lg={7} className='portafolioDetail__content-carousel'>
              <CarouselView data={PORTAFOLIO_DETAIL_CAROUSEL} />
              <a href='#' className='px-1 mx-1'>
                {donwload}
              </a>
              {Object.values(keywords).map((keyword) => {
                return (
                  <Badge variant='secondary' className='mx-1' key={keyword}>
                    {keyword}
                  </Badge>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Suspense>
    </PageContainer>
  );
};

export default PortafolioDetails;
