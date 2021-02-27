import React from 'react'

function AdoptASteps({currProg, setHLprog}) {
    switch(currProg){
        case 0: return (<>
        <div className="d-flex flex-column col-md-4 p-0">
            <label htmlFor="">Please attach letter of assistance or inquiry about adoption and processing of CDCLAA</label>
            <div className="input-group inpt-fld">
                <div className="custom-file">
                    <input type="file" id="cdclaa" className="custom-file-input"/>
                    <label htmlFor="cdclaa" className="custom-file-label">Choose file</label>
                </div>
            </div>
        </div>
        <div className="form-group mt-3 col-md-4 p-0">
            <button className="btn btn-outline-secondary">Submit letter</button>
        </div>
        </>)
        case 1: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>IMPORTANT REMINDERS</h4>
                   <p>Wait for my Support team to contact you via email or phone call 
                       please make sure your submitting letter of request attach contact details to your letter.
                   </p>
                </div>
            </div>
        </>)
        case 2: return (<>
            <h4>List of requirements</h4>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column w-25">
                   <div className="form-group">
                        <label htmlFor="sec">Request letter address to Department Head</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="rldd" className="custom-file-input"/>
                                <label htmlFor="rldd" className="custom-file-label">Choose file</label>
                            </div>
                        </div>  
                        <label htmlFor="sec">2x2 oldest photo (3 pieces), same photo used in newspaper publication</label>
                        <div className="input-group ">
                            <div className="custom-file inpt-fld">
                                <input type="file" id="rldd" className="custom-file-input"/>
                                <label htmlFor="rldd" className="custom-file-label">Choose file</label>
                            </div>
                        </div>  
                        <label htmlFor="sec">Affidavit of circumstances of abandonment</label>
                        <div className="input-group">
                            <div className="custom-file inpt-fld">
                                <input type="file" id="rldd" className="custom-file-input"/>
                                <label htmlFor="rldd" className="custom-file-label">Choose file</label>
                            </div>
                        </div>  
                   </div>
                </div>
                <div className="d-flex flex-column ml-3" style={{width: '40%'}}>
                   <div className="form-group ">
                        <label htmlFor="sec">Certificate of Live Birth / Foundling, if available</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="rldd" className="custom-file-input"/>
                                <label htmlFor="rldd" className="custom-file-label">Choose file</label>
                            </div>
                        </div> 
                        <label htmlFor="sec" className="mt-3">Old and recent photo of the child, 3R size, full body (2pcs. each)</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="rldd" className="custom-file-input"/>
                                <label htmlFor="rldd" className="custom-file-label">Choose file</label>
                            </div>
                        </div> 
                   </div>
                   <div className="form-group">
                    <label htmlFor="">Police/Barangay Blotter where the child was found</label>
                    <div className="custom-file inpt-fld">
                        <input type="input" id="blotter" className="form-control" aria-describedby="blottercert"/>
                        <label htmlFor="blotter" className="custom-file-label">Choose file</label>
                    </div>
                    <small id="blottercert" className="form-text text-muted">
                        If barangay blotter, secure certified true copy of the blotter 
                        from the logbook and certificate of blotter issued/signed by
                         the Barangay Chairman using the logo/letterheadof the Barangay</small>
                </div>
                </div>
                <div className="d-flex flex-column ml-3">
                    <div className="form-group">
                        <label htmlFor="sec">Dental age certification, is foundling child</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="rldd" className="custom-file-input"/>
                                <label htmlFor="rldd" className="custom-file-label">Choose file</label>
                            </div>
                        </div>  
                        <label htmlFor="sec" className="mt-3">Medical Certificate, is with diseases</label>
                        <div className="input-group">
                            <div className="custom-file inpt-fld">
                                <input type="file" id="rldd" className="custom-file-input"/>
                                <label htmlFor="rldd" className="custom-file-label">Choose file</label>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-secondary mb-3">Submit Requirements</button>
        </>)
        case 3: return (<>
             <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>IMPORTANT REMINDERS</h4>
                   <p>Wait for your interview via call or videoCall, we will validate your submitted requirements
                   </p>
                </div>
            </div>
        </>)
        case 4: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>IMPORTANT REMINDERS</h4>
                    <p>
                        Your documents already processed, we will prepares submit social case 
                        study report and other needed documents to DSWD.
                    </p>
                </div>
            </div>
        </>)
        case 5: return (<>
              <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>RECEIVED IMPORTANT INFORMATION</h4>
                    <p>Please see attach file</p>
                    <a href="" download>Click here</a>
                </div>
            </div>
        </>)
        default: break;
    }
}

export default AdoptASteps
