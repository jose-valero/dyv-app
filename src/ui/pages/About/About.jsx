import { Language } from '../../../data';
import { useSelector } from 'react-redux';
import { PageContainer } from '../../components/Container/PageContainer';
import ValuesCard from './ValuesCard';
import Bio from './Bio';
import Hero from '../../components/Hero';
import NextView from '../../components/NextView';
import Description from '../../components/BannerDescription';
import AOS from 'aos';
import './About.scss';

const About = () => {
  const lang = useSelector((state) => state.langReducer);
  const nextPageText = Language[`${lang}`].about.nextPage;
  const misionTitle = Language[`${lang}`].about.banner_missionTitle;
  const missionText = Language[`${lang}`].about.banner_missionText;
  const valueTitle = Language[`${lang}`].about.banner_valuesTitle;
  const valueText = Language[`${lang}`].about.banner_valuesText;
  AOS.init();
  return (
    <>
      {/* colocar todos los props aqui ___________ */}
      <PageContainer>
        <Hero displayOnPage="about"/>
        <Bio />
        <Description title={misionTitle} text={missionText} />
        <ValuesCard />
        <Description title={valueTitle} text={valueText} />
        <NextView nextTo={nextPageText} goTo='/services' />
      </PageContainer>
    </>
  );
};

export default About;
