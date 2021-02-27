import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Program from './Program';
import ServicesApplication from './ServicesApplication';
import TrainingSchedule from './TrainingSchedule';
import Calendar from './Calendar';
import Certification from './Certification';
import Assistance from './Assistance';
import Referral from './Referral';

export default class MainPanel extends Component {
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
    componentDidUpdate(previousProps, previousState) {
        if(previousProps.programs !== this.props.programs) {
            this.setState({
                programs: previousProps.programs
            });
        }
        if(previousProps.services_applications !== this.props.services_applications) {
            this.setState({
                services_applications: previousProps.services_applications
            });
        }
        if(previousProps.appointments !== this.props.appointments) {
            this.setState({
                appointments: previousProps.appointments
            });
        }
        if(previousProps.certificates !== this.props.certificates) {
            this.setState({
                certificates: previousProps.certificates
            });
        }
        if(previousProps.assistances !== this.props.assistances) {
            this.setState({
                assistances: previousProps.assistances
            });
        }
        if(previousProps.referrals !== this.props.referrals) {
            this.setState({
                referrals: previousProps.referrals
            });
        }
    }
    render() {

        return(
            <div className="main-panel">
                <Route exact path="/vdd/dashboard" component={Dashboard} />
                <Route 
                    exact 
                    path="/vdd/program" 
                    component={
                        () => <Program 
                            programs = {this.state.programs} 
                        />
                    }
                />
                <Route 
                    exact 
                    path="/vdd/services_application" 
                    component={
                        () => <ServicesApplication 
                            services_applications = {this.state.services_applications} 
                        />
                    }
                />
                <Route 
                    exact 
                    path="/vdd/appointment/calendar" 
                    component={
                        () => <Calendar 
                            appointments = {this.state.appointments}
                        />
                    } 
                />
                <Route exact path="/vdd/training/schedule" component={TrainingSchedule} />
                <Route 
                    exact 
                    path="/vdd/training/certification" 
                    component={
                        () => <Certification 
                            certificates = {this.state.certificates}
                        />
                    } 
                />
                <Route 
                    exact 
                    path="/vdd/assistance" 
                    component={
                        () => <Assistance 
                            assistances = {this.state.assistances}
                        />
                    } 
                />
                <Route 
                    exact 
                    path="/vdd/referral" 
                    component={
                        () => <Referral 
                            referrals = {this.state.referrals}
                        />
                    } 
                />
            </div>
        );

    }

}