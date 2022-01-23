import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Language } from '../../../data/index';
import { PageContainer } from '../../components/stateless/Container/PageContainer';
import PortafolioProjects from './PortafolioProjects';
import MAP from './assets/bg-portafolio-2.png';
import './Portafolio.scss';
const SEO = lazy(() => import('../../components/utils/SEO/SEO'));
const Spinnator = lazy(() => import('../../components/stateless/Spinner/Spinner'));
const Description = lazy(() => import('../../components/stateless/BannerDescription/Description'));

const Portafolio = () => {
  const lang = useSelector((state) => state.langReducer);
  const PORTAFOLIO_DATA = Language[lang].portafolio;
  const { portafolio_detail, seo } = PORTAFOLIO_DATA;
  console.log('🚀 ~ portafolio_detail', portafolio_detail);

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
        <Container className='portfolio__page'>
          <Description
            title={Language[`${lang}`].portafolio.descriptionHeadline}
            text={Language[`${lang}`].portafolio.descriptionSubhead}
          />
          <Image src={MAP} fluid />
          <Row className='portafolio__card pb-4'>
            {Object.values(portafolio_detail).map((value) => {
              console.log('🚀 ~ value', value);
              return <PortafolioProjects key={value.id} data={value} />;
            })}
          </Row>
        </Container>
      </Suspense>
    </PageContainer>
  );
};

export default Portafolio;
