import Axios from 'axios';
import React, {Component} from 'react';
import Pagination from 'react-js-pagination';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1,
            page_range_displayed: 3,
        };
        this.handlePageChange=this.handlePageChange.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/admin/system/users/show_users')
        .then(response => {
            this.setState({
                users: response.data.data,
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
        axios.get('/api/admin/system/users/show_users?page='+ page_number)
        .then(response => {
            this.setState({
                users: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });
    }
    onDelete(user_id) {
        axios.post('/api/admin/system/users/destroy_user', {
            user_id: user_id
        })
        .then(response => {
            this.componentDidMount();
        });
    }
    render() {

        return (
            <div>
                <div className="main-panel-body">
                    <div className="d-flex">
                        <h4 className="card-title d-inline-block flex-grow">Users</h4>
                        <span className="card-body-action-bar-top">
                            <button className="btn btn-icn btn-prmry btn-sm ml-1" onClick={
                                () => {

                                    let modal = $(document).find('#modal_new_user .modal-content');

                                    modal.find('.content').addClass('d-none');
                                    modal.find('.modal-loader').removeClass('d-none');

                                    $('#modal_new_user').modal('show');

                                    setTimeout(function() {

                                        modal.find('.modal-loader').addClass('d-none');
                                        modal.find('.content').removeClass('d-none');

                                    }, 1500);

                                }
                            }>
                                <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                                <span className="d-none d-sm-none d-md-block pl-3 pr-3">New User</span>
                            </button>
                        </span>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th className="text-right">Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        (user, i) => {

                                            const date = new Date(user.created_at);
                                            const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
                                            const month = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(date);
                                            const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);

                                            let created_at = year +'-'+ month +'-'+ day;

                                            return(
                                                <tr key={i}>
                                                    <td>{user.first_name} {user.middle_name} {user.last_name}</td>
                                                    <td>{user.email}</td>
                                                    <td className="text-right">{created_at}</td>
                                                    <td className="text-right">
                                                        <div className="dropdown">
                                                            <button type="button" className="btn btn-outln-prmry btn-icn" data-toggle="dropdown">
                                                                <i className="fas fa-ellipsis-v icn"></i>
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li>
                                                                    <a href="#" className="dropdown-item">View Details</a>
                                                                    <a href="#" className="dropdown-item edit-user-account" data-id={user.id} onClick={
                                                                        () => {
                                                                                
                                                                            let modal = $(document).find('#modal_edit_user .modal-content');

                                                                            modal.find('.content').addClass('d-none');
                                                                            modal.find('.modal-loader').removeClass('d-none');

                                                                            $('#modal_edit_user').modal('show');

                                                                        }} 
                                                                    >Edit Account</a>
                                                                    <a href="#" className="dropdown-item">Remove Account</a>
                                                                </li>
                                                            </ul>
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