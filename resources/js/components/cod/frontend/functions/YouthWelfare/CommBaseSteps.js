import React from 'react'

function CommBaseSteps({hlProg, setHLprog}) {
    switch(hlProg){
        case 0: return (<>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className="form-group ">
                        <label htmlFor="">Request letter of assistance</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="assist"/>
                                <label htmlFor="assist" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-secondary">Submit Request</button>
                </div>
            </div>
            
        </>)
        case 1: return (<>
            <div className="d-flex flex-column">
                <h4>List of requirements</h4>
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="">Brgy/Blotter or Police Reports</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="brgy-blotter" className="custom-file-input"/>
                                <label htmlFor="bry-blotter" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group ml-4">
                        <label htmlFor="">Medical certificate</label>
                        <div className="input-group inpt-fld">
                            <input type="file" id="medicalcert" className="custom-file-input"/>
                            <label htmlFor="medicalcert" className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="">Birth certificate</label>
                        <div className="input-group inpt-fld">
                            <input type="file" id="birthcert" className="custom-file-input"/>
                            <label htmlFor="birthcert" className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-outline-secondary">Submit requirements</button>
            </div>
        </>)
        case 2: return (<>
            <div className="d-flex flex-column">
                <div className="alert alert-light w-50" role="alert">
                    <h4>Important information</h4>
                    <p>Please wait for a few days, We will conduct an interview and counselling to under go
                     intervention/diversion contract</p>
                </div>
            </div>
        </>)
        case 3: return (<>
            <div className="d-flex flex-column">
                <div className="alert alert-light w-50" role="alert">
                    <h4>Important information</h4>
                    <p>We will submit all supporting documents to the
                         office of city prosecutor for recommedation for intervention/diversion program</p>
                </div>
            </div>
        </>)
        case 4: return (<>
            <div className="d-flex flex-column">
                <div className="alert alert-success w-50" role="alert">
                    <h4>Details</h4>
                    <p>We will Assist your CICL for intervention/diversion program.</p>
                </div>
            </div>
        </>)
    }
}

export default CommBaseSteps
