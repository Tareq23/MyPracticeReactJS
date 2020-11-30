import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy';
import TopNavigation from '../components/topNavigation/TopNavigation';

class PrivacyPolicyPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (

            <Fragment>
                <TopNavigation title="Privacy Policy"/>
                <PageTop pageTitle="Privacy Policy"/>
                <PrivacyPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPolicyPage;