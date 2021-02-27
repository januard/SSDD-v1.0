import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class SideNav extends Component {
    constructor() {
        super();
        this.state = {
            links: [
                {"id": 1, "link": "Dashboard", "icon": "fas fa-chart-bar", "permalink": "/vdd/dashboard", "sub_link": false},
                {"id": 2, "link": "Program", "icon": "fas fa-list-alt", "permalink": "/vdd/program", "sub_link": false},
                {"id": 3, "link": "Services Application", "icon": "fas fa-file-export", "permalink": "/vdd/services_application", "sub_link": false},
                {"id": 4, "link": "Appointment", "icon": "fas fa-calendar-alt", "permalink": "/vdd/appointment", "sub_link": true},
                {"id": 5, "link": "Training", "icon": "fas fa-chalkboard-teacher", "permalink": "/vdd/training", "sub_link": true},
                {"id": 6, "link": "Assistance", "icon": "fas fa-hands-helping", "permalink": "/vdd/assistance", "sub_link": false},
                {"id": 7, "link": "Referral", "icon": "fas fa-user-friends", "permalink": "/vdd/referral", "sub_link": false},
            ], 
            sub_links: [
                {"id": 1, "link_id": 4, "link": "Calendar", "icon": "", "permalink": "/vdd/appointment/calendar"},
                {"id": 2, "link_id": 5, "link": "Schedule", "icon": "", "permalink": "/vdd/training/schedule"},
                {"id": 3, "link_id": 5, "link": "Certification", "icon": "", "permalink": "/vdd/training/certification"},
            ]
        };
    }
    render() {
        return(
            <ul className="nav nav-pills flex-column">
                {
                    this.state.links.map(
                        (link, i) => {
                            let sub_link_container = null;
                            let sub_link_active = null;
                            link.sub_link ? 
                            [
                                sub_link_container = <div className="sub-link-container collapse no-animation xxx" id={(link.link).replace(/[^\w\s]/gi, '').toLowerCase()}>
                                    <ul className="nav nav-pills flex-column">
                                        {
                                            this.state.sub_links.map(
                                                (sub_link, ii) => {
                                                    if(link.id == sub_link.link_id) {
                                                        window.location.pathname == sub_link.permalink ? sub_link_active = 'has' : true;
                                                        return (
                                                            <li className={`nav-item`} key={sub_link.id}>
                                                                <Link to={sub_link.permalink} className={`nav-link sub-nav-link${(window.location.pathname == sub_link.permalink ? ' active' : '')}`}>
                                                                    <i className={sub_link.icon}></i>
                                                                    <span className="label">{sub_link.link}</span>
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                }
                                            )
                                        }
                                    </ul>
                                </div>
                            ] : 
                            true;

                            return (
                                <li className="nav-item" key={link.id}>
                                    {
                                        link.sub_link ? 
                                        <a href="#" className={`nav-link nav-collapse-link${(sub_link_active != null ? ' sub-link-active' : '')}`} data-target={`#${(link.link).replace(/[^\w\s]/gi, "").toLowerCase()}`} data-toggle="collapse">
                                            <span className="icon">
                                                <i className={link.icon}></i>
                                            </span>
                                            <span className="label">{link.link}</span>
                                        </a> : 
                                        <Link to={link.permalink} className={`nav-link${(window.location.pathname == link.permalink ? ' active' : '')}`}>
                                            <span className="icon">
                                                <i className={link.icon}></i>
                                            </span>
                                            <span className="label">{link.link}</span>
                                        </Link>
                                    }
                                    {sub_link_container}
                                </li>
                            );
                        }
                    )
                }
            </ul>
        );
    }
}