import React from 'react';
import { PageContainer } from '../../components/Container/PageContainer';
import Hero from '../../components/Hero/Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Portafolio.scss';
import MAP from './assets/MAP_001.jpg';
import C_006 from './assets/C_006.jpg';

const Portafolio = () => {
  return (
    <PageContainer>
      <Hero displayOnPage='portafolio' />
      <Container>
        <Row>
          <Image src={MAP} thumbnail />
        </Row>
        <Row>
          <Col xs='4'>
            <Card>
              <Card.Img variant='top' src={C_006} />
              <Card.Body>
                <Card.Text className='bg-dark text-light text-center'>
                  LAS BAHAMAS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='4'>
            <Card>
              <Card.Img variant='top' src={C_006} />
              <Card.Body>
                <Card.Text className='bg-dark text-light text-center'>
                  LECHERIA, VENEZUELA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='4'>
            <Card>
              <Card.Img variant='top' src={C_006} />
              <Card.Body>
                <Card.Text className='bg-dark text-light text-center'>
                  PUERTO RICO
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='4'>
            <Card>
              <Card.Img variant='top' src={C_006} />
              <Card.Body>
                <Card.Text className='bg-dark text-light text-center'>
                  MIAMI, USA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='4'>
            <Card>
              <Card.Img variant='top' src={C_006} />
              <Card.Body>
                <Card.Text className='bg-dark text-light text-center'>
                  NEW YORK, USA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='4'>
            <Card>
              <Card.Img variant='top' src={C_006} />
              <Card.Body>
                <Card.Text className='bg-dark text-light text-center'>
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
