import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
class PrivacyPolicy extends Component {

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
            this.setState({description:result[0]['privacy_policy']});
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row className="text-justify">
                        <Col>
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

export default PrivacyPolicy;