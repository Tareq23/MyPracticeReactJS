import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify" >
                            <h2 className="serviceName">follow me</h2>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br></br>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube}/>Youtube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h2 className="serviceName">address</h2>
                            <p className="mb-0 serviceDescription">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="mt-0 serviceDescription"><FontAwesomeIcon icon={faEnvelope}/>tareq23@gmail.com</p>
                            
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h2 className="serviceName">Information</h2>
                            <Link className="footerLink" to="/about">About Me</Link><br></br>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                          
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h2 className="serviceName">legal</h2>
                            <Link className="footerLink" to="/refun-policy">Refund Policy</Link><br></br>
                            <Link className="footerLink" to="/terms-condition">Terms &amp; Condition</Link><br></br>
                            
                            <Link className="footerLink" to="/privacy-policy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyRightSection">
                    <a href="#" className="copyRightLink">example.com &copy; 2020-2021</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;