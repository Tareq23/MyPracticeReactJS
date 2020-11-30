//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
// import TopBanner from './components/topBanner/TopBanner';
// import Services from './components/services/Services';
// import Analysis from './components/analysis/Analysis';
 import TopNavigation from './components/topNavigation/TopNavigation';
// import Summery from './components/summery/Summery';
// import RecentProject from './components/recentProject/RecentProject';
// import Courses from './components/courses/Courses';
// import Video from './components/video/Video';
// import ClientReview from './components/clientReview/ClientReview';
// import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import PageTop from './components/pageTop/PageTop';
import AboutDescription from './components/aboutDescription/AboutDescription';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactSection from './components/contactSection/ContactSection';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import RefundPage from './pages/RefundPage';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <AppRouter/>
     </BrowserRouter>
    );
  }
}

export default App;
