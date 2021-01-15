import { Language } from '../../../data/data';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from './Description';

const Mission = () => {
  const lang = useSelector((state) => state.langReducer);
  return (
    <Container className='about__mision-container'>
      <Row>
        <Col>
          <Description
            title={Language[`${lang}`].about.banner_missionTitle}
            text={Language[`${lang}`].about.banner_missionText}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Mission;
