import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import RefundDescription from '../components/refundDescription/RefundDescription';
import TopNavigation from '../components/topNavigation/TopNavigation';

class RefundPage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy"/>
                <RefundDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;