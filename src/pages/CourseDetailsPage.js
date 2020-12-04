import React, { Component, Fragment } from 'react';
import CourseDetails from '../components/courseDetails/CourseDetails';
import Footer from '../components/footer/Footer';
import TopNavigation from '../components/topNavigation/TopNavigation';
import AppUrl from '../restApi/AppUrl';
import RestClient from '../restApi/RestClient';

class CourseDetailsPage extends Component {
    constructor({match})
    {
        super();
        this.state = {
            courseId : match.params.courseId,
            courseData : [],
            courseName : "",
        }
    }

    componentDidMount()
    {
        window.scroll(0,0);
        RestClient.GetRequest(AppUrl.courseDetails+"/"+this.state.courseId)
        .then(result=>{
            this.setState({courseData:result,courseName:result[0]['sort_title']})
           // alert(this.state.courseData[0]['sort_title']);
                    })
                    .catch(error=>{

                    });
    }


    render() {
        return (
            <Fragment>
                
                <TopNavigation/>
                <CourseDetails coursePassedData={this.state.courseData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;