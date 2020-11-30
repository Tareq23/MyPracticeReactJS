import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import Player from 'video-react/lib/components/Player';

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col  lg={6} md={6} sm={12} >
                                    <h2 className="courseFullTitle">Total Dynamic Website with Admin Panel</h2>
                                    <p className="courseSubTitle mb-0">Total Lecture: 30</p>
                                    <p className="courseSubTitle mt-1">Total Student: 50</p>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="serviceDescription mt-0" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2>Skill You Get</h2>
                            <ul>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                                <li className="courseServiceDescription">Type of Skill that's you learn</li>
                            </ul>
                            <Button variant="primary">Buy Now</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default CourseDetails;