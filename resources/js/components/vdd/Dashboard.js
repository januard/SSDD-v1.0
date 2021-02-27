import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            assistances: [],
            certificates: [],
            programs: [],
            referrals: [],
            services_applications: [],
            total_programs: 0,
        }
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/vdd/dashboard/show_dashboard')
        .then(response => {
            this.setState({
                appointments: response.data.data.appointments, 
                assistances: response.data.data.assistances, 
                certificates: response.data.data.certificates, 
                programs: response.data.data.programs, 
                referrals: response.data.data.referrals, 
                services_applications: response.data.data.services_applications, 
                total_assistances: response.data.data.assistances.length,
                total_appointments: response.data.data.appointments.length,
                total_certificates: response.data.data.certificates.length,
                total_programs: response.data.data.programs.length,
            });
        });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="background-color-info panel">
                            <div className="panel-body">
                                <h6>Programs</h6>
                                <h4 className="text-right">{this.state.total_programs}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="background-color-success panel">
                            <div className="panel-body">
                                <h6>Appointments</h6>
                                <h4 className="text-right">{this.state.total_appointments}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="background-color-warning panel">
                            <div className="panel-body">
                                <h6>Certifications</h6>
                                <h4 className="text-right">{this.state.total_certificates}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="background-color-danger panel">
                            <div className="panel-body">
                                <h6>Assistance</h6>
                                <h4 className="text-right">{this.state.total_assistances}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 height-pct-100-px-20">
                        <div className="panel">
                            <div className="panel-body">
                                <h5>Programs</h5>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Program</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.programs.map(
                                                    (program, i) => {

                                                        if(i < 3) {

                                                            return(
                                                                <tr key={i}>
                                                                    <td>
                                                                        <div className="ellipsis ellipsis-1">
                                                                            ({program.code}) {program.program}
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <span className="ellipsis ellipsis-1">
                                                                            {program.status}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            );

                                                        }

                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right">
                                    <Link to="/vdd/program" className="btn btn-prmry change-pages" onClick={
                                        () => {

                                            let url = '/vdd/program';
		
                                            $.each($('.wrapper .side-navigation').find('li'), function() {

                                                if(url.indexOf($(this).find('a').attr('href')) > -1) {

                                                    $(this).find('a').click();

                                                }

                                            }); 

                                        }
                                    }>See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.services_applications ? 
                            <div className="col-md-7">
                                <div className="panel height-pct-100-px-20">
                                    <div className="panel-body">
                                        <h5>Services Application (New Request)</h5>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Program</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.services_applications.map(
                                                            (application, i) => {
                                                                if(i < 2) {
                                                                    return (
                                                                        <tr key={i}>
                                                                            <td>
                                                                                <span className="ellipsis ellipsis-1">
                                                                                    {application.first_name} {application.middle_name} {application.last_name}
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <span className="ellipsis ellipsis-1">
                                                                                    {application.program}
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <span className="ellipsis ellipsis-1">
                                                                                    {application.created_at}
                                                                                </span>
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                    );
                                                                }
                                                                if(i == 2 && this.state.services_applications.length > 2) {

                                                                    let more_rows = this.state.services_applications.length - 2;

                                                                    return (
                                                                        <tr key={i}>
                                                                            <td colSpan="3">
                                                                                More rows ({more_rows})
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                }
                                                            }
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-right">
                                            <Link to="/vdd/services_application" className="btn btn-prmry change-pages" onClick={
                                                () => {

                                                    let url = '/vdd/services_application';
                
                                                    $.each($('.wrapper .side-navigation').find('li'), function() {

                                                        if(url.indexOf($(this).find('a').attr('href')) > -1) {

                                                            $(this).find('a').click();

                                                        }

                                                    }); 

                                                }
                                            }>See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                    }
                    <div className="col-md-7">
                        <div className="panel">
                            <div className="panel-body">
                                <h5>Appointment</h5>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Appointment</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.appointments.map(
                                                    (appointment, i) => {
                                                        if(i < 2) {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        <div className="ellipsis ellipsis-1">
                                                                            {appointment.appointment}
                                                                        </div>
                                                                        <small>{appointment.program ? appointment.program : 'No data received [Program]'}</small>
                                                                    </td>
                                                                    <td>
                                                                        {appointment.start_date}
                                                                    </td>
                                                                    <td>
                                                                        {appointment.status}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                        if(i == 2 && this.state.appointments.length > 2) {

                                                            let more_rows = this.state.appointments.length - 2;

                                                            return (
                                                                <tr key={i}>
                                                                    <td colSpan="3">
                                                                        More rows ({more_rows})
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right">
                                    <Link to="/vdd/training/appointment" className="btn btn-prmry change-pages" onClick={
                                        () => {

                                            let url = '/vdd/training/appointment';
		
                                            $.each($('.wrapper .side-navigation').find('li'), function() {

                                                if(url.indexOf($(this).find('a').attr('href')) > -1) {

                                                    $(this).find('a').click();

                                                }

                                            }); 

                                        }
                                    }>See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="panel height-pct-100-px-20">
                            <div className="panel-body">
                                <h5>Certification</h5>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Training</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.certificates.map(
                                                    (certificate, i) => {
                                                        if(i < 2) {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        <div className="ellipsis ellipsis-1">
                                                                            {certificate.last_name}, {certificate.first_name}
                                                                        </div>
                                                                        <small>'No data received [Training]'</small>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                        if(i == 2 && this.state.certificates.length > 2) {

                                                            let more_rows = this.state.certificates.length - 2;

                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        More rows ({more_rows})
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right">
                                    <Link to="/vdd/training/certification" className="btn btn-prmry change-pages" onClick={
                                        () => {

                                            let url = '/vdd/training/certification';
		
                                            $.each($('.wrapper .side-navigation').find('li'), function() {

                                                if(url.indexOf($(this).find('a').attr('href')) > -1) {

                                                    $(this).find('a').click();

                                                }

                                            }); 

                                        }
                                    }>See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="panel height-pct-100-px-20">
                            <div className="panel-body">
                                <h5>Assistance</h5>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Assistance</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.assistances.map(
                                                    (assistance, i) => {

                                                        if(i < 1) {

                                                            return(
                                                                <tr key={i}>
                                                                    <td class="w-50">
                                                                        <div>
                                                                            {assistance.first_name} {assistance.middle_name} {assistance.last_name}
                                                                            <br />
                                                                            <small>{assistance.program}</small>
                                                                            <br />
                                                                            <small>{assistance.date_start} - {assistance.date_end}</small>
                                                                        </div>
                                                                    </td>
                                                                    <td>{assistance.status}</td>
                                                                </tr>
                                                            );

                                                        }

                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right">
                                    <Link to="/vdd/assistance" className="btn btn-prmry change-pages" onClick={
                                        () => {

                                            let url = '/vdd/assistance';
		
                                            $.each($('.wrapper .side-navigation').find('li'), function() {

                                                if(url.indexOf($(this).find('a').attr('href')) > -1) {

                                                    $(this).find('a').click();

                                                }

                                            }); 

                                        }
                                    }>See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="panel height-pct-100-px-20">
                            <div className="panel-body">
                                <h5>Referrals</h5>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Information</th>
                                                <th>Referred By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.referrals.map(
                                                    (referral, i) => {
                                                        if(i < 2) {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        <div className="ellipsis ellipsis-1">
                                                                            {referral.last_name}, {referral.first_name}
                                                                        </div>
                                                                        <small>{referral.contact_number}, {referral.email}</small>
                                                                        <br />
                                                                        <a href={referral.cv} download>CV : View File</a>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                        if(i == 2 && this.state.referrals.length > 2) {

                                                            let more_rows = this.state.referrals.length - 2;

                                                            return (
                                                                <tr key={i}>
                                                                    <td>
                                                                        More rows ({more_rows})
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right">
                                    <Link to="/vdd/training/certification" className="btn btn-prmry change-pages" onClick={
                                        () => {

                                            let url = '/vdd/training/certification';
		
                                            $.each($('.wrapper .side-navigation').find('li'), function() {

                                                if(url.indexOf($(this).find('a').attr('href')) > -1) {

                                                    $(this).find('a').click();

                                                }

                                            }); 

                                        }
                                    }>See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}