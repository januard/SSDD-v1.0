import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

export default class Certification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            certificates: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1, 
            page_range_displayed: 3,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/vdd/training/certification/show_certificates')
        .then(response => {
            this.setState({
                certificates: response.data.data,
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
        axios.get('/api/vdd/training/certification/show_certificates?page='+ page_number)
        .then(response => {
            this.setState({
                certificates: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });
    }
    render() {
        const certificationActionBar = () => {
            return (
                <div className="d-inline-block">
                    <button className="btn btn-prmry btn-icn ml-1" onClick={
                        () => {
                            openModal('#modal_new_certificate', 'new')
                        }
                    }>
                        <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                        <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Certificate</span>
                    </button>
                </div>
            )
        }
        const certificationTableBody = (index, certificate) => {
            return(
                <tr key={index}>
                    <td>{certificate.last_name}, {certificate.first_name} {certificate.middle_name}</td>
                    <td>{certificate.date_of_certification}</td>
                    <td className="text-right">
                        <div className="d-block d-sm-block d-md-none">
                            <div className="dropdown">
                                <button type="button" className="btn btn-outln-prmry btn-icn">
                                    <i className="fas fa-ellipsis-v icn"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#" className="dropdown-item view-certificate-details" onClick={
                                            () => {
                                                alert('This features is under maintenance')
                                            }
                                        } data="" data-modal="#">View Details</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-none d-sm-none d-md-block">
                            <button className="btn btn-outln-prmry btn-icn ml-1" onClick={
                                () => {
                                    alert('This features is under maintenance')
                                }
                            } data="" data-modal="#">
                                <i className="far fa-file-alt icn"></i>
                            </button>
                        </div>
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
                            <h4 className="card-title d-inline-block flex-grow">Certification</h4>
                            <span className="card-body-action-bar-top">
                                {certificationActionBar()}
                            </span>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.certificates.map(
                                            (certificate, index) => {
                                                return(
                                                    certificationTableBody(index, certificate)
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