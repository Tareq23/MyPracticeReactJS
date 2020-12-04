import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import Player from 'video-react/lib/components/Player';
import ReactHtmlParser from 'react-html-parser';

class CourseDetails extends Component {

    constructor(props)
    {
        super(props);
        

    }
    
    
    render() {
        let courseData = this.props.coursePassedData;

        let totalLecture = "";
        let totalStudent = "";
        let longTitle = "";
        let sortDes = "";
        let videoUrl = "";
        let longDes = "";
        let smallImg = "";
        let skillAll = "";
        let sortTitle = "";
        if(courseData.length==1)
        {
            //alert("yes");
            totalLecture = courseData[0]['total_lecture'];
            totalStudent = courseData[0]['total_student'];
            longTitle = courseData[0]['long_title'];
            sortDes = courseData[0]['sort_description'];
            videoUrl = courseData[0]['video_url'];
            longDes = courseData[0]['long_description'];
            smallImg = courseData[0]['small_image'];
            skillAll = courseData[0]['skill_all'];
            sortTitle = courseData[0]['sort_title'];
        }

        return (
            <Fragment>
                
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col  lg={6} md={6} sm={12} >
        <h2 className="courseFullTitle">{sortTitle}</h2>
                                    <p className="courseSubTitle mb-0">Total Lecture: {totalLecture}</p>
                                    <p className="courseSubTitle mt-1">Total Student: {totalStudent}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="serviceDescription mt-0" style={{color:"white"}}>
                                        {
                                            sortDes
                                        }
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2>Skill You Get</h2>
                            <div>
                                {
                                    ReactHtmlParser(skillAll)
                                }
                            </div>
                            <Button variant="primary">Buy Now</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            
                            <Player>
                                <source src={videoUrl}/>
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