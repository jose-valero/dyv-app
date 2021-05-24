import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram, TiSocialPinterest } from 'react-icons/ti';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import { Language } from '../../../data';
import { PageContainer } from '../../components/stateless/Container/PageContainer';

import './Allies.scss';

const SEO = lazy(() => import('../../components/utils/SEO/SEO'));
const Hero = lazy(() => import('../../components/stateless/Hero/Hero'));
const NextView = lazy(() => import('../../components/stateless/NextView/NextView'));
const CarouselView = lazy(() => import('../../components/stateless/Carousel/Carousel'));
const Allies = () => {
  const lang = useSelector((state) => state.langReducer);
  const ALLIES_DATA = Language[`${lang}`].allies;
  const { allies_detail, next_page, seo } = ALLIES_DATA;

  return (
    <PageContainer>
      <Suspense fallback={<Spinner>Loading...</Spinner>}>
        <SEO
          title={seo.title}
          description={seo.description}
          image={seo.image}
          image_alt={seo.image_alt}
          keywords={seo.keywords}
        />
        <Hero displayOnPage='allies' />
        {Object.values(allies_detail).map((value) => {
          return (
            <Container className='allies__container my-5' key={value.id}>
              <Row>
                <Col xs={3}>
                  <Row>
                    <Col className='py-5'>
                      <Image src={value.logo} className='allies__image' alt={value.name} />
                    </Col>
                  </Row>
                  <Row>
                    <Col className=' text-dark py-4 text-center'>
                      <p>{value.description_1}</p>
                      <p>{value.description_2}</p>
                      <p>{value.description_3}</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={9}>
                  <CarouselView data={value.carousel} />
                </Col>
              </Row>

              {/* social netword */}
              <Row className='m-0 p-0'>
                <Col className='allies__socialMedia'>
                  <a href={value.social_media.fb} target='_blank' rel='noreferrer'>
                    <TiSocialFacebook />
                  </a>
                  <a href={value.social_media.tw} target='_blank' rel='noreferrer'>
                    <TiSocialTwitter />
                  </a>
                  <a href={value.social_media.ig} target='_blank' rel='noreferrer'>
                    <TiSocialInstagram />
                  </a>
                  <a href={value.social_media.pn} target='_blank' rel='noreferrer'>
                    <TiSocialPinterest />
                  </a>
                </Col>
              </Row>
            </Container>
          );
        })}

        <NextView nextTo={next_page} goTo={'/contact'} />
      </Suspense>
    </PageContainer>
  );
};

export default Allies;
