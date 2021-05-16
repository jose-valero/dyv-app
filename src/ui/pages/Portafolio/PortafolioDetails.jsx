import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { Hero, PageContainer } from '../../components/stateless';
import { PortafolioDetail } from '../../../data';
// import { useHistory, useParams } from 'react-router-dom';

const PortafolioDetails = ({ id, match }) => {
  const lang = useSelector((state) => state.langReducer);

  const project_id = match.params.id;
  const dataDetail = PortafolioDetail[lang][project_id];

  const { title, detail, img, description, location, year, donwload, keyword_1, keyword_2, title_detail } = dataDetail;

  return (
    <PageContainer>
      <Hero displayOnPage='portafolio' />

      <Container className='portafolioDetail__container' id={id}>
        <h1 className='text-center'>{title}</h1>
        <h1 className='text-center'>{location}</h1>
        <Row className='portafolioDetail__topsection'>
          <Col className='portafolioDetail__topsection-title'>
            {title_detail}
            <ul>
              {Object.values(detail).map((value) => (
                <li>{value}</li>
              ))}
            </ul>
          </Col>
          <Col className='portafolioDetail__topsection-images'>
            <Image src={img} fluid />
          </Col>
        </Row>
        <Row className='portafolioDetail__botsection'>
          <Col lg={12} className='portafolioDetail__botsection-desc'>
            {description}
          </Col>
          <Col lg={12} className='portafolioDetail__botsection-utils'>
            <a href='#' className='px-1 mx-1'>
              {donwload}
            </a>
            <Badge variant='primary' className='px-1 mx-1'>
              {year}
            </Badge>
            <Badge variant='primary' className='px-1 mx-1'>
              {keyword_1}
            </Badge>
            <Badge variant='primary' className='px-1 mx-1'>
              {keyword_2}
            </Badge>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default PortafolioDetails;
