import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Skills.scss';

const Skils = ({ row_1, row_2, row_3, row_4 }) => {
  return (
    <Container className='skills__container'>
      {/* ROW 1 */}
      <Row className='skills__container--row '>
        <Col md={6} className='skills__container--row--left'>
          <Image src={row_1.image} className='skills__images' />
        </Col>
        <Col md={6} className='skills__container--row--right m-auto'>
          <div className='skills__content'>
            <h2 className='text-left'>{row_1.title}</h2>
            <p className='text-left'>{row_1.text}</p>
          </div>
        </Col>
      </Row>

      {/* ROW 2 */}
      <Row className='skills__container--row'>
        <Col lg={4} md={4} sm={12} xs={12} className='skills__container--row--left m-auto'>
          <div className='skills__content'>
            <h2 className='text-right'>{row_2.title}</h2>
            <p className='text-right'>{row_2.text}</p>
          </div>
        </Col>
        <Col lg={4} md={4} sm={5} xs={6} className='skills__container--row--right m-auto'>
          <Image src={row_2.image_1} className='skills__images' />
        </Col>
        <Col lg={4} md={4} sm={5} xs={6} className='skills__container--row--right m-auto'>
          <Image src={row_2.image_2} className='skills__images' />
        </Col>
      </Row>

      {/* ROW 3 */}
      <Row className='skills__container--row'>
        <Col md={7} className='skills__container--row--right m-auto'>
          <Image src={row_3.image} className='skills__images' />
        </Col>
        <Col md={5} className='skills__container--row--left m-auto'>
          <div className='skills__content'>
            <h2 className='text-left'>{row_3.title}</h2>
            <p className='text-left'>{row_3.sub_title}</p>
            <p className='text-left'>{row_3.text}</p>
          </div>
        </Col>
      </Row>

      {/* ROW 4 */}
      <Row className='skills__container--row'>
        <Col md={6} className='skills__container--row--left m-auto'>
          <div className='skills__content'>
            <h2 className='text-right'>{row_4.title}</h2>
            <p className='text-right'>{row_4.text}</p>
          </div>
        </Col>
        <Col md={6} className='skills__container--row--right m-auto'>
          <Image src={row_4.image} className='skills__images' />
        </Col>
      </Row>
    </Container>
  );
};

export default Skils;
