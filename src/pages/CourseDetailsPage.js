import React, { Component, Fragment } from 'react';
import CourseDetails from '../components/courseDetails/CourseDetails';
import Footer from '../components/footer/Footer';
import TopNavigation from '../components/topNavigation/TopNavigation';

class CourseDetailsPage extends Component {

    componentDidMount()
    {
        window.scroll(0,0);
    }


    render() {
        return (
            <Fragment>
                
                <TopNavigation/>
                <CourseDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;