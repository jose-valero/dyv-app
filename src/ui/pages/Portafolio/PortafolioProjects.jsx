import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PortafolioProjects = ({ data: { id, img, location } }) => {
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