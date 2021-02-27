import React from "react";

function AdoptionBSteps({ currProg, setHLprog }) {
    switch(currProg){
        case 0: return (<>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="">Psychological report</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="psy" aria-describedby="psychology" className="custom-file-input"/>
                                <label htmlFor="psy" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                        <small id="psychology" className="form-text text-muted">(for 5 years old and above)</small>
                    </div>
                    <label htmlFor="">Health and medical profile</label>
                    <div className="input-group inpt-fld">
                        <div className="custom-file ">
                            <input type="file" id="healt" aria-describedby="healt" className="custom-file-input"/>
                            <label htmlFor="healt" className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                    <small id="healt" className="form-text text-muted">(3 months validity)</small>

                    <label htmlFor="">Recent photograph of the child </label>
                    <div className="input-group inpt-fld">
                        <div className="custom-file">
                            <input type="file" id="psy" aria-describedby="photograph" className="custom-file-input"/>
                            <label htmlFor="psy" className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                    <small id="photograph" className="form-text text-muted">
                    (taken within 3 months)</small>
                </div>
            </div>
            <div className="form-group" style={{marginTop: 10}}>
                <button className="btn btn-outline-secondary mb-3">Submit requirements</button>
            </div>
        </>)
        case 1: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>IMPORTANT REMINDERS</h4>
                   <p>
                       Please wait, We will prepares updates the Social case study report of the child.
                       always check your given email address to your updates documents
                   </p>
                </div>
            </div>
        </>)
        case 2: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>IMPORTANT REMINDERS</h4>
                   <p>
                       Please wait, We will process Present the case of child to matching committee.
                       always check your given email address to your updates documents
                   </p>
                </div>
            </div>
        </>)
        case 3: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-success" role="alert">
                    <h4>APPROVED CERTIFICATE OF CONSENT</h4>
                    <p>Received the Certificate of Consent to Adoption</p>
                    <a href="" download>Click here</a>
                </div>
            </div>
        </>)
        case 4: return (<>
             <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>COMPLIES FILLING</h4>
                    <p>Please attend desire schedule of hiring, 
                        always check your given email address complete list of copy of court decision and 
                        Facilitates registration of the child’s new birth certificate</p>

                    <a href="" download>Click here</a>
                </div>
            </div>
        </>)
        default: break;
    }
}

export default AdoptionBSteps;
