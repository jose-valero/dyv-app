import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Language, PortafolioDetail } from '../../../data/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Description, Hero } from '../../components';
import { PageContainer } from '../../components/Container/PageContainer';
import PortafolioDetails from './PortafolioDetails';

import MAP from './assets/bg-portafolio-2.png';
import C_006 from './assets/C_006.jpg';
import './Portafolio.scss';
import PortafolioProjects from './PortafolioProjects';

const Portafolio = () => {
  const lang = useSelector((state) => state.langReducer);

  const dataDetail = PortafolioDetail[lang];
  console.log('dataDetail', dataDetail);

  return (
    <PageContainer>
      <Hero displayOnPage='portafolio' />
      <Container className='portfolio__page'>
        <Description
          title={Language[`${lang}`].portafolio.descriptionHeadline}
          text={Language[`${lang}`].portafolio.descriptionSubhead}
        />
        <Image src={MAP} fluid />
        <Row className='portafolio__card pb-4'>
          {Object.values(dataDetail).map((value) => (
            <PortafolioProjects
              key={value.id}
              data={value}
            />
          ))}
        </Row>
      </Container>
    </PageContainer>
  );
};
export default Portafolio;
