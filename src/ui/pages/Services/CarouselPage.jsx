import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import Carousel from 'react-bootstrap/Carousel';
import C_007 from './assets/C_007.jpg';
import C_008 from './assets/C_008.jpg';
import C_009 from './assets/C_009.jpg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Carousel.scss';

const CarouselPage = () => {
  const lang = useSelector((state) => state.langReducer);
  const captionTitle_1 = Language[`${lang}`].services.carousel_card_title_1;
  const captionDesc_1 =
    Language[`${lang}`].services.carousel_card_description_1;
  const captionTitle_2 = Language[`${lang}`].services.carousel_card_title_2;
  const captionDesc_2 =
    Language[`${lang}`].services.carousel_card_description_2;
  const captionTitle_3 = Language[`${lang}`].services.carousel_card_title_3;
  const captionDesc_3 =
    Language[`${lang}`].services.carousel_card_description_3;
  return (
    <Container className='my-5 carousel__container'>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img className='carousel__image ' src={C_007} alt='First slide' />
              <Carousel.Caption>
                {/* <h3>{captionTitle_1}</h3> */}
                <p>{captionDesc_1}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel__image ' src={C_008} alt='Third slide' />

              <Carousel.Caption>
                {/* <h3>{captionTitle_2}</h3> */}
                <p>{captionDesc_2}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='carousel__image ' src={C_009} alt='Third slide' />

              <Carousel.Caption>
                {/* <h3>{captionTitle_3}</h3> */}
                <p>{captionDesc_3}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselPage;
