import React, { Component, Fragment } from 'react';
import Analysis from '../components/analysis/Analysis';
import ClientReview from '../components/clientReview/ClientReview';
import Courses from '../components/courses/Courses';
import Footer from '../components/footer/Footer';
import RecentProject from '../components/recentProject/RecentProject';
import Services from '../components/services/Services';
import Summery from '../components/summery/Summery';
import TopBanner from '../components/topBanner/TopBanner';
import TopNavigation from '../components/topNavigation/TopNavigation';
import Video from '../components/video/Video';

class HomePage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="Home"/>
                <TopBanner />
                <Services />
                <Analysis />
                <Summery />
                <RecentProject />
                <Courses />
                <Video />
                <ClientReview />
                <Footer />
            </Fragment>
        );
    }
}

export default HomePage;