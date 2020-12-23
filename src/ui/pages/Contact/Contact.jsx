import React from 'react';
import './Contact.scss';
import '../../../styles/grid.css';

const Contact = () => {
    return (
        <div className="contact__container">
            <div className='dyv__container'>
                <div className="dyv__row">
                    <div className="dyv__col">
                        <h1 className="text_center">CONTACTANOS</h1>
                    </div>
                </div>
                <div className="dyv__row">
                    <div className="dyv__col-sm-6 dyv__col-md-3 mobile_col">
                        <div>
                            <h3>TELEFONO</h3>
                            <p>+58 281-277-7315</p>
                        </div>
                        <div>
                            <h3>EMAIL</h3>
                            <p>myemail@example.com</p>
                        </div>
                        <div>
                            <h3>DIRECCION</h3>
                            <p>AV. CORRIENTES 1800</p>
                        </div>
                    </div>
                    <div className="dyv__col-sm-6 dyv__col-md-9 mobile_col">
                        <div className="dyv__row">
                            <div className="dyv__col"><input className="full_w" type="text" placeholder="Nombre"/></div>
                            <div className="dyv__col"><input className="full_w" type="text" placeholder="Apellido"/></div>
                        </div>
                        <div className="dyv__row">
                            <div className="dyv__col"><textarea className="full_w" name="msg" id="" cols="30" rows="10"></textarea></div>
                        </div>
                        <div className="dyv__row">
                            <div className="dyv__col"><button>ENVIAR</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;