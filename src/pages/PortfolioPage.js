import React, { Component, Fragment } from 'react';
import AllProjects from '../components/allProjects.js/AllProjects';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import TopNavigation from '../components/topNavigation/TopNavigation';

class PortfolioPage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop pageTitle="Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;