import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { PageContainer } from '../../components/Container/PageContainer';
import Hero from '../../components/Hero';
import privateCollectionLogo from "./assets/logo.jpg"
import './Clients.scss';

const Clients = () => {
  return (
    <PageContainer>
      <Hero displayOnPage='allies' />
      <Container>
        <h1>MIS ALIADOS; LOS AMO!!</h1>
        <Row>
          <Col className='bg-primary py-5 '><Image src={privateCollectionLogo}/></Col>
        </Row>
        <Row>
          <Col className='bg-dark py-5 text-light'>CARUSEL</Col>
        </Row>
        <Row>
          <Col className='bg-info py-5 '>RRSS</Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default Clients;
