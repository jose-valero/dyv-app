import './Contact.scss';
import bgFormImage from './assets/images/form-bg.jpeg';
import Button from '../../components/Button';
import InputText from './InputText';

const Contact = () => {
    return (
        <div className="contact__container">
            <div className="dyv__container-fluid form__container no_padding">
                <div className="dyv__row">
                    <div className="dyv__col-6 no_padding" background>
                        <figure>
                            <img src={bgFormImage} alt=""/>
                        </figure>
                    </div>
                    <div className="dyv__col-6">
                        <div className="inner_form_wrapper dyv__row">
                            <div className="dyv__col">
                                <div className="dyv__row">
                                    <div className="dyv__col">
                                        <h1 className="text_center">CONTACTANOS</h1>
                                    </div>
                                </div>
                                <div className="dyv__row">
                                    <div className="dyv__col">
                                        <InputText name="username" label="Nombre" />
                                    </div>
                                </div>
                                <div className="dyv__row">
                                    <div className="dyv__col">
                                        <InputText name="username" label="Apellido" />
                                    </div>
                                </div>
                                <div className="dyv__row">
                                    <div className="dyv__col">
                                        <textarea className="full_w" name="msg" id="" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="dyv__row">
                                    <div className="dyv__col">
                                        <Button name="ENVIAR" route="/contact" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;