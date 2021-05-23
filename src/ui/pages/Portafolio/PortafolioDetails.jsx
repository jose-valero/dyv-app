import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import { Language } from '../../../data';
import { PageContainer } from '../../components/stateless/Container/PageContainer';
// import { SEO } from '../../components/utils';

const SEO = lazy(() => import('../../components/utils/SEO/SEO'));
const Hero = lazy(() => import('../../components/stateless/Hero/Hero'));

const PortafolioDetails = ({ id, match }) => {
  const lang = useSelector((state) => state.langReducer);
  const project_id = match.params.id;
  const PORTAFOLIO_DATA = Language[lang].portafolio;
  const { portafolio_detail, seo } = PORTAFOLIO_DATA;
  const PORTAFOLIO_DETAIL_DATA = portafolio_detail[project_id];
  const { title, detail, img, description, location, year, donwload, keyword_1, keyword_2, title_detail } =
    PORTAFOLIO_DETAIL_DATA;

  return (
    <PageContainer>
      <Suspense fallback={<span>loading...</span>}>
        <Hero displayOnPage='portafolio' />
        <SEO
          title={seo.title}
          description={seo.description}
          image={seo.image}
          image_alt={seo.image_alt}
          keywords={seo.keywords}
        />
        <Container className='portafolioDetail__container' id={id}>
          <h1 className='text-center'>{title}</h1>
          <h1 className='text-center'>{location}</h1>
          <Row className='portafolioDetail__topsection'>
            <Col className='portafolioDetail__topsection-title'>
              {title_detail}
              <ul>
                {Object.values(detail).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </Col>
            <Col className='portafolioDetail__topsection-images'>
              <Image src={img} fluid />
            </Col>
          </Row>
          <Row className='portafolioDetail__botsection'>
            <Col lg={12} className='portafolioDetail__botsection-desc'>
              {description}
            </Col>
            <Col lg={12} className='portafolioDetail__botsection-utils'>
              {/* // eslint-disable-next-line */}
              <a href='#' className='px-1 mx-1'>
                {donwload}
              </a>
              <Badge variant='primary' className='px-1 mx-1'>
                {year}
              </Badge>
              <Badge variant='primary' className='px-1 mx-1'>
                {keyword_1}
              </Badge>
              <Badge variant='primary' className='px-1 mx-1'>
                {keyword_2}
              </Badge>
            </Col>
          </Row>
        </Container>
      </Suspense>
    </PageContainer>
  );
};

export default PortafolioDetails;
