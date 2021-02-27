import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class SideNav extends Component {
    constructor() {
        super();
        this.state = {
            // [links->link] please note no space when sublink is true
            links: [
                {"id": 1, "link": "Dashboard", "icon": "fas fa-chart-bar", "permalink": "/vdd/dashboard", "sub_link": false},
                {"id": 2, "link": "Link 1", "icon": "fas fa-user", "permalink": "/wrd/link1", "sub_link": false},
                {"id": 3, "link": "Link2", "icon": "fas fa-user", "permalink": "#", "sub_link": true},
            ], 
            sub_links: [
                {"id": 1, "link_id": 3, "link": "Sub Link 1", "icon": "", "permalink": "/wrd/link2"},
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
                                                                <Link to={sub_link.permalink} className={`nav-link${(window.location.pathname == sub_link.permalink ? ' active' : '')}`}>
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
                                        <a href="#" className={`nav-link${(sub_link_active != null ? ' sub-link-active' : '')}`} data-target={`#${(link.link).replace(/[^\w\s]/gi, "").toLowerCase()}`} data-toggle="collapse">
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