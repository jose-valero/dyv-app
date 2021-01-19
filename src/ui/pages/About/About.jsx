import { Language } from '../../../data/data';
import { useSelector } from 'react-redux';
import Values from './Values';
import { PageContainer } from '../../components/Container/PageContainer';
import Hero from '../../components/Hero/Hero';
import AOS from 'aos';
import Bio from './Bio';
import NextView from '../../components/NextView/NextView';
import Description from '../../components/BannerDescription/Description';
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
        <Hero />
        <Bio />
        <Description title={misionTitle} text={missionText} />
        <Values />
        <Description title={valueTitle} text={valueText} />
        <NextView nextTo={nextPageText} goTo='/services' />
      </PageContainer>
    </>
  );
};

export default About;
