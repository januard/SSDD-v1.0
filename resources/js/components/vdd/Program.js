import Axios from 'axios';
import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

export default class Program extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [],
            active_page: 1,
            items_count_per_page: 1,
            total_items_count: 1, 
            page_range_displayed: 3,
        }
        this.handlePageChange=this.handlePageChange.bind(this);
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        axios.get('/api/vdd/program/show_programs')
        .then(response => {
            this.setState({
                programs: response.data.data,
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
        axios.get('/api/vdd/program/show_programs?page='+ page_number)
        .then(response => {
            this.setState({
                programs: response.data.data,
                active_page: response.data.current_page,
                items_count_per_page: response.data.per_page,
                total_items_count: response.data.total
            });
        });
    }
    onDelete(program_id) {
        axios.post('/api/vdd/programs/destroy_program', {
            program_id: program_id
        })
        .then(response => {
            this.componentDidMount();
        });
    }

    render() {
        const programActionBar = () => {
            if(getUserDetails.role == 1) {
                return (
                    <div class="d-inline-block">
                        <button className="btn btn-prmry btn-icn ml-1" onClick={
                            () => {
                                openModal('#modal_new_program', 'new')
                            }
                        }>
                            <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                            <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Program</span>
                        </button>
                    </div>
                );
            }
            else {
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
        }
        const programTableBody = (index, program) => {
            let program_detail_json = JSON.stringify(program, null, 2);
            return(
                <tr key={index}>
                    <td>{program.program}</td>
                    <td>{program.code}</td>
                    <td>{program.status}</td>
                    <td className="text-right">
                        {
                            getUserDetails.role != 1 ? 
                                <button className="btn btn-outln-prmry btn-icn ml-1 d-none d-sm-none d-md-inline-block new-request-in-program" onClick={
                                        () => {
                                            openModal('#modal_new_assistance_request', 'new')
                                        }
                                    } data-id={program.program_id} data-program={program.program}
                                >
                                    <span>New Request</span>
                                </button> : 
                                null
                        }                        
                        <span className="dropdown">
                            <button type="button" className="btn btn-outln-prmry btn-icn ml-1" data-toggle="dropdown">
                                <i className="fas fa-ellipsis-v icn"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    {
                                        getUserDetails.role != 1 ? 
                                            <a href="#" className="dropdown-item new-request-in-program" onClick={
                                                () => {
                                                    openModal('#modal_new_assistance_request', 'new')
                                                }
                                            } data-id={program.program_id} data-program={program.program}>New Assistance Request</a> : 
                                        null
                                    }
                                    {
                                        getUserDetails.role == 1 ? 
                                            <a href="#" className="dropdown-item edit-program-account" data-id={program.program_id} onClick={
                                                () => {
                                                    openModal('#modal_edit_program', 'edit')
                                                }
                                            } 
                                            >Edit Program</a> :
                                        null
                                    }
                                    <a href="#" className="dropdown-item view-program-details" onClick={
                                        () => {
                                            openModal('#modal_view_program_details', 'view')
                                        }
                                    } data={program_detail_json} data-modal="#modal_view_program_details">View Details</a>
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
                            <h4 className="card-title d-inline-block flex-grow">Program</h4>
                            <span className="card-body-action-bar-top">
                                {programActionBar()}
                            </span>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Program</th>
                                        <th>Code</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.programs.map(
                                            (program, index) => {
                                                return(
                                                    programTableBody(index, program)
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