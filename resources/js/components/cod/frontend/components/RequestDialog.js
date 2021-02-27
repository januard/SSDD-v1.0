import React from "react";

function RequestDialog() {
    return (
        <div className="modal fade" id="req-id" tabIndex="-1" role="dialog" aria-labelledby="reqid"
            aria-hidden="true" data-backdrop="static">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="reqid">
                            Create Request
                        </h5>
                        <button type="button" className="close" data-dismiss="modal"aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="createRequest" className="col-form-label">Request title</label>
                                <div className="inpt-fld">
                                    <input type="text" className="form-control" placeholder="Please input"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button className="btn btn-primary">
                            Create request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestDialog;
