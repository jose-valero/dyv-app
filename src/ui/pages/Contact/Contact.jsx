import React, { useState, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Language } from '../../../data/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheck from 'react-bootstrap/FormCheck';
import Image from 'react-bootstrap/Image';
import { PageContainer } from '../../components/stateless/Container/PageContainer';

import './Contact.scss';

const SEO = lazy(() => import('../../components/utils/SEO/SEO'));
const Spinnator = lazy(() => import('../../components/stateless/Spinner/Spinner'));
const InputText = lazy(() => import('../../components/stateless/InputText/InputText'));
const Hero = lazy(() => import('../../components/stateless/Hero/Hero'));

const Contact = () => {
  const [textArea, setTextArea] = useState('');
  const lang = useSelector((state) => state.langReducer);
  const CONTACT_DATA = Language[`${lang}`].contact;
  const {
    seo,
    headline,
    image,
    belong_to_label,
    checkbox_radio,
    lastname_label,
    name_label,
    submit_button_text,
    phone_label
  } = CONTACT_DATA;

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Suspense fallback={<Spinnator />}>
        <PageContainer style={{ marginTop: '0' }}>
          <SEO
            title={seo.title}
            description={seo.description}
            image={seo.image}
            image_alt={seo.image_alt}
            keywords={seo.keywords}
          />
          <Hero displayOnPage='contact' />
          <Container className='form__container' fluid>
            <Row>
              <Col xs={12} md={5} className='p-0 main-col'>
                <figure>
                  <Image src={image} alt='some text' />
                </figure>
              </Col>
              <Col xs={12} md={7} className='main-col'>
                <div className='form__row'>
                  <Col>
                    <form onSubmit={onSubmitForm}>
                      <Row className='form__row-contactus'>
                        <Col>
                          <h1 className='text-center'>{headline}</h1>
                        </Col>
                      </Row>
                      <Row className='form__row-name'>
                        <Col>
                          <InputText label={name_label} startOnFocus />
                        </Col>
                      </Row>
                      <Row className='form__row-lastname'>
                        <Col>
                          <InputText label={lastname_label} />
                        </Col>
                      </Row>
                      <Row className='form__row-email'>
                        <Col>
                          <InputText label='Email' />
                        </Col>
                      </Row>
                      <Row className='form__row-phone'>
                        <Col>
                          <InputText label={phone_label} />
                        </Col>
                      </Row>
                      <Row className='form__row-from'>
                        <Col>
                          <p className='mb-1'>{belong_to_label}:</p>
                          {checkbox_radio.map((checkbox, i) => (
                            <FormCheck
                              key={checkbox}
                              inline
                              type='radio'
                              label={checkbox}
                              name='razon'
                              defaultChecked={i === 0 ? true : false}
                            />
                          ))}
                          {/* <FormCheck
                        inline
                        type="radio"
                        label="Empresa"
                        name="razon"
                      /> */}
                        </Col>
                      </Row>
                      <Row className='form__row-textarea'>
                        <Col>
                          <textarea
                            value={textArea}
                            onChange={(e) => setTextArea(e.target.value)}
                            className='w-100'
                            name='msg'
                            id=''
                            cols='30'
                            rows='5'
                          ></textarea>
                        </Col>
                      </Row>
                      <Row className='form__row-button'>
                        <Col className='form__row-button--submit'>
                          <input
                            className='form__row-button--submit---btnsubmit'
                            type='submit'
                            value={submit_button_text}
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
      </Suspense>
    </>
  );
};

export default Contact;
