import React, {Component} from 'react';
import Pagination from 'react-js-pagination';

export default class Roles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1,
            page_range_displayed: 3,
        };
        this.handlePageChange=this.handlePageChange.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/admin/system/roles/show_roles')
        .then(response => {
            this.setState({
                roles: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total,
            });
        });
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    handlePageChange(page_number) {
        axios.get('/api/admin/system/roles/show_role?page='+ page_number)
        .then(response => {
            this.setState({
                roles: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });
    }
    onDelete(role_id) {
        axios.post('/api/admin/system/roles/destroy_role', {
            role_id: role_id
        })
        .then(response => {
            this.componentDidMount();
        });
    }
    render() {
        return(
            <div>
                <div className="main-panel-body">
                    <div className="d-flex">
                        <h4 className="card-title d-inline-block flex-grow">Roles</h4>
                        <span className="card-body-action-bar-top">
                            <button className="btn btn-icn btn-prmry btn-sm ml-1" data-target="#modal_new_role" data-toggle="modal">
                                <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                                <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Role</span>
                            </button>
                        </span>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.roles.map(
                                        (role, i) => {
                                            return(
                                                <tr key={i}>
                                                    <td>{role.role}</td>
                                                    <td className="text-right">
                                                        <div className="d-block d-sm-block d-md-none">
                                                            <div className="dropdown">
                                                                <button type="button" className="btn btn-outln-prmry btn-icn" data-toggle="dropdown">
                                                                    <i className="fas fa-ellipsis-v icn"></i>
                                                                </button>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a href="#" className="dropdown-item">Edit Role</a>
                                                                        <a href="#" className="dropdown-item">Remove Role</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-sm-none d-md-block">
                                                            <button className="btn btn-outln-prmry btn-icn ml-1" data-target="#modal_edit_role" data-toggle="modal">
                                                                <i className="fas fa-edit icn"></i>
                                                            </button>
                                                            <button className="btn btn-outln-scndry btn-icn ml-1" data-target="#modal_remove_role" data-toggle="modal">
                                                                <i className="fas fa-trash-alt icn"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="float-right">
                        <Pagination 
                            activePage={this.state.active_page}
                            itemsCountPerPage={this.state.items_count_per_page}
                            totalItemsCount={this.state.total_items_count}
                            pageRangeDisplayed={this.state.page_range_displayed}
                            onChange={this.handlePageChange}
                            itemClass='page-item'
                            linkClass='page-link'
                            innerClass='float-right pagination'
                        />
                    </div>
                </div>
            </div>
        );
    }
}