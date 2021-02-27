import React from 'react'

function ProvphilStep({hlProg , setHLprog}) {
    switch(hlProg){
        case 0 : return (<>
            <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Important reminders</h4>
                        Please download fill up form for PMRF, this Form needed for next step as requirements <br/>
                        <a href="">Click to download</a>
                    </div>
                </div>
            </div>
        </>)
        case 1 : return (<>
            <div className="d-flex flex-row">
                <h4>List of requirements</h4>
            </div>
            <div className="d-flex flex-column mt-3">
                <div className="d-flex flex-row">
                    <div className="form-group mr-3" style={{maxWidth:'35%'}}>
                        <label htmlFor="">PMRF Form</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="PMRF" className="custom-file-input"/>
                                <label htmlFor="PMRF" className="custom-file-label">Choose file</label>
                            </div>  
                        </div>
                    </div>
                    <div className="form-group mr-3" style={{maxWidth: '35%'}}>
                        <label htmlFor="">Barangay Indigency</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="brgindigency" className="custom-file-input"/>
                                <label htmlFor="brgindigency" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="form-group mr-3" style={{maxWidth: '35%'}}>
                        <label htmlFor="">Referral letter/medical certificate from QC health departmen or goverment
                         hospital</label>
                        <div className="input-group inpt-fld">
                            <input type="file" id="refme" className="custom-file-input"/>
                            <label htmlFor="refmed" className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <button className="btn btn-outline-secondary">Submit Requirements</button>
                    </div>
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
                    <div className="alert alert-success" role="alert">
                        <h4>Provision of Certification</h4>
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

export default ProvphilStep
