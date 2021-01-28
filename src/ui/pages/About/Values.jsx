import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import kitchen from './assets/kitchen.jpg';
import living from './assets/living.jpg';
import rest from './assets/rest.jpg';

const Values = () => {
  return (
    <Container className='about__mission-container'>
      <Row className='about__mission-row'>
        <Col
          xs='12'
          sm='12'
          md='4'
          lg='4'
          xl='4'
          className='about__mission-row-images '
        >
          <div className='about__mission--hovereffect'>
            <Image
              src={kitchen}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Kitchen - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>Text</h2>
            </div>
          </div>
        </Col>
        <Col
          xs='12'
          sm='12'
          md='4'
          lg='4'
          xl='4'
          className='about__mission-row--images'
        >
          <div className='about__mission--hovereffect'>
            <Image
              src={living}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Living - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>Text</h2>
            </div>
          </div>
        </Col>
        <Col
          xs='12'
          sm='12'
          md='4'
          lg='4'
          xl='4'
          className='about__mission-row--images '
        >
          <div className='about__mission--hovereffect'>
            <Image
              src={rest}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Rest - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>Text</h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Values;
