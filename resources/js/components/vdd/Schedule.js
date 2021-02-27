import React, { Component } from 'react';

export default class Schedule extends Component {
    render() {
        return (
            <div>
                <div className="main-panel-body">
                    <div className="d-flex">
                        <h4 className="card-title d-inline-block flex-grow">Schedule</h4>
                        <span className="card-body-action-bar-top">
                            <button className="btn btn-prmry btn-icn ml-1" data-target="#modal_new_schedule" data-toggle="modal">
                                <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                                <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Schedule</span>
                            </button>
                        </span>
                    </div>
                    <div>
                        <button className="btn btn-outln-prmry btn-icn mr-2">
                            <i className="fas fa-angle-left icn"></i>
                        </button>
                        <button className="btn btn-outln-prmry btn-icn mr-4">
                            <i className="fas fa-angle-right icn"></i>
                        </button>
                        <h4 className="d-inline-block m-0 start-date vertical-align-middle">Dec. 27, 2020</h4>
                        <h4 className="d-inline-block m-0 vertical-align-middle">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</h4>
                        <h4 className="d-inline-block end-date m-0 vertical-align-middle">Jan. 02, 2021</h4>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h4 className="badge badge-pill badge-secondary">WEB DEVELOPMENT: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Monday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Tuesday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Wednesday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Thursday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Friday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Saturday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}