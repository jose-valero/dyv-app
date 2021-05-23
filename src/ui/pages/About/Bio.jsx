// import ProfileImage from './assets/profile.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Bio = ({ profile_image, bio_text, bio_text_paragraph, seo_image_alt }) => {
  return (
    <Container className='about__bio-content '>
      <Row>
        <Col sm='12' md='12' lg='7' xl='7' className='about__bio-content--left-section '>
          <div className='about__bio-content--left-section--text'>
            <p>{bio_text}</p>
            <p>{bio_text_paragraph}</p>
          </div>
        </Col>
        <Col sm='12' md='12' lg='5' xl='5' className='about__bio-content--right-section '>
          <div className='about__bio-content--right-section--images'>
            <img src={profile_image} alt={seo_image_alt} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Bio;
