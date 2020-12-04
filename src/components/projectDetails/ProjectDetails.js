import React, { Component, Fragment } from 'react';
import { Button, Container, Row,Col } from 'react-bootstrap';
import Img from '../../assets/images/blogpost.jpg';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
class ProjectDetails extends Component {
    constructor(props)
    {
        super();
        this.state = {
            projectId : props.projectId,
            projectName : "",
            projectDescription : "",
            projectFeature : "",
            projectImage : "",
        }
    }
    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.projectDetails+"/"+this.state.projectId)
                    .then(result=>{
                        this.setState({
                            projectName:result[0]['project_name'],
                            projectDescription:result[0]['project_description'],
                            projectFeature : result[0]['project_feature'],
                            projectImage : result[0]['project_image_card']
                        });
                    })
                    .catch(error=>{

                    });
    }
    render() {
        return (
            <Fragment>
                <Container className="mt-5 text-justify">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img width="100%" height="auto" alt="project-img" src={this.state.projectImage}/>
                        </Col>
                        
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName mt-0"> {this.state.projectName}</h2>
                            <p className="serviceDescription mb-2">
                                {
                                    this.state.projectDescription
                                }
                            </p>
                            <div>
                                {ReactHtmlParser(this.state.projectFeature)}
                            </div>
                            <Button>Live Preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;