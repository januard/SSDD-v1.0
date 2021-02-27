import React, { Component } from 'react';

export default class AppBar extends Component {
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
								() => {
									document.getElementById('logout_token').value = $('meta[name="csrf-token"]').attr("content");
									document.getElementById('logout_form').submit();
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