import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from './AppBar';
import Brand from './Brand';
import MainPanel from './MainPanel';
import SideNav from './SideNav';
import Modal from './Modal';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [], 
            services_applications: [],
            appointments: [], 
            certificates: [],
            assistances: [],
            referrals: [],
        }
    }
    refreshPrograms(programs) {
        this.setState({
            programs: programs
        });
    }
    updateComponentSApplication(services_applications) {
        this.setState({
            services_applications: services_applications
        });
    }
    updateComponentCalendar(appointments) {
        this.setState({
            appointments: appointments
        });
    }
    updateComponentCertificate(certificates) {
        this.setState({
            certificates: certificates
        });
    }
    updateComponentAssistance(assistances) {
        this.setState({
            assistances: assistances
        });
    }
    updateComponentReferral(referrals) {
        this.setState({
            referrals: referrals
        });
    }
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div className="side-navigation">
                        <Brand />
                        <SideNav />
                    </div>
                    <div className="main">
                        <AppBar />
                        <div className="container-fluid">
                            <MainPanel 
                                programs = {this.state.programs} 
                                services_applications = {this.state.services_applications} 
                                certificates = {this.state.certificates} 
                                assistances = {this.state.assistances} 
                                referrals = {this.state.referrals} 
                            />
                        </div>
                    </div>
                </div>
                <Modal 
                    handleRefreshPrograms = {this.refreshPrograms.bind(this)} 
                    handleUpdateComponentSApplication = {this.updateComponentSApplication.bind(this)} 
                    handleUpdateComponentCalendar = {this.updateComponentCalendar.bind(this)} 
                    handleUpdateComponentCertificate = {this.updateComponentCertificate.bind(this)} 
                    handleUpdateComponentAssistance = {this.updateComponentAssistance.bind(this)} 
                    handleUpdateComponentReferral = {this.updateComponentReferral.bind(this)} 
                />
            </Router>
        );
    }
}

if(document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
