import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from '../../assets/images/blogpost.jpg';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';

class AllProjects extends Component {
    
    constructor()
    {
        super();
        this.state = {
            projectsData : [],
        }
    }
    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.projectAll).then(result=>{
            this.setState({projectsData : result});
        });
    }
    render() {
        const projectsArray = this.state.projectsData;
        const projectsView = projectsArray.map(result=>{
            return <Col lg={4} md={6} sm={12}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={result.project_image_card} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">{result.project_name}</Card.Title>
                                <Card.Text className="projectCardDescription">
                                   {
                                       result.project_description
                                   }
                                </Card.Text>
                            <Button variant="primary"><Link className="linkStyle" to={"/project-details/"+result.id+"/"+result.project_name}>Details</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
        });
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    {/* <h1>Recent Projects</h1> */}
                    <Row>
                        {projectsView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;