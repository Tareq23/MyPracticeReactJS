import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import ProjectDetails from '../components/projectDetails/ProjectDetails';
import TopNavigation from '../components/topNavigation/TopNavigation';

class ProjectDetailsPage extends Component {
    componentDidMount()
    {
        window.scroll(0,0);
    }
    render() {
    
        return (
            <Fragment>
                <TopNavigation titel="Project Details"/>
                <PageTop pageTitle="Project Details" />
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;
