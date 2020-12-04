import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';

class ContactSection extends Component {

    contactInfo = () =>{
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        
        let jsonObject = {
            name:name,
            email:email,
            message:message,
        }
        //alert(jsonObject.name + jsonObject.email + jsonObject.message);
        RestClient.PostRequest(AppUrl.contact,JSON.stringify(jsonObject))
                    .then(result=>{
                        alert(result);
                    })
                    .catch(error=>{
                        alert(error);
                    });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-3">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Form>
                                <Form.Group >
                                    <Form.Label className="serviceDescription mb-2">Name</Form.Label>
                                    <Form.Control id="name" type="text"  placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className="serviceDescription mb-2">Email address</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="serviceDescription mb-2">Message</Form.Label>
                                    <Form.Control id="message" as="textarea" row={3} />
                                </Form.Group>
                                <Button onClick={this.contactInfo} variant="primary" >
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Discuss Now</h2>
                            <p className="mb-0 serviceDescription">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="mt-0 serviceDescription"><FontAwesomeIcon icon={faEnvelope} />tareq23@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;