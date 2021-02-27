import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1>SPD</h1>
            </div>
        );
    }
}

if(document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
