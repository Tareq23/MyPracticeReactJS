import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class AboutDescription extends Component {

    constructor()
    {
        super();
        this.state = {
            description : "",
        }
    }
    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.info).then(result=>{
            this.setState({description:result[0]['about']});
        });
    }
    render() {
        return (
            <Fragment>
                <Container className="mt-3">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            {
                                ReactHtmlParser(this.state.description)
                            }
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;