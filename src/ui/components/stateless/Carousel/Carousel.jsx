import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Carousel.scss';
const CarouselView = ({ data }) => {
  return (
    <Container className='mb-3 carousel__container'>
      <Row>
        <Col>
          <Carousel>
            {data.map((value) => (
              <Carousel.Item key={value.id}>
                <img className='carousel__image' src={value.image} alt={value.description} />
                <Carousel.Caption>{<p className='carousel__caption'>{value.description}</p>}</Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
export default CarouselView;
