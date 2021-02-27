import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Content1 from './Content1';
import Content2 from './Content2';

export default class MainPanel extends Component {

    render() {

        return(
            <div className="main-panel">
                <Route exact path="/wrd/dashboard" component={Dashboard} />
                <Route exact path="/wrd/link1" component={Content1} />
                <Route exact path="/wrd/link2" component={Content2} />
            </div>
        );

    }

}