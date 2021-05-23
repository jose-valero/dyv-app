import { useSelector } from 'react-redux';
import AOS from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Language } from '../../../data';
import { Hero, NextView, Description, PageContainer } from '../../components/stateless';
import { SEO } from '../../components/utils/';
import Bio from './Bio';
import ValuesCard from './ValuesCard';
import './About.scss';

const About = () => {
  AOS.init();
  const lang = useSelector((state) => state.langReducer);
  // data
  const ABOUT_DATA = Language[`${lang}`].about;

  // destructuring
  const { next_page, bio_text, bio_text_paragraph, profile_image, values, seo, banner_mission_cards } = ABOUT_DATA;

  const valuesItems = Object.values(values).map((value) => {
    return (
      <Row key={value}>
        <Col className='py-2'>{value}</Col>
      </Row>
    );
  });

  return (
    <PageContainer>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image}
        image_alt={seo.image_alt}
        keywords={seo.keywords}
      />
      <Hero displayOnPage='about' />
      <Bio
        profile_image={profile_image}
        bio_text={bio_text}
        bio_text_paragraph={bio_text_paragraph}
        seo_image_alt={seo.image_alt}
      />
      <Description />
      <ValuesCard data={banner_mission_cards} />
      <Description>{valuesItems}</Description>

      <NextView nextTo={next_page} goTo='/services' />
    </PageContainer>
  );
};

export default About;
