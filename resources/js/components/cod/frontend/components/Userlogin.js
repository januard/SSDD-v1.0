import React from "react"; 
import { useDataSet } from "./dataSet";

function Userlogin() {
    const [state, dispatch] = useDataSet(); 
    return (
        <div
            className="modal fade"
            id="Dialoglogin-id"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="reqid"
            aria-hidden="true"
            data-backdrop="static"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="reqid">
                            Authentication Login
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="form-group">
                                <label
                                    htmlFor="createRequest"
                                    className="col-form-label"
                                >
                                    Username
                                </label>
                                <div className="inpt-fld">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-form-label">
                                    Password
                                </label>
                                <div className="inpt-fld">
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                dispatch({ type: "login" }); 
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userlogin;
