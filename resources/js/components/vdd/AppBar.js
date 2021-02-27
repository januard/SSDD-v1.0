import React, { Component } from 'react';

export default class AppBar extends Component {
    constructor() {
        super();
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    render() {
        return (
            <div className="app-bar">
                <div className="container-fluid">
                    <div className="dropdown">
                        <button className="btn btn-prmry btn-icn action-button float-right raised-button" data-toggle="dropdown">
                            <i className="fas fa-user"></i>
                        </button>
						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="#" onClick={
								(event) => {

                                    event.preventDefault();

                                    let form = document.getElementById('logout_form');
                                    let data = new FormData(form);

                                    document.getElementById('logout_token').value = getAppDetails.csrf_token;
                                    
                                    axios.post('/admin/logout', data)
                                    .then(response => {
                                        window.location.href = '/admin/login';
                                    });

								}
							}>
								Logout
							</a>
							<form id="logout_form" action="/admin/logout" method="POST" style={{display: 'none'}}>
								<input type="hidden" name="_token" value="" id="logout_token" />
							</form>
						</div>
                    </div>
                </div>
            </div>
        );
    }
}