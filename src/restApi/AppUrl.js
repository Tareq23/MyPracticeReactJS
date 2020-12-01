// import React, { Component } from 'react';

class AppUrl{

    static baseUrl = 'http://127.0.0.1:8000/select';

    static totalProjectClient = this.baseUrl + '/total-project-client';
    static projectDetails = this.baseUrl +  '/project-details';
    static project = this.baseUrl +  '/project';
    static projectAll = this.baseUrl + '/project-all';
    static homePageEtc = this.baseUrl + '/home-page-etc';
    static info = this.baseUrl + '/info';
    static service = this.baseUrl + '/service';
    static footer = this.baseUrl + '/footer';
    static courseDetails = this.baseUrl + '/course-details';
    static courseAll = this.baseUrl + '/course-all';
    static course = this.baseUrl + '/course';
    static contact = this.baseUrl + '/contact';
    static clientReview = this.baseUrl + '/client-review';
    static chartData = this.baseUrl + '/chart-data';
    static techDes = this.baseUrl + '/tech-des';

}

export default AppUrl;