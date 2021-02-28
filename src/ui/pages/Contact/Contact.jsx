import React, { useEffect, useState } from "react";
import "./Contact.scss";
import bgFormImage from "./assets/form-bg.jpeg";
import InputText from "../../components/InputText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PageContainer } from '../../components/Container/PageContainer';

const Contact = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");
    const nameInputRef = React.createRef();

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log('FORM WAS SENDED');
    }

    useEffect(() => {
        nameInputRef.current.focus();
        // eslint-disable-next-line
    }, []);

    return (
        <PageContainer>
            <Container fluid className="form__container">
                <Row>
                    <Col xs={12} md={6} className="p-0">
                        <figure>
                            <img src={bgFormImage} alt="" />
                        </figure>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="form__row">
                            <Col>
                                <form onSubmit={onSubmitForm}>
                                    <Row className="form__row-contactus">
                                        <Col>
                                            <h1 className="text-center">
                                                CONTACTANOS
                                            </h1>
                                        </Col>
                                    </Row>
                                    <Row className="form__row-name">
                                        <Col>
                                            <InputText
                                                value={name}
                                                onChange={e =>
                                                    setName(e.target.value)
                                                }
                                                label="Nombre"
                                                ref={nameInputRef}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form__row-lastname">
                                        <Col>
                                            <InputText
                                                value={lastName}
                                                onChange={e =>
                                                    setLastName(e.target.value)
                                                }
                                                label="Apellido"
                                                light
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form__row-email">
                                        <Col>
                                            <InputText
                                                value={email}
                                                onChange={e =>
                                                    setEmail(e.target.value)
                                                }
                                                label="Email"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form__row-textarea">
                                        <Col>
                                            <textarea
                                                value={textArea}
                                                onChange={e => setTextArea(e.target.value)}
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
                                            <input className="form__row-button--submit---btnsubmit" type="submit" value="ENVIAR" />
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </PageContainer>
    );
};

export default Contact;
