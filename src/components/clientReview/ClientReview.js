import React, { Component, Fragment } from 'react';

//to carousel

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';

import Img from '../../assets/images/clientImage.JPG';
import RestClient from '../../restApi/RestClient';
import AppUrl from '../../restApi/AppUrl';

class ClientReview extends Component {
    constructor()
    {
        super();
        this.state = {
            clientData : [],
        }
    }
    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.clientReview).then(result=>{
            this.setState({clientData : result});
        })
        .catch(error=>{
            this.setState({clientData: ["somethisng wrong"]});
        });
    }
    render() {

       

        var settings = {
            autoplay:true,
            autoplaySpeed:2000,
            dots:false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            // initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };



          const clientArray = this.state.clientData;
          const clientDataView = clientArray.map(result=>{
              return <div>
                          <Row className="text-center justify-content-center">
                              <Col lg={6} md={6} sm={12}>
                                  <img className="circleImage" src={result.client_image}/>
          <h2 className="serviceName">{result.client_title}</h2>
                                  <p className="serviceDescription">{result.client_description}</p>
                              </Col>
                          </Row>
                      </div>

          });

        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceTitle">Client Says</h2>
                    <Slider {...settings}>
                            {clientDataView}
                            {/* <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src={Img}/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImage" src={Img}/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col  lg={6} md={6} sm={12}>
                                    <img className="circleImage" src={Img}/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col  lg={6} md={6} sm={12}>
                                    <img className="circleImage" src={Img}/>
                                    <h2 className="serviceName">Web Development</h2>
                                    <p className="serviceDescription">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                </Col>
                            </Row>
                        </div> */}
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;