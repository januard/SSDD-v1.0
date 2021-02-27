import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Roles from './Roles';
import Users from './Users';

export default class MainPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], 
            roles: [], 
        }
    }
    componentDidUpdate(previousProps, previousState) {
        if(previousProps.users !== this.props.users) {
            this.setState({
                users: previousProps.users
            });
            console.log(previousProps.users);
        }
        if(previousProps.roles !== this.props.roles) {
            this.setState({
                roles: previousProps.roles
            });
            console.log(previousProps.roles);
        }
    }
    render() {
        return(
            <div className="main-panel">
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route 
                    exact 
                    path="/admin/system/roles" 
                    component={
                        () => <Roles roles = {this.state.roles} />
                    } 
                />
                <Route 
                    exact 
                    path="/admin/system/users" 
                    component={
                        () => <Users users = {this.state.users} />
                    }
                />
            </div>
        );
    }
}