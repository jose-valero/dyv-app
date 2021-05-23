import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './Description.scss';

const Description = ({ title, text, sub_text, children }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='about__banner-desc-content'>
            <h2 className='about__banner-desc-content--title'>{title}</h2>
            {children}
            <p className='about__banner-desc-content--subtext'>{sub_text}</p>
            <p className='about__banner-desc-content--text'>{text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Description;
