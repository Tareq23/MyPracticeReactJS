import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img from '../../assets/images/blogpost.jpg';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';


class AllCourses extends Component {

    constructor()
    {
        super();
        this.state = {
            coursesData : [],
        }
    }
    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.courseAll).then(result=>{
            this.setState({coursesData : result});
        })
        .catch(error=>{

        });
    }
    render() {
        const courseArray = this.state.coursesData;
        const courseDataView = courseArray.map(result=>{
            return <Col lg={6} md={12} sm={12} className="p-2">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImage" src={result.small_image} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify" >{result.sort_title}</h5>
                                <p className="text-justify">
                                {
                                    result.sort_description
                                }
                                </p>
                                <a className="courseDetails float-left" href="#">Details</a>
                            </Col>
                        </Row>
                    </Col>
        })
        return (
            
            <Fragment>
                <Container className="text-center mt-5">
                    {/* <h2 className="serviceTitle">Our Courses</h2> */}
                    <Row>
                        {courseDataView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;