import React, { Component, Fragment } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import { BarChart,Bar, ResponsiveContainer, XAxis,Tooltip } from 'recharts';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';

import ReactHtmlParser from 'react-html-parser';

class Analysis extends Component {

    constructor()
    {
        super();
        this.state = {
            data : [
               
            ],
            description:"",
        }
    }

    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.chartData).then(result=>{
            this.setState({data:result});
        })
        RestClient.GetRequest(AppUrl.techDes).then(result=>{
            this.setState({description:result[0]['tech_description']});
        });
    }


    render() {
        var blue = "rgba(0,115,230,0.7)";
        return (
            <Fragment>
                <Container fluid className="text-center extraMarginForAnalysis">
                    
                    <h2 className="serviceTitle">Technology Used</h2>
                    <Row className="text-center ">
                        <Col style={{with:'100%',height:'300px'}} lg={6} md={12} sm={12}>

                            <ResponsiveContainer>

                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="technology" />
                                <Tooltip/>
                                <Bar dataKey="projects" fill={blue}>

                                </Bar>
                            </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">
                            {
                                ReactHtmlParser(this.state.description)
                            }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;