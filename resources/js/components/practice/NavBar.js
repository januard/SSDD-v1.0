import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/Index';

export default class NavBar extends Component {
    render() {
        return(
            <Router>
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <a className="navbar-brand" href="#">Logo</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/practice/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/practice/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/practice/category">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="javascript:void(0)" id="a">Test</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/practice/dashboard" component={Home} />
                    <Route exact path="/practice/about" component={About} />
                    <Route exact path="/practice/category" component={Category} />
                </div>
            </Router>
        );
    }
}