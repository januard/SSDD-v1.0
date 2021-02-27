import Axios from 'axios';
import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

export default class ServicesApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services_applications: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1, 
            page_range_displayed: 3,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/vdd/services_application/show_services_applications')
        .then(response => {
            this.setState({
                services_applications: response.data.data,
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
        axios.get('/api/vdd/services_application/show_services_applications?page='+ page_number)
        .then(response => {
            this.setState({
                services_applications: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });
    }
    render() {
        const servicesApplicationActionBar = () => {
            return (
                <div className="d-inline-block">
                    <button className="btn btn-prmry btn-icn ml-1" onClick={
                        () => {
                            openModal('#modal_new_services_application', 'new')
                        }
                    }>
                        <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                        <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Services Application</span>
                    </button>
                </div>
            );
        }
        const servicesApplicationTableBody = (index, services_application) => {
            let services_application_detail_json = JSON.stringify(services_application, null, 2);
            return(
                <tr key={index}>
                    <td>{services_application.last_name}, {services_application.first_name} {services_application.middle_name}</td>
                    <td>{services_application.program}</td>
                    <td>{convertStatusCodeToValue('services_applications', services_application.status)}</td>
                    <td className="text-right">
                        {
                            getUserDetails.role != 1 ? 
                                <button className="btn btn-outln-prmry btn-icn ml-1 d-none d-sm-none d-md-inline-block view-services-application-details" onClick={
                                        () => {
                                            openModal('#modal_view_services_application_details', 'view')
                                        }
                                    } data={services_application_detail_json} data-modal="#modal_view_services_application_details" 
                                >
                                    <span>View Details</span>
                                </button> : 
                                null
                        }                        
                        <span className="dropdown">
                            <button type="button" className="btn btn-outln-prmry btn-icn ml-1 d-lg-none d-md-none" data-toggle="dropdown">
                                <i className="fas fa-ellipsis-v icn"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#" className="dropdown-item view-services-application-details" onClick={
                                        () => {
                                            openModal('#modal_view_services_application_details', 'view')
                                        }
                                    } data={services_application_detail_json} data-modal="#modal_view_services_application_details">View Details</a>
                                </li>
                            </ul>
                        </span>
                    </td>
                </tr>
            );
        }
        const openModal = (modal_reference, type) => {
            let modal_content_container = $(document).find(modal_reference +' .modal-content');
            modal_content_container.find('.content').addClass('d-none');
            modal_content_container.find('.modal-loader').removeClass('d-none');
            $(modal_reference).modal('show');
            if(type == 'new') {
                setTimeout(function() {
                    modal_content_container.find('.modal-loader').addClass('d-none');
                    modal_content_container.find('.content').removeClass('d-none');
                }, 1500);
            }
        }
        const convertStatusCodeToValue = (category, code) => {
            if(category == 'services_applications') {
                let status = '';
                switch(code) {
                    case '0':
                        status = 'New';
                        break;
                    case '1':
                        status = 'Pending';
                        break;
                    case '2':
                        status = 'For Appointment';
                        break;
                    case '3':
                        status = 'Declined';
                        break;
                    default:
                        status = 'Deleted';
                }
                return status;
            }
        }
        return (
            <div>
                <div className="panel">
                    <div className="main-panel-body">
                        <div className="d-flex">
                            <h4 className="card-title d-inline-block flex-grow">Services Application</h4>
                            <span className="card-body-action-bar-top">
                                {servicesApplicationActionBar()}
                            </span>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Client Name</th>
                                        <th>Program</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.services_applications.map(
                                            (application, index) => {
                                                return(
                                                    servicesApplicationTableBody(index, application)
                                                )
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
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}