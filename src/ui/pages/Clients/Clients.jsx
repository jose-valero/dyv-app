import React from 'react';
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { PageContainer } from '../../components/Container/PageContainer';
import Hero from '../../components/Hero';
import './Clients.scss';



const Clients = () => {
  return (
<PageContainer>
  <Hero displayOnPage='allies'/>
  <Container>
    <Row>
      <Col className="bg-primary py-5 ">Primera Seccion Descriptiva de como trabajamos con nuestros clientes</Col>
    </Row>
    <Row>
      <Col className="bg-dark py-5 text-light">Segunda Seccion desarrollando a los clientes a detalles</Col>
    </Row>
    <Row>
      <Col className="bg-info py-5 " >Tercera Seccion Mostrando a profundidad como somos un buen equipo y como nos respaldamos unos con otros</Col>
    </Row>
  </Container>
</PageContainer>
  );
};

export default Clients;
