import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {without} from 'lodash';
import React, {Component} from 'react';
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
            users: [], 
            roles: [], 
        }
    }
    refreshUsers(users) {
        this.setState({
            users: users
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
                                users = {this.state.users} 
                                roles = {this.state.roles} 
                            />
                        </div>
                    </div>
                </div>
                <Modal 
                    handleRefreshUsers = {this.refreshUsers.bind(this)} 
                />
            </Router>
        );
    }
}

if(document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
