import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import {Language} from "../../../data"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import C_001 from './assets/C_001.jpg';
import C_002 from './assets/C_002.jpg';
import L_005 from './assets/L_005.jpg';
const ValuesCard = () => {
  const lang = useSelector((state) => state.langReducer);
  const card_1 = Language[`${lang}`].about.banner_missionCardText.card_1
  const card_2 = Language[`${lang}`].about.banner_missionCardText.card_2
  const card_3 = Language[`${lang}`].about.banner_missionCardText.card_3
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
              src={L_005}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Kitchen - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>{card_1}</h2>
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
              src={C_001}
              className='about__mission-row--images--items'
              alt='Diseño y Vanguardia - Modern Living - Italian Design - Interior - Design'
            />
            <div className='about__mission--overlay'>
              <h2>{card_2}</h2>
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
              <h2>{card_3}</h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ValuesCard;
