import React, { Component, Fragment } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import { BarChart,Bar, ResponsiveContainer, XAxis,Tooltip } from 'recharts';

class Analysis extends Component {

    constructor()
    {
        super();
        this.state = {
            data : [
                {
                    Technology:'Java',Projects : 100,
                },
                {
                    Technology:'Kotlin',Projects : 82,
                },
                {
                    Technology:'Bootstrap',Projects : 90,
                },
                {
                    Technology:'Css',Projects : 100,
                },
                {
                    Technology:'Phython',Projects : 70,
                },
                {
                    Technology:'React',Projects : 90,
                },
                {
                    Technology:'php',Projects : 85,
                },
                {
                    Technology:'Laravel',Projects : 65,
                }
            ]
        }
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
                                <XAxis dataKey="Technology" />
                                <Tooltip/>
                                <Bar dataKey="Projects" fill={blue}>

                                </Bar>
                            </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of  Finibus Bonorum et Malorum for use in a type specimen book.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;