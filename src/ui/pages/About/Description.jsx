import { useSelector } from 'react-redux';
import { Language } from '../../../data/data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../../assets/images/10.jpg';

const Bio = () => {
  const lang = useSelector((state) => state.langReducer);
  return (
    <Container className='about__bio-content ' fluid>
      <Row>
        <Col sm='12' md='6' lg='6' xl='6' className='about__right-section '>
          <div className='about__right-section--content'>
            <img src={img} alt='' data-aos='fade-left' className='' />
          </div>
        </Col>
        <Col sm='12' md='6' lg='6' xl='6' className='about__left-section '>
          <div className='about__left-section--content'>
            <h1>{Language[`${lang}`].about.bio_title}</h1>
            <p>{Language[`${lang}`].about.bio_text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Bio;
