import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Language, PortafolioDetail } from '../../../data/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Description, Hero } from '../../components';
import { PageContainer } from '../../components/Container/PageContainer';
import PortafolioDetails from './PortafolioDetails';

import MAP from './assets/bg-portafolio-2.png';
// import C_006 from './assets/C_006.jpg';

const PortafolioProjects = ({ data: { id, img, location } }) => {
  const lang = useSelector((state) => state.langReducer);
  return (
    <Col xs='4' className='portafolio__card--content' key={id}>
      <Link to={`/portafolio/${id}`}>
        <Card className='portafolio__card--content---cards'>
          <Card.Img variant='top' src={img} />
          <Card.Body className='mx-1 px-0'>
            <Card.Text className='portafolio__card--text'>{location}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default PortafolioProjects;
