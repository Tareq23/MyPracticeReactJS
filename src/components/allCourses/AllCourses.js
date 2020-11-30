import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img from '../../assets/images/blogpost.jpg';


class AllCourses extends Component {
    render() {
        return (
            
            <Fragment>
                <Container className="text-center mt-5">
                    {/* <h2 className="serviceTitle">Our Courses</h2> */}
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage" src={Img} />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify" >Web Development</h5>
                                    <p className="text-justify">
                                    Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make 
                                    </p>
                                    <a className="courseDetails float-left" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage" src={Img}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify">Web Development</h5>
                                    <p className="text-justify">
                                    Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make 
                                    </p>
                                    <a className="float-left courseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage" src={Img}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify">Web Development</h5>
                                    <p className="text-justify">
                                    Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make 
                                    </p>
                                    <a className="float-left courseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImage" src={Img}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify">Web Development</h5>
                                    <p className="text-justify">
                                    Some quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make up the bulk ofSome quick example text to build on the card title and make 
                                    </p>
                                    <a className="float-left courseDetails" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;