import React, { Component, Fragment } from 'react';
import AllCourses from '../components/allCourses/AllCourses';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import TopNavigation from '../components/topNavigation/TopNavigation';

class CoursePage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
        return (
            
            <Fragment>
                <TopNavigation title="Course"/>
                <PageTop pageTitle="About Me"/>
                <AllCourses pageTitle="All Courses"/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;