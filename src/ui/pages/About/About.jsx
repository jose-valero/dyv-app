import { useSelector } from 'react-redux';
import { Language } from '../../../data';
import ValuesCard from './ValuesCard';
import Bio from './Bio';
import { Hero, NextView, Description } from '../../components';
import { PageContainer } from '../../components/Container/PageContainer';
import AOS from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.scss';

const About = () => {
  const lang = useSelector((state) => state.langReducer);
  const nextPageText = Language[`${lang}`].about.nextPage;
  const misionTitle = Language[`${lang}`].about.banner_missionTitle;
  const missionText = Language[`${lang}`].about.banner_missionText;
  const valueTitle = Language[`${lang}`].about.banner_valuesTitle;
  // const valueText = Language[`${lang}`].about.banner_valuesText;
  const valueSubText = Language[`${lang}`].about.banner_valuesSubText;
  AOS.init();
  console.log('alaverga', Language[`${lang}`].about.values);
  const ObjValues = Language[`${lang}`].about.values;
  const valuesItems = Object.values(ObjValues).map((value) => {
    return (
      <Row key={value}>
        <Col className='py-2'>{value}</Col>
      </Row>
    );
  });

  return (
    <>
      {/* colocar todos los props aqui ___________ */}
      <PageContainer>
        <Hero displayOnPage='about' />
        <Bio />
        <Description title={misionTitle} text={missionText} />
        <ValuesCard />
        <Description title={valueTitle} SubText={valueSubText}>
          {valuesItems}
        </Description>

        <NextView nextTo={nextPageText} goTo='/services' />
      </PageContainer>
    </>
  );
};

export default About;
