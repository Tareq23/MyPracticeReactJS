import React, { Component, Fragment } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import RestClient from '../../restApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import AppUrl from '../../restApi/AppUrl';
class RefundDescription extends Component {
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
            this.setState({description:result[0]['refund']});
        })
    }
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
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

export default RefundDescription;