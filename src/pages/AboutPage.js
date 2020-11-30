import React, { Component, Fragment } from 'react';
import AboutDescription from '../components/aboutDescription/AboutDescription';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import TopNavigation from '../components/topNavigation/TopNavigation';

class AboutPage extends Component {
    
    componentDidMount()
    {
        window.scroll(0,0);
    }


    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pageTitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;