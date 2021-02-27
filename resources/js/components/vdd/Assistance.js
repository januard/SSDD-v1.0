import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

export default class Assistance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assistances: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1, 
            page_range_displayed: 3,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/vdd/assistance/show_assistance')
        .then(response => {
            this.setState({
                assistances: response.data.data,
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
        axios.get('/api/vdd/assistance/show_assistance?page='+ page_number)
        .then(response => {
            this.setState({
                assistances: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });
    }
    render() {
        const assistanceActionBar = () => {
            return (
                <div class="d-inline-block">
                    <button className="btn btn-prmry btn-icn ml-1" onClick={
                        () => {
                            openModal('#modal_new_assistance_request', 'new')
                        }
                    }>
                        <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                        <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Assistance Request</span>
                    </button>
                </div>
            );
        }
        const assistanceTableBody = (index, assistance) => {
            let assistance_detail_json = JSON.stringify(assistance, null, 2);
            return(
                <tr key={index}>
                    <td>
                    <div>
                        <span><span className="d-inline-block text-muted width-rem-9-375">Name:</span> {assistance.first_name} {assistance.middle_name} {assistance.last_name}</span>
                        <br className="d-block d-sm-block d-md-none" />
                        <br />
                        <span><span className="d-inline-block text-muted width-rem-9-375">Contact Details:</span> {assistance.email}, {assistance.contact_number}</span>
                        <br className="d-block d-sm-block d-md-none" />
                        <br />
                        <span><span className="d-inline-block text-muted width-rem-9-375">Assisted By:</span> {assistance.created_by}</span>
                        <br className="d-block d-sm-block d-md-none" />
                        <br />
                        <span><span className="d-inline-block text-muted width-rem-9-375">Approved By:</span> -</span>
                        <br className="d-block d-sm-block d-md-none" />
                        <br />
                        <span><span className="d-inline-block text-muted width-rem-9-375">Duration:</span> {assistance.date_start} {assistance.date_end}</span>
                        <br className="d-block d-sm-block d-md-none" />
                        <br />
                        <span><span className="d-inline-block text-muted width-rem-9-375">Attachment:</span> <a href={assistance.attachment} download>View File</a></span>
                    </div>
                    </td>
                    <td className="vertical-align-top">
                        {
                            (assistance.status == 1 ? 
                                `
                                <span className="badge badge-success border-radius-default mr-2 p-1 text-success">
                                    <i class="fas fa-check text-light"></i> 
                                </span>
                                ` : 
                                ``
                            )
                        }
                        
                        <span className="d-none d-sm-none d-md-inline-block">{assistance.status == 0 ? 'New' : ''}</span>
                    </td>
                    <td className="text-right">
                        <span className="dropdown">
                            <button type="button" className="btn btn-outln-prmry btn-icn ml-1" data-toggle="dropdown">
                                <i className="fas fa-ellipsis-v icn"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#" className="dropdown-item view-assistance-details" onClick={
                                        () => {
                                            openModal('#modal_view_assistance_details', 'view')
                                        }
                                    } data={assistance_detail_json} data-modal="#modal_view_assistance_details">View Details</a>
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
        return (
            <div>
                <div className="panel">
                    <div className="main-panel-body">
                        <div className="d-flex">
                            <h4 className="card-title d-inline-block flex-grow">Assistance</h4>
                            <span className="card-body-action-bar-top">
                                {assistanceActionBar()}
                            </span>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Information</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        this.state.assistances.map(
                                            (assistance, index) => {
                                                return(
                                                    assistanceTableBody(index, assistance)                   
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
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}