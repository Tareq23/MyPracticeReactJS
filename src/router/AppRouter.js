import React, { Component, Fragment } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import CoursePage from '../pages/CoursePage';
import RefundPage from '../pages/RefundPage';
import TermsAndConditionPage from '../pages/TermsAndConditionPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRouter extends Component {
    render() 
    {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/refun-policy" component={RefundPage} />
                    <Route exact path="/terms-condition" component={TermsAndConditionPage}/>
                    <Route exact path="/privacy-policy" component={PrivacyPolicyPage}/>
                    <Route exact path="/project-details/:projectId/:projectName" component={ProjectDetailsPage}/>
                    <Route exact path="/course-details/:courseId" component={CourseDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRouter;