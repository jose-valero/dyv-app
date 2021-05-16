import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ValuesCard = () => {
  const lang = useSelector((state) => state.langReducer);

  const cardsValues = Language[`${lang}`].about.banner_missionCards;
  console.log('banner_missionCardText', Language[`${lang}`].about.banner_missionCards);

  return (
    <Container className='about__mission-container'>
      <Row className='about__mission-row'>
        {Object.values(cardsValues).map((value) => (
          <Col key={value.id} xs='12' sm='12' md='4' lg='4' xl='4' className='about__mission-row-images '>
            <div className='about__mission--hovereffect'>
              <Image
                src={value.image}
                className='about__mission-row--images--items'
                alt='Diseño y Vanguardia - Modern Kitchen - Italian Design - Interior - Design'
              />
              <div className='about__mission--overlay'>
                <h2>{value.text}</h2>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ValuesCard;
