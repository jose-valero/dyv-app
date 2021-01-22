import React, { useEffect, useState } from "react";
import "./Contact.scss";
import bgFormImage from "../assets/images/form-bg.jpeg";
import InputText from "../InputText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
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
        <div className="contact__container">
            <Container fluid className="form__container no_padding">
                <Row>
                    <Col xs={12} md={6} className="no_padding">
                        <figure>
                            <img src={bgFormImage} alt="" />
                        </figure>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="inner_form_wrapper">
                            <Col>
                                <form onSubmit={onSubmitForm}>
                                    <Row>
                                        <Col>
                                            <h1 className="text_center">
                                                CONTACTANOS
                                            </h1>
                                        </Col>
                                    </Row>
                                    <Row>
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
                                    <Row>
                                        <Col>
                                            <InputText
                                                value={lastName}
                                                onChange={e =>
                                                    setLastName(e.target.value)
                                                }
                                                label="Apellido"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <textarea
                                                value={textArea}
                                                onChange={e => setTextArea(e.target.value)}
                                                className="full_w"
                                                name="msg"
                                                id=""
                                                cols="30"
                                                rows="5"
                                            ></textarea>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="submit__Container">
                                            <input className="submit__Button" type="submit" value="ENVIAR" />
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
