import React, { Component, Fragment } from 'react';
import { Button, Container, Row,Col } from 'react-bootstrap';
import Img from '../../assets/images/blogpost.jpg';
class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5 text-justify">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img width="100%" height="auto" alt="project-img" src={Img}/>
                        </Col>
                        
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName mt-0">Project Title</h2>
                            <p className="serviceDescription mb-2">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>
                            <ul className="mt-0">
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                            </ul>
                            <Button>Live Preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;