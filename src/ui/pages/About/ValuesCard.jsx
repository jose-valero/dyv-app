import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import C_001 from './assets/C_001.jpg';
import C_002 from './assets/C_002.jpg';
import L_005 from './assets/L_005.jpg';

const ValuesCard = () => {
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
              src={C_001}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Kitchen - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>ART</h2>
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
              src={C_002}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Living - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>DESIGN</h2>
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
              src={C_002}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Rest - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>PRO</h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ValuesCard;
