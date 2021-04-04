import React from 'react';
// import { a } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import { PageContainer } from '../../components/Container/PageContainer';
import { Hero } from '../../components';

import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
} from 'react-icons/ti';
import privateCollectionLogo from './assets/logo.jpg';
import C_003 from './assets/C_003.jpg';
import './Allies.scss';

const Allies = () => {
  return (
    <PageContainer>
      <Hero displayOnPage='allies' />
      <Container className=' mt-5'>
        <Row>
          {/* LOGO + TEXT */}
          <Col xs={3}>
            <Row>
              <Col className='py-5'>
                <Image src={privateCollectionLogo} className='allies__image' />
              </Col>
            </Row>
            <Row>
              <Col className=' text-dark py-4 text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, neque? Inventore voluptates temporibus quam esse?
                Adipisci doloribus ipsam quo iure vel quisquam, minus dicta nam
                assumenda reiciendis repudiandae sunt minima.
              </Col>
            </Row>
          </Col>
          {/* Carrousel */}
          <Col xs={9}>
            <Carousel fade>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='First slide' />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='Second slide' />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='Third slide' />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* social netword */}
        <Row>
          <Col className='py-5 allies__socialMedia'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialFacebook />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <TiSocialTwitter />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <TiSocialInstagram />
            </a>
            <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
              <TiSocialPinterest />
            </a>
          </Col>
        </Row>
      </Container>
      <Container className=' mt-5'>
        <Row>

          {/* Carrousel */}
          <Col xs={9}>
            <Carousel fade>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='First slide' />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='Second slide' />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='Third slide' />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
                    {/* LOGO + TEXT */}
                    <Col xs={3}>
            <Row>
              <Col className='py-5'>
                <Image src={privateCollectionLogo} className='allies__image' />
              </Col>
            </Row>
            <Row>
              <Col className=' text-dark py-4 text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, neque? Inventore voluptates temporibus quam esse?
                Adipisci doloribus ipsam quo iure vel quisquam, minus dicta nam
                assumenda reiciendis repudiandae sunt minima.
              </Col>
            </Row>
          </Col>
        </Row>

        {/* social netword */}
        <Row>
          <Col className='py-5 allies__socialMedia'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialFacebook />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <TiSocialTwitter />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <TiSocialInstagram />
            </a>
            <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
              <TiSocialPinterest />
            </a>
          </Col>
        </Row>
      </Container>
      <Container className=' mt-5'>
        <Row>
          {/* LOGO + TEXT */}
          <Col xs={3}>
            <Row>
              <Col className='py-5'>
                <Image src={privateCollectionLogo} className='allies__image' />
              </Col>
            </Row>
            <Row>
              <Col className=' text-dark py-4 text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, neque? Inventore voluptates temporibus quam esse?
                Adipisci doloribus ipsam quo iure vel quisquam, minus dicta nam
                assumenda reiciendis repudiandae sunt minima.
              </Col>
            </Row>
          </Col>
          {/* Carrousel */}
          <Col xs={9}>
            <Carousel fade>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='First slide' />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='Second slide' />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={C_003} alt='Third slide' />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* social netword */}
        <Row>
          <Col className='py-5 allies__socialMedia'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialFacebook />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <TiSocialTwitter />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <TiSocialInstagram />
            </a>
            <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
              <TiSocialPinterest />
            </a>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default Allies;
