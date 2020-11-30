import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row ,Card} from 'react-bootstrap';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

class Summery extends Component {
    render() {
        return (
            <Fragment>
                {/* <div className="extraMarginForSummery"></div> */}
                <Container fluid className="summeryBanner extraMarginForSummery p-0">
                    <div className="summeryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}  className="text-center">
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">

                                                <CountUp start={0} end={100}>
                                                  {
                                                      ({countUpRef,start}) => (
                                                        <ReactVisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef}></span>
                                                        </ReactVisibilitySensor>
                                                      )
                                                  }
                                                </CountUp>


                                            </h1>
                                            <h2 className="countTitle">Total project</h2>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">
                                                    <CountUp start={0} end={100}>
                                                      {
                                                          ({countUpRef,start}) => (
                                                              <ReactVisibilitySensor onChange={start} delayedCall>
                                                                  <span ref={countUpRef}></span>
                                                              </ReactVisibilitySensor>
                                                          )
                                                      }
                                                    </CountUp>
                                            </h1>
                                            <h2 className="countTitle">Total Client</h2>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card  className="workCard">
                                        
                                        <Card.Body>
                                            <Card.Title className="cardTitle text-justify">How I Work</Card.Title>
                                            <Card.Text>
                                                <p  className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle}/> Requirement Gathering</p>
                                                <p  className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle}/> System Analysis</p>
                                                <p  className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} />Coding Testing</p>
                                                <p  className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle}/> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </div>

                </Container>
            </Fragment>
        );
    }
}

export default Summery;