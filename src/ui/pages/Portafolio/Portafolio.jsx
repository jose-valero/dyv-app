import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Language, PortafolioDetail } from '../../../data/index';
import { Description, Hero, PageContainer } from '../../components/stateless';
import MAP from './assets/bg-portafolio-2.png';
import './Portafolio.scss';
import PortafolioProjects from './PortafolioProjects';

const Portafolio = () => {
  const lang = useSelector((state) => state.langReducer);

  const dataDetail = PortafolioDetail[lang];

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
            <PortafolioProjects key={value.id} data={value} />
          ))}
        </Row>
      </Container>
    </PageContainer>
  );
};
export default Portafolio;
