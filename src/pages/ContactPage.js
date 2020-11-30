import React, { Component, Fragment } from 'react';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import TopNavigation from '../components/topNavigation/TopNavigation';

class ContactPage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="contact"/>
                <PageTop pageTitle="Contact"/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;