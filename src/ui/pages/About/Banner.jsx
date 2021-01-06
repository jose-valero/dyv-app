import { RiComputerLine } from 'react-icons/ri';
import { MdPalette } from 'react-icons/md';
import { GoTools } from 'react-icons/go';
import { iconStyle } from './Styles';
import { Language } from '../../../data/data';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = ({ langReducer }) => {
  return (
    <Container className='banner__container' fluid>
      <Row className='banner__rows'>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='banner__cols py-2'>
          <div className='banner__cols--icons'>
            <RiComputerLine style={iconStyle} />
            <p className='banner__cols--title my-auto'>
              {Language[`${langReducer}`].about.banner_tech}
            </p>
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='banner__cols py-2'>
          <div className='banner__cols--icons'>
            <MdPalette style={iconStyle} />
            <p className='banner__cols--title my-auto'>
              {Language[`${langReducer}`].about.banner_art}
            </p>
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='banner__cols py-2'>
          <div className='banner__cols--icons'>
            <GoTools style={iconStyle} />
            <p className='banner__cols--title my-auto'>
              {Language[`${langReducer}`].about.banner_tools}
            </p>
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

export default connect(mapStateToProps, {})(Banner);
