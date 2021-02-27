import ProfileImage from './assets/profile.jpeg';
import { Language } from '../../../data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const Bio = () => {
  const lang = useSelector((state) => state.langReducer);
  const bioTittle = Language[`${lang}`].about.bio_title;

  const bioText = Language[`${lang}`].about.bio_text;
  const bioTextParagraph = Language[`${lang}`].about.bio_text_paragraph;
  return (
    <Container className='about__bio-content '>
      <Row>
        <Col
          sm='12'
          md='12'
          lg='7'
          xl='7'
          className='about__bio-content--left-section '
        >
          <div className='about__bio-content--left-section--text'>
            <h1>{bioTittle}</h1>
            <p>{bioText}</p>
            <p>{bioTextParagraph}</p>
          </div>
        </Col>
        <Col
          sm='12'
          md='12'
          lg='5'
          xl='5'
          className='about__bio-content--right-section '
        >
          <div className='about__bio-content--right-section--images'>
            <img
              src={ProfileImage}
              alt='Yusmary Villaroel - Diseño y Vanguardia - Diseño de Interiores - Interior Design'
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Bio;
