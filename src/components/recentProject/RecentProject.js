import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Img from '../../assets/images/blogpost.jpg';

class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 classname="serviceName">Recent Projects</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                        Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk of
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk of
                                        
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDescription">
                                    Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk of
                                        
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProject;