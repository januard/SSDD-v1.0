import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

export default class Referral extends Component {
    constructor(props) {
        super(props);
        this.state = {
            referrals: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1, 
            page_range_displayed: 3,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/vdd/referral/show_referrals')
        .then(response => {
            this.setState({
                referrals: response.data.data,
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
        axios.get('/api/vdd/referral/show_referrals?page='+ page_number)
        .then(response => {
            this.setState({
                referrals: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });
    }
    render() {
        const referralActionBar = () => {
            return (
                <div className="d-inline-block">
                    <button className="btn btn-prmry btn-icn ml-1" onClick={
                        () => {
                            openModal('#modal_new_referral', 'new')
                        }
                    }>
                        <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                        <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Referral</span>
                    </button>
                </div>
            )
        }
        const referralTableBody = (index, referral) => {
            let referral_detail_json = JSON.stringify(referral, null, 2);
            return(
                <tr key={index}>
                    <td>
                        <div>
                            <span><span className="d-inline-block text-muted width-rem-9-375">Name:</span> {referral.first_name} {referral.middle_name} {referral.last_name}</span>
                            <br className="d-block d-sm-block d-md-none" />
                            <br />
                            <span><span className="d-inline-block text-muted width-rem-9-375">Contact Details:</span> {referral.email}, {referral.contact_number}</span>
                            <br className="d-block d-sm-block d-md-none" />
                            <br />
                            <span><span className="d-inline-block text-muted width-rem-9-375">Referred By:</span> {referral.referred_by}</span>
                            <br className="d-block d-sm-block d-md-none" />
                            <br />
                            <span><span className="d-inline-block text-muted width-rem-9-375">Date:</span> {referral.created_at}</span>
                            <br className="d-block d-sm-block d-md-none" />
                            <br />
                            <span>
                                <span className="d-inline-block text-muted width-rem-9-375">CV:</span>
                                <a href={referral.cv} download>View File</a>
                            </span>
                        </div>
                    </td>
                    <td className="vertical-align-top">
                        {
                            (referral.status == 1 ? 
                                `
                                <span className="badge badge-success border-radius-default mr-2 p-1 text-success">
                                    <i class="fas fa-check text-light"></i> 
                                </span>
                                ` : 
                                ``
                            )
                        }
                        
                        <span className="d-none d-sm-none d-md-inline-block">{referral.status == 0 ? 'New' : ''}</span>
                    </td>
                    <td className="text-right">
                        <span className="dropdown">
                            <button type="button" className="btn btn-outln-prmry btn-icn ml-1" data-toggle="dropdown">
                                <i className="fas fa-ellipsis-v icn"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#" className="dropdown-item view-referral-details" onClick={
                                        () => {
                                            openModal('#modal_view_referral_details', 'view')
                                        }
                                    } data={referral_detail_json} data-modal="#modal_view_referral_details">View Details</a>
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
                            <h4 className="card-title d-inline-block flex-grow">Referral</h4>
                            <span className="card-body-action-bar-top">
                                {referralActionBar()}
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
                                        this.state.referrals.map(
                                            (referral, index) => {
                                                return(
                                                    referralTableBody(index, referral)
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