import React, { useEffect, useState } from "react";
import "./Contact.scss";
import bgFormImage from "../../../assets/images/C_005.jpg";
import InputText from "../../components/InputText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PageContainer } from "../../components/Container/PageContainer";
import FormCheck from "react-bootstrap/FormCheck";

const Contact = () => {
  const [textArea, setTextArea] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("FORM WAS SENDED");
  };

  return (
    <PageContainer>
      <Container fluid className="form__container">
        <Row>
          <Col xs={12} md={5} className="p-0 main-col">
            <figure>
              <img src={bgFormImage} alt="" />
            </figure>
          </Col>
          <Col xs={12} md={7} className="main-col">
            <div className="form__row">
              <Col>
                <form onSubmit={onSubmitForm}>
                  <Row className="form__row-contactus">
                    <Col>
                      <h1 className="text-center">CONTACTANOS</h1>
                    </Col>
                  </Row>
                  <Row className="form__row-name">
                    <Col>
                      <InputText label="Nombre" startOnFocus />
                    </Col>
                  </Row>
                  <Row className="form__row-lastname">
                    <Col>
                      <InputText label="Apellido" />
                    </Col>
                  </Row>
                  <Row className="form__row-email">
                    <Col>
                      <InputText label="Email" />
                    </Col>
                  </Row>
                  <Row className="form__row-email">
                    <Col>
                      <FormCheck
                        inline
                        type="radio"
                        label="Particular"
                        name="razon"
                        checked
                      />
                      <FormCheck
                        inline
                        type="radio"
                        label="Empresa"
                        name="razon"
                      />
                    </Col>
                  </Row>
                  <Row className="form__row-textarea">
                    <Col>
                      <textarea
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                        className="w-100"
                        name="msg"
                        id=""
                        cols="30"
                        rows="5"
                      ></textarea>
                    </Col>
                  </Row>
                  <Row className="form__row-button">
                    <Col className="form__row-button--submit">
                      <input
                        className="form__row-button--submit---btnsubmit"
                        type="submit"
                        value="ENVIAR"
                      />
                    </Col>
                  </Row>
                </form>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

export default Contact;