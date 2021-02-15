import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Language } from '../../../data';
import { useSelector } from 'react-redux';

import B_001 from './assets/B_001.jpg';
import C_004 from './assets/C_004.jpg';
import C_010 from './assets/C_010.jpg';
import D_001 from './assets/D_001.jpg';
import L_004 from './assets/L_004.jpg';

import './Skills.scss';

const Skils = () => {
  const lang = useSelector((state) => state.langReducer);
  // const nextPageText = Language[`${lang}`].services.nextPage;
  const nextPageText = Language[`${lang}`].services.nextPage;
  const skills_row1_title = Language[`${lang}`].services.skills_row1_title;
  const skills_row1_text = Language[`${lang}`].services.skills_row1_text;
  const skills_row2_title = Language[`${lang}`].services.skills_row2_title;
  const skills_row2_text = Language[`${lang}`].services.skills_row2_text;
  const skills_row3_title = Language[`${lang}`].services.skills_row3_title;
  const skills_row3_subtitle =
    Language[`${lang}`].services.skills_row3_subtitle;
  const skills_row3_text = Language[`${lang}`].services.skills_row3_text;
  const skills_row4_title = Language[`${lang}`].services.skills_row4_title;
  const skills_row4_text = Language[`${lang}`].services.skills_row4_text;

  return (
    <Container className='skills__container'>
      {/* ROW 1 */}
      <Row className='skills__container--row '>
        <Col md={6} className='skills__container--row--left'>
          <Image src={C_010} className='skills__images' />
        </Col>
        <Col md={6} className='skills__container--row--right m-auto'>
          <div style={{ display: 'block'}}>
            <h2 className="text-left">{skills_row1_title}</h2>
            <p className='text-left'>{skills_row1_text}</p>
          </div>
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
          <div style={{ display: 'block' }}>
           <h2 className='text-right'>{skills_row2_title}</h2>
           <p className='text-right'>{skills_row2_text}</p>
          </div>
        </Col>
        <Col
          lg={4}
          md={4}
          sm={5}
          xs={6}
          className='skills__container--row--right m-auto'
        >
          <Image src={B_001} className='skills__images' />
        </Col>
        <Col
          lg={4}
          md={4}
          sm={5}
          xs={6}
          className='skills__container--row--right m-auto'
        >
          <Image src={D_001} className='skills__images' />
        </Col>
      </Row>

      {/* ROW 3 */}
      <Row className='skills__container--row'>
        <Col md={7} className='skills__container--row--right m-auto'>
          <Image src={C_004} className='skills__images' />
        </Col>
        <Col md={5} className='skills__container--row--left m-auto'>
        <div style={{ display: 'block' }} >
          <h2 className='text-left'>{skills_row3_title}</h2>
          <p className='text-left'>{skills_row3_subtitle}</p>
          <p className='text-left'>{skills_row3_text}</p>
        </div>
        </Col>
      </Row>

      {/* ROW 4 */}
      <Row className='skills__container--row'>
        <Col md={4} className='skills__container--row--left m-auto'>
        <div style={{ display: 'block' }}>
          <h2 className='text-right'>{skills_row4_title}</h2>
          <p className='text-right'>{skills_row4_text}</p>
        </div>
        </Col>
        <Col md={4} className='skills__container--row--right m-auto'>
          <Image src={L_004} className='skills__images' />
        </Col>
        <Col md={4} className='skills__container--row--right m-auto'>
          <Image src={L_004} className='skills__images' />
        </Col>
      </Row>
    </Container>
  );
};

export default Skils;
