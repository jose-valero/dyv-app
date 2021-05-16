import { useSelector } from 'react-redux';

import AOS from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Hero, NextView, Description, PageContainer } from '../../components/stateless';
import { Language } from '../../../data';
import Bio from './Bio';
import ValuesCard from './ValuesCard';
import './About.scss';

const About = () => {
  AOS.init();
  const lang = useSelector((state) => state.langReducer);
  const misionTitle = Language[`${lang}`].about.banner_missionTitle;
  const missionText = Language[`${lang}`].about.banner_missionText;
  const valueTitle = Language[`${lang}`].about.banner_valuesTitle;
  const valueSubText = Language[`${lang}`].about.banner_valuesSubText;
  const nextPageText = Language[`${lang}`].about.nextPage;

  const ObjValues = Language[`${lang}`].about.values;
  const valuesItems = Object.values(ObjValues).map((value) => {
    return (
      <Row key={value}>
        <Col className='py-2'>{value}</Col>
      </Row>
    );
  });

  return (
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
  );
};

export default About;
