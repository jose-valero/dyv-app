import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import skillImg from '../../../assets/images/2.jpg';
import './Skills.scss';

const Skils = () => {
  return (
    <Container className=' '>
      <Row className='row align-middle'>
        <Col md='6' lg='4' className='column'>
          <Card className=''>
            <div className='txt'>
              <h1>
                BRANDING AND <br />
                CORPORATE DESIGN
              </h1>
              <p>Visual communication and problem-solving</p>
            </div>
            <a href='#'>more</a>
            <div className='ico-card'>
              <img src={skillImg} className='w-100 p-0 m-0' />
              {/* <i className='fa fa-rebel'></i> */}
            </div>
          </Card>
        </Col>

        <Col md='6' lg='4' className='column'>
          <div className='card gr-2'>
            <div className='txt'>
              <h1>
                Web Front-End <br />
                SOLUTIONS
              </h1>
              <p>How design is implemented on the web.</p>
            </div>
            <a href='#'>more</a>
            <div className='ico-card'>
              <img src={skillImg} className='w-100' />
              {/* <i className='fa fa-codepen'></i> */}
            </div>
          </div>
        </Col>
        <Col md='6' lg='4' className='column'>
          <div className='card gr-3'>
            <div className='txt'>
              <h1>
                UX/UI WEBsite <br /> AND MOBILE app
              </h1>
              <p>User Interface and User Experience Design.</p>
            </div>
            <a href='#'>more</a>
            <div className='ico-card'>
              <img src={skillImg} className='w-100' />
              {/* <i className='fa fa-empire'></i> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skils;
