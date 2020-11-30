import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import TermsCondition from '../components/termsCondition/TermsCondition';
import TopNavigation from '../components/topNavigation/TopNavigation';

class TermsAndConditionPage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                
                <TopNavigation title="Terms  Condition" />
                <PageTop pageTitle="Terms and Condition"/>
                <TermsCondition/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsAndConditionPage;