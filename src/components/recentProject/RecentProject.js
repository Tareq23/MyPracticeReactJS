import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Img from '../../assets/images/blogpost.jpg';
import RestClient from '../../restApi/RestClient';
import AppUrl from '../../restApi/AppUrl';

class RecentProject extends Component {

    constructor()
    {
        super();
        this.state = {
            data : [],
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.project).then(result=>{
            this.setState({data:result});
        });
    }

    render() {
        const projectArray = this.state.data;
        const projectView = projectArray.map(result=>{
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
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
        });
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 classname="serviceName">Recent Projects</h1>
                    <Row>
                        {
                            projectView
                        }
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProject;