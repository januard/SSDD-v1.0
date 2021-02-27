import React from 'react';
import ReactDOM from 'react-dom'; 
import Index from './layouts/index';
if(document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}   
