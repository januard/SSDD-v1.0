import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Listing from './Listing';
import Add from './Add';
import Edit from './Edit';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>    
                    <div>
                        <Link to="/practice/category" className="btn btn-primary">Listing</Link>&nbsp;
                        <Link to="/practice/category/add" className="btn btn-primary">Add</Link>
                        <Route exact path="/practice/category" component={Listing} />
                        <Route exact path="/practice/category/add" component={Add} />
                        <Route exact path="/practice/category/edit/:id" component={Edit} />
                    </div>
                </Router>    
            </div>
        );
    }
}