import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

export default class Index extends Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
