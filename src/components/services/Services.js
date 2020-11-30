import React, { Component } from 'react';
import { Fragment } from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import logo from'../../assets/images/smartphone.svg';
import AppUrl from '../../restApi/AppUrl';
import RestClient from '../../restApi/RestClient';

class Services extends Component {


    constructor(){
        super();
        this.state = {
            serviceData : [],
        }
    }


    componentDidMount()
    {
        RestClient.GetRequest(AppUrl.service).then(result=>{
            this.setState({serviceData:result});
        });
    }




    render() {
        const serviceArray = this.state.serviceData;
        // const serviceFunction = () => {
        //     return <Col lg={4} md={6} sm={12} >
        //     <div  className="serviceCard text-center">
        //         <img src={logo}/>
        //         <h2 className="serviceName">Web Development</h2>
        //         <p className="serviceDescription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
        //     </div>
        // </Col>
        // }
        const serviceView = serviceArray.map(result=>{
            return <Col lg={4} md={6} sm={12} >
            <div  className="serviceCard text-center">
                <img width="100%" height="auto" src={result.service_logo}/>
                <h2 className="serviceName">{result.service_name}</h2>
                <p className="serviceDescription">{result.service_description}</p>
            </div>
        </Col>
        });
        return (
            <Fragment>
                
                <Container  className="text-center" >
                        <h2 className="serviceTitle">My Services</h2>
                    <Row>
                        {serviceView}
                        {/* <Col lg={4} md={6} sm={12} >
                            {}
                        </Col> */}
                        {/* <Col lg={4} md={6} sm={12} >
                            <div  className="serviceCard text-center">
                                <img src={logo}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <div  className="serviceCard text-center">
                                <img src={logo}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;