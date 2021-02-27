import React, {Component} from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="main-panel-body">
                    <div class="showbox">
                        <div class="loader">
                            <svg class="circular" viewBox="25 25 50 50">
                                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="15"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}