import React, { Component, Fragment } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from '../../assets/images/blogpost.jpg';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';

class courses extends Component {

    constructor(){
        super();
        this.state = {
            recentCourseData:[],
        }
    }
    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.course).then(result=>{
            this.setState({recentCourseData:result});
        })
    }
    render() {
        const courseArray = this.state.recentCourseData;
        const recentCourseView = courseArray.map(result=>{
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
                                
                                <Link className="courseDetails float-left" to={"/course-details/"+result.id}>Details</Link>
                            </Col>
                        </Row>
                    </Col>
        });
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceTitle">Our Courses</h2>
                    <Row>
                        {
                            recentCourseView
                        }
                    </Row> 
                </Container>
            </Fragment>
        );
    }
}

export default courses;