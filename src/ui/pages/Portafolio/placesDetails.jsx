import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { PageContainer } from '../../components/Container/PageContainer';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { Hero } from '../../components';
import { PortafolioDetail } from '../../../data';

const PlacesDetails = () => {
  const lang = useSelector((state) => state.langReducer);

  const dataDetail = PortafolioDetail[lang];
  return (
    <PageContainer>
      <Hero displayOnPage='portafolio' />

      {Object.values(dataDetail).map((value) => (
        <Container className='portafolioDetail__container' key={value.id}>
          
          <h1 className='text-center'>{value.location} - {value.id}</h1>
          <Row className='portafolioDetail__topsection'>
            <Col className='portafolioDetail__topsection-title'>
              {value.title}
              <ul>
                <li>
                  especificacion del proyecto #1, puede ser otra cosa tecnica o
                  nose
                </li>
                <li>
                  especificacion del proyecto #2, puede ser otra cosa tecnica o
                  nose
                </li>
                <li>
                  especificacion del proyecto #3, puede ser otra cosa tecnica o
                  nose
                </li>
                <li>
                  especificacion del proyecto #4, puede ser otra cosa tecnica o
                  nose
                </li>
                <li>
                  especificacion del proyecto #5, puede ser otra cosa tecnica o
                  nose
                </li>
              </ul>
            </Col>
            <Col className='portafolioDetail__topsection-images'>
              <Image src={value.img} fluid />
            </Col>
          </Row>
          <Row className='portafolioDetail__botsection'>
            <Col lg={12} className='portafolioDetail__botsection-desc'>
              <b>Descripcion del proyecto:</b> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab id atque a eum ut, soluta
              perspiciatis unde fuga accusamus, provident nobis asperiores
              repellat praesentium, repudiandae sit porro voluptatibus ratione
              iste?
            </Col>
            <Col lg={12} className='portafolioDetail__botsection-utils'>
              <a href='www.google.com' target="_blank" className='px-1 mx-1'>
                Descarga
              </a>
              <Badge variant='primary' className='px-1 mx-1'>
                2018
              </Badge>
              <Badge variant='primary' className='px-1 mx-1'>
                keyword
              </Badge>
              <Badge variant='primary' className='px-1 mx-1'>
                Download
              </Badge>
            </Col>
          </Row>
        </Container>
      ))}
    </PageContainer>
  );
};

export default PlacesDetails;
