import React from 'react'

function ProvCertSteps({hlProg , setHLprog}) {
    switch(hlProg){
        case 0 : return (<> 
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>Request form</h4>
                    <p>Please download request intake from (COI)</p>
                    <a href="">Click to download</a>
                </div>
            </div> 
        </>)
        case 1 : return (<>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="">Intake form</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="intake" className="custom-file-input"/>
                                <label htmlFor="intake" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group ml-3">
                        <label htmlFor="">Barangay Certificate</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="brgycert" className="custom-file-input"/>
                                <label htmlFor="brgycert" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="form-group" style={{maxWidth: '40%'}}>
                        <label htmlFor="">Personal letter stating reason for
                        availing Certificate of Indigency</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="avail" className="custom-file-input"/>
                                <label htmlFor="avail" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group ml-3" style={{maxWidth: '40%'}}>
                        <label htmlFor="">Certificate of No Property from
                         Quezon City Assessor’s Office</label>
                         <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="cert" className="custom-file-input"/>
                                <label htmlFor="cert" className="custom-file-label">Choose file</label>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="form-group" style={{maxWidth: '40%'}}>
                        <label htmlFor="">Certificate of None Existing Business from
                         Quezon City Business Permit and licensing Office</label>
                         <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="certofnone" className="custom-file-input"/>
                                <label htmlFor="certofnone" className="custom-file-label">Choose file</label>
                            </div>  
                         </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="form-group">
                    <button className="btn btn-outline-secondary">Submit requirements</button>
                </div>
            </div>
        </>)
        case 2 : return (<>
            <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Important reminder</h4>
                        <p>We will wait for your appointment schedule for interview</p>
                    </div>
                </div>
            </div>
        </>)
        case 3 : return (<>
            <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Feedback and information</h4>
                        <p>
                            All important information he/she mension during interview
                            this attach document will be your references
                        </p>
                        <a href="">Click to download</a>
                    </div>
                </div>
            </div>
        </>)
        case 4 : return (<>
         <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-success" role="alert">
                        <h4>Certificate of Social Case Study Report</h4>
                        <p>Please download this attach file for your reference.</p>
                        <br/>
                        <a href="">Click to download</a>
                    </div>
                </div>
            </div>
        </>)
        default: break;
    }
}

export default ProvCertSteps
