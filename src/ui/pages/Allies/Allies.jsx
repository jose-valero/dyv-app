import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Hero, PageContainer, CarouselView, NextView } from '../../components/stateless';
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram, TiSocialPinterest } from 'react-icons/ti';

import { Language, CarouselData } from '../../../data';
import { useSelector } from 'react-redux';

import './Allies.scss';
const Allies = () => {
  const lang = useSelector((state) => state.langReducer);
  const alliesData = Language[`${lang}`].allies.allies_detail;
  const NextPage = Language[`${lang}`].allies.nextPage;

  return (
    <PageContainer>
      <Hero displayOnPage='allies' />
      {Object.values(alliesData).map((value) => {
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

      <NextView nextTo={NextPage} goTo={'/contact'} />
    </PageContainer>
  );
};

export default Allies;
