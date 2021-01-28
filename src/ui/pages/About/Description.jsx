import testImg from './assets/yusi.jpg';
import { Language } from '../../../data/data';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Bio = ({ langReducer }) => {
  return (
    <Container className='about__bio-content ' fluid>
      <Row>
        <Col sm='12' md='6' lg='6' xl='6' className='about__right-section '>
          <div className='about__right-section--content'>
            <img src={testImg} alt='' data-aos='fade-left' className='' />
          </div>
        </Col>
        <Col sm='12' md='6' lg='6' xl='6' className='about__left-section '>
          <div className='about__left-section--content'>
            <h1>{Language[`${langReducer}`].about.bio_title}</h1>
            <p>{Language[`${langReducer}`].about.bio_text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(Bio);
