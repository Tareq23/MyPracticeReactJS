import React, { Component, Fragment } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import  '../../assets/css/custom.css';
import TopNavigation from '../topNavigation/TopNavigation';
import axios from 'axios';
import RestClient from '../../restApi/RestClient';
import AppUrl from '../../restApi/AppUrl';


class TopBanner extends Component {

    constructor()
    {
        super();
        this.state = {
            'title' : "",
            'subtitle': "",
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.homePageEtc).then(result=>{
            this.setState({'title':result[0]['home_title'],'subtitle':result[0]['home_subtitle']});
            // result[0]['home_title']
            // result[0]['home_subtitle']
        }).catch(error=>{
            this.setState({'title':'something wrong','subtitle':'something wrong'});
        });
    }



    render() {
        return (
            <Fragment>
                
                <Container fluid={true} className="topFixedBanner  p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                    <Button variant="primary">More info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;