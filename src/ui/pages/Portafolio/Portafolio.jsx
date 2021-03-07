import React from "react";
import { useSelector } from "react-redux";
import { PageContainer } from "../../components/Container/PageContainer";
// import Hero from "../../components/Hero/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MAP from "./assets/bg-portafolio-2.png";
import C_006 from "./assets/C_006.jpg";
import "./Portafolio.scss";
import Description from "../../components/BannerDescription";
import { Language } from "../../../data/index";
import { Link } from "react-router-dom";

const Portafolio = () => {
  const lang = useSelector((state) => state.langReducer);
  const places = [
    "LAS BAHAMAS",
    "VENEZUELA",
    "PUERTO RICO",
    "MIAMI, USA",
    "NEW YORK, USA",
    "MIAMI, USA",
  ];

  return (
    <PageContainer>
      {/* <Hero displayOnPage='portafolio' /> */}
      <Container className="portfolio__page">
        <Description
          title={Language[`${lang}`].portafolio.descriptionHeadline}
          text={Language[`${lang}`].portafolio.descriptionSubhead}
        />
        <Image src={MAP} fluid />
        <Row className="portafolio__card pb-4">
          {places.map((clientPlace) => (
            <Col xs="4" className="portafolio__card--content">
              <Link to="/portafolio">
                <Card className="portafolio__card--content---cards">
                  <Card.Img variant="top" src={C_006} />
                  <Card.Body className="mx-1 px-0">
                    <Card.Text className="portafolio__card--text">
                      {clientPlace}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </PageContainer>
  );
};
export default Portafolio;
