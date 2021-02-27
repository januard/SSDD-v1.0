import React from 'react'

function AssistSteps({ hlProg }) {
   switch(hlProg){
       case 0: return (<>
            <div className="d-flex flex-column">
                <div className="alert alert-light w-50" role="alert">
                    Please Fill up intake form
                    <br/>
                    <a href="/">Click to download</a>
                </div>
                <div className="form-group w-25">
                    <label htmlFor="">Please Attach intake form </label>
                    <div className="input-group inpt-fld">
                        <div className="custom-file">
                            <input type="file" id="intakeform" className="custom-file-input"/>
                            <label htmlFor="intakeform" className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-secondary">Submit Form</button>
       </>)
       case 1: return (<>
            <div className="d-flex flex-column">
                <h4>Requirements</h4>
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="">Intake form</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="intakeform" className="custom-file-input"/>
                                <label htmlFor="intakeform" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group ml-3">
                        <label htmlFor="">Barangay Certificate of Residency</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="brgyresidency" className="custom-file-input"/>
                                <label htmlFor="brgyresidency" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="">Barangay Certificate of Indigency</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="brgycert" className="custom-file-input"/>
                                <label htmlFor="brgycert" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group ml-3">
                        <label htmlFor="">Certificate of Enrollment</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="brgycert" className="custom-file-input"/>
                                <label htmlFor="brgycert" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <button className="btn btn-outline-secondary">Submit requirements</button>
                </div>
            </div>
       </>)
       case 2: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>IMPORTANT REMINDERS</h4>
                   <p>
                       Please be advice, your appointment schedule for interview will be on 
                       19th of february 2021. Make sure your not late to avoid unnecessary problems.
                   </p>
                </div>
            </div>
       </>)
       case 3: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>IMPORTANT REMINDERS</h4>
                   <p>
                        Summary Report about Previous interview
                   </p>
                   <a href="">Click here</a>
                </div>
            </div>
       </>)
       case 4: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-success" role="alert">
                    <h4>Recieved EAP</h4>
                   <p>
                        Educational Assistance & supporting documents
                   </p>
                   <a href="">Click here</a>
                </div>
            </div>
       </>)
       default: break;
   }
}

export default AssistSteps
