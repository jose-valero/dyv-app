import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import skillImg from '../../../assets/images/2.jpg';
import { FaAccusoft, FaBlackTie, FaCanadianMapleLeaf } from 'react-icons/fa';
import './Skills.scss';

const Skils = () => {
  return (
    <Container className='skills__container '>
      <Row className='row align-middle'>
        <Col sm='6' md='4' lg='4' xl='4' className='column'>
          <Card className='card gr-1'>
            <div className='txt'>
              <h1>
                BRANDING AND <br />
                CORPORATE DESIGN
              </h1>
              <p>Visual communication and problem-solving</p>
            </div>
            <a href='#'>more</a>
            {/* <div className='ico-card'>
              <FaCanadianMapleLeaf className='icox' />
            </div> */}
          </Card>
        </Col>
        <Col sm='6' md='4' lg='4' xl='4' className='column'>
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
              <FaBlackTie className='icox' />
            </div>
          </div>
        </Col>
        <Col sm='6' md='4' lg='4' xl='4' className='column'>
          <div className='card gr-3'>
            <div className='txt'>
              <h1>
                UX/UI WEBsite <br /> AND MOBILE app
              </h1>
              <p>User Interface and User Experience Design.</p>
            </div>
            <a href='#'>more</a>
            <div className='ico-card'>
              <FaAccusoft className='icox' />
            </div>
          </div>
        </Col>
        <Col sm='6' md='4' lg='4' xl='4' className='column'>
          <Card className='gr-4'>
            <div className='txt'>
              <h1>
                BRANDING AND <br />
                CORPORATE DESIGN
              </h1>
              <p>Visual communication and problem-solving</p>
            </div>
            <a href='#'>more</a>
            <div className='ico-card'>
              <FaAccusoft className='icox' />
            </div>
          </Card>
        </Col>

        <Col sm='6' md='4' lg='4' xl='4' className='column'>
          <div className='card gr-5'>
            <div className='txt'>
              <h1>
                Web Front-End <br />
                SOLUTIONS
              </h1>
              <p>How design is implemented on the web.</p>
            </div>
            <a href='#'>more</a>
            <div className='ico-card'>
              <FaBlackTie className='icox' />
            </div>
          </div>
        </Col>
        <Col sm='6' md='4' lg='4' xl='4' className='column'>
          <div className='card gr-6'>
            <div className='txt'>
              <h1>
                UX/UI WEBsite <br /> AND MOBILE app
              </h1>
              <p>User Interface and User Experience Design.</p>
            </div>
            <a href='#'>more</a>
            <div className='ico-card'>
              <FaCanadianMapleLeaf className='icox' />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skils;
