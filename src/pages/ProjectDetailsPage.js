import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import PageTop from '../components/pageTop/PageTop';
import ProjectDetails from '../components/projectDetails/ProjectDetails';
import TopNavigation from '../components/topNavigation/TopNavigation';
// import AppUrl from '../restApi/AppUrl';
// import RestClient from '../restApi/RestClient';

class ProjectDetailsPage extends Component {
    constructor({match})
    {
        super();
        this.state = {
            projectId : match.params.projectId,
            projectName : match.params.projectName,
            projectData : [],
        }
    }
    componentDidMount()
    {
        window.scroll(0,0);
        
    }
    render() {
    
        return (
            <Fragment>
                <TopNavigation titel="Project Details"/>
                <PageTop pageTitle={this.state.projectName} />
                <ProjectDetails projectId = {this.state.projectId}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;
