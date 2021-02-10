import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import Card from 'react-bootstrap/Card';
import skillImg from '../../../assets/images/2.jpg';
// import { FaAccusoft, FaBlackTie, FaCanadianMapleLeaf } from 'react-icons/fa';
// import { GiTechnoHeart, GiCyberEye, GiFountain } from 'react-icons/gi';
// import { RiHome2Line } from 'react-icons/ri';
import './Skills.scss';

const Skils = () => {
  return (
    <Container className='skills__container'>
      {/* ROW 1 */}
      <Row className='skills__container--row '>
        <Col md={6} className='skills__container--row--left'>
          <Image src={skillImg} className='skills__images' />
        </Col>
        <Col md={6} className='skills__container--row--right m-auto'>
          <p className='text-center m-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum
            impedit quisquam vel accusantium ducimus, necessitatibus nam aliquam
            atque esse repellendus blanditiis quos totam omnis quo enim.
            Doloribus, alias perferendis?
          </p>
        </Col>
      </Row>

      {/* ROW 2 */}
      <Row className='skills__container--row'>
        <Col
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className='skills__container--row--left m-auto'
        >
          <p className='text-center m-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum
            impedit quisquam vel accusantium ducimus, necessitatibus nam aliquam
            atque esse repellendus blanditiis quos totam omnis quo enim.
            Doloribus, alias perferendis?
          </p>
        </Col>
        <Col
          lg={4}
          md={4}
          sm={5}
          xs={6}
          className='skills__container--row--right m-auto'
        >
          <Image src={skillImg} className='skills__images' />
        </Col>
        <Col
          lg={4}
          md={4}
          sm={5}
          xs={6}
          className='skills__container--row--right m-auto'
        >
          <Image src={skillImg} className='skills__images' />
        </Col>
      </Row>

      {/* ROW 3 */}
      <Row className='skills__container--row'>
        <Col md={7} className='skills__container--row--right m-auto'>
          <Image src={skillImg} className='skills__images' />
        </Col>
        <Col md={5} className='skills__container--row--left m-auto'>
          <p className='text-center m-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum
            impedit quisquam vel accusantium ducimus, necessitatibus nam aliquam
            atque esse repellendus blanditiis quos totam omnis quo enim.
            Doloribus, alias perferendis?
          </p>
        </Col>
      </Row>

      {/* ROW 4 */}
      <Row className='skills__container--row'>
        <Col md={4} className='skills__container--row--left m-auto'>
          <p className='text-center m-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae cum
            impedit quisquam vel accusantium ducimus, necessitatibus nam aliquam
            atque esse repellendus blanditiis quos totam omnis quo enim.
            Doloribus, alias perferendis?
          </p>
        </Col>
        <Col md={4} className='skills__container--row--right m-auto'>
          <Image src={skillImg} className='skills__images' />
        </Col>
        <Col md={4} className='skills__container--row--right m-auto'>
          <Image src={skillImg} className='skills__images' />
        </Col>
      </Row>
    </Container>
  );
};

export default Skils;
