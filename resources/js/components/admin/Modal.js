import Axios from 'axios';
import React, {Component} from 'react';

export default class Modal extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            roles: [],
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateUser = this.onUpdateUser.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    updateUsers() {
        this.setState({
            users: []
        });
        this.onRefreshUsers([]);
    }
    showRoles() {
        axios.get('/api/admin/system/roles/show_roles')
        .then(response => {
            this.setState({
                roles: response.data.data
            });
        });
    }
    componentDidMount() {
        //this.showUsers();
        this.showRoles();
    }
    onSubmit(event) {
        event.preventDefault();
        let form = document.getElementById('form_new_user');
        let data = new FormData(form);
        axios.post('/api/admin/system/users/store_user', data)
        .then(response => {
            response.data.error_count == 0 ? [$('#modal_new_user').modal('hide'), this.updateUsers()] : true;
            alert(response.data.data.message);
        }).catch(error => {
            console.log(error.data);
        });
    }
    onUpdateUser(event) {
        event.preventDefault();
        let form = document.getElementById('form_edit_user');
        let data = new FormData(document.getElementById('form_edit_user'));
        axios.post('/api/admin/system/users/update_user', data)
        .then(response => {
            response.data.error_count == 0 ? [$('#modal_edit_user').modal('hide'), this.updateUsers()] : true;
            alert(response.data.data.message);
        }).catch(error => {
            console.log(error.data);
        });
    }
    onRefreshUsers(users) {
        this.props.handleRefreshUsers(users);
    }
    render() {

        let modal_loader = <div className="modal-loader d-none">
            <div className="modal-header">
                <div className="header-loader"></div>
                <h4 className="modal-title">&nbsp;</h4>
            </div>
            <div className="modal-body">
                <div className="loader-body-1"></div>
                <div className="loader-body-2"></div>
                <div className="loader-body-3"></div>
                <div className="loader-body-4"></div>
                <div className="clearfix"></div>
            </div>
        </div>

        return(
            <div>
                <div className="modal" id="modal_new_user">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.onSubmit} id="form_new_user">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <div className="header-loader"></div>
                                        <h4 className="modal-title">New User</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="first_name" placeholder="Firstname" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="middle_name" placeholder="Middlename" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="last_name" placeholder="Lastname" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="email" name="email" placeholder="Email" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="username" placeholder="Username" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="password" name="password" placeholder="Password" className="form-control" id="password" aria-label="Password" aria-describedby="password-addon1" />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text" id="password-addon1">
                                                                    <a href="#" onClick={() => {togglePasswordVisibility('password', 'password_icon')}}>
                                                                        <i className="fas fa-eye" id="password_icon"></i>
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="password" name="confirm_password" placeholder="Confirm Password" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="role" id="role" value="1" readOnly />
                                                            <input type="text" name="role_value" placeholder="Role" className="form-control" id="role_value" aria-label="Role" aria-describedby="role-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="role-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right w-100">
                                                                        {
                                                                            this.state.roles.map(
                                                                                role => {
                                                                                    return(
                                                                                        <a key={role.role_id} href="#" className="dropdown-item" onClick={() => {
                                                                                            document.getElementById('role').value = role.role_id;
                                                                                            document.getElementById('role_value').value = role.role;
                                                                                        }}>{role.role}</a>
                                                                                    )
                                                                                }
                                                                            )
                                                                        }
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="text" name="portal" placeholder="Portal" className="form-control" id="portal" aria-label="Portal" aria-describedby="portal-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="portal-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right w-100">
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('portal').value = 'ADMIN';
                                                                        }}>ADMIN</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('portal').value = 'COD';
                                                                        }}>COD</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('portal').value = 'SPD';
                                                                        }}>SPD</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('portal').value = 'VDD';
                                                                        }}>VDD</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('portal').value = 'WRD';
                                                                        }}>WRD</a>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Create</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal" id="modal_edit_user">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.onUpdateUser} id="form_edit_user">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Edit User</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="first_name" placeholder="Firstname" className="form-control" id="first_name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="middle_name" placeholder="Middlename" className="form-control" id="middle_name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="last_name" placeholder="Lastname" className="form-control" id="last_name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="email" name="email" placeholder="Email" className="form-control" id="email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="role" id="edit_role" readOnly />
                                                            <input type="text" name="role_value" placeholder="Role" className="form-control" id="edit_role_value" aria-label="Role" aria-describedby="role-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="role-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right w-100">
                                                                        {
                                                                            this.state.roles.map(
                                                                                role => {
                                                                                    return(
                                                                                        <a key={role.role_id} href="#" className="dropdown-item edit-user-role" data-id={role.role_id} onClick={() => {
                                                                                            document.getElementById('edit_role').value = role.role_id;
                                                                                            document.getElementById('edit_role_value').value = role.role;
                                                                                        }}>{role.role}</a>
                                                                                    )
                                                                                }
                                                                            )
                                                                        }
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="text" name="portal" placeholder="Portal" className="form-control" id="edit_portal" aria-label="Portal" aria-describedby="edit-portal-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="edit-portal-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right w-100">
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('edit_portal').value = 'ADMIN';
                                                                        }}>ADMIN</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('edit_portal').value = 'COD';
                                                                        }}>COD</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('edit_portal').value = 'SPD';
                                                                        }}>SPD</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('edit_portal').value = 'VDD';
                                                                        }}>VDD</a>
                                                                        <a href="#" className="dropdown-item" onClick={() => {
                                                                            document.getElementById('edit_portal').value = 'WRD';
                                                                        }}>WRD</a>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal" id="modal_new_role">
                    <div className="modal-dialog">
                        <form onSubmit={this.onSubmitRole} id="form_new_role">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">New Role</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="inpt-fld">
                                                    <input type="text" name="role" placeholder="Role" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-prmry">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}