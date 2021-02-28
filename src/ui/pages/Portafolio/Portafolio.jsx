import React from 'react';
import { PageContainer } from '../../components/Container/PageContainer';
import Hero from '../../components/Hero/Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MAP from './assets/modern-world-map-background/7510.jpg';
import C_006 from './assets/C_006.jpg';
import './Portafolio.scss';
import Description from "../../components/BannerDescription"
const Portafolio = () => {
  return (
    <PageContainer>
      <Hero displayOnPage='portafolio' />
      <Container>
        <Description title="International Scope" text="International Scope"/>
        <Row className="portalfolio__map">
          <Image src={MAP} thumbnail />
        </Row>
        <Row className="portafolio__card">
          <Col xs='4' className="portafolio__card--content">
            <Card className="portafolio__card--content---cards">
              <Card.Img variant='top' src={C_006} />
              <Card.Body className="mx-1 px-0">
                <Card.Text className='portafolio__card--text'>
                  LAS BAHAMAS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col xs='4' className="portafolio__card--content">
            <Card className="portafolio__card--content---cards">
              <Card.Img variant='top' src={C_006} />
              <Card.Body className="mx-1 px-0">
                <Card.Text className='portafolio__card--text'>
                  VENEZUELA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col xs='4' className="portafolio__card--content">
            <Card className="portafolio__card--content---cards">
              <Card.Img variant='top' src={C_006} />
              <Card.Body className="mx-1 px-0">
                <Card.Text className='portafolio__card--text'>
                  PUERTO RICO
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col xs='4' className="portafolio__card--content">
            <Card className="portafolio__card--content---cards">
              <Card.Img variant='top' src={C_006} />
              <Card.Body className="mx-1 px-0">
                <Card.Text className='portafolio__card--text'>
                  MIAMI, USA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col xs='4' className="portafolio__card--content">
            <Card className="portafolio__card--content---cards">
              <Card.Img variant='top' src={C_006} />
              <Card.Body className="mx-1 px-0">
                <Card.Text className='portafolio__card--text'>
                  NEW YORK, USA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col xs='4' className="portafolio__card--content">
            <Card className="portafolio__card--content---cards">
              <Card.Img variant='top' src={C_006} />
              <Card.Body className="mx-1 px-0">
              <Card.Text className='portafolio__card--text'>
                  MIAMI, USA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};
export default Portafolio;
