import './Contact.scss';
import bgFormImage from '../assets/images/form-bg.jpeg';
import Button from '../../../components/Button';
import InputText from '../InputText';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <div className="contact__container">
            <Container fluid className="form__container no_padding">
                <Row>
                    <Col xs={12} sm={6} className="no_padding">
                        <figure>
                            <img src={bgFormImage} alt=""/>
                        </figure>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row className="inner_form_wrapper">
                            <Col>
                                <Row>
                                    <Col>
                                        <h1 className="text_center">CONTACTANOS</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <InputText name="username" label="Nombre" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <InputText name="username" label="Apellido" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <textarea className="full_w" name="msg" id="" cols="30" rows="10"></textarea>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button name="ENVIAR" route="/contact" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;