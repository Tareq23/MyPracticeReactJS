import React, { Component, Fragment } from 'react';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import Services from '../components/services/Services';
import TopNavigation from '../components/topNavigation/TopNavigation';

class ServicePage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service"/>
                <PageTop pageTitle="Services"/>
                <Services/>
                <ContactSection/>
                <Footer/> 
            </Fragment>
        );
    }
}

export default ServicePage;