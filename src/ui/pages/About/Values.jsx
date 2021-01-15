import { useSelector } from 'react-redux';
import { Language } from '../../../data/data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import kitchen from './assets/kitchen.jpg';
import living from './assets/living.jpg';
import rest from './assets/rest.jpg';
import Description from './Description';

const Values = () => {
  const lang = useSelector((state) => state.langReducer);
  return (
    <Container className='about__mission-container'>
      <Row className='about__mission-row'>
        <Col className='about__mission-row-images'>
          <Image src={kitchen} className='about__mission-row--images--items' />
        </Col>
        <Col className='about__mission-row-images'>
          <Image src={living} className='about__mission-row--images--items' />
        </Col>
        <Col className='about__mission-row-images'>
          <Image src={rest} className='about__mission-row--images--items' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Description
            title={Language[`${lang}`].about.banner_valuesTitle}
            text={Language[`${lang}`].about.banner_valuesText}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Values;
