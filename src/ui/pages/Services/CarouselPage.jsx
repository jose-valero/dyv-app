import Carousel from 'react-bootstrap/Carousel';
import C_007 from './assets/C_007.jpg';
import C_008 from './assets/C_008.jpg';
import C_009 from './assets/C_009.jpg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Carousel.scss';

const CarouselPage = () => {
  return (
    <Container className='my-5'>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className='carousel__image '
                src={C_007}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='carousel__image '
                src={C_008}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='carousel__image '
                src={C_009}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselPage;
