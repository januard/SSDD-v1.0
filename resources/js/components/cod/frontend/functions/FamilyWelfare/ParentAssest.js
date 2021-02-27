import React from 'react'

function ParentAssest({hlProg , setHLprog}) {
    switch(hlProg){
        case 0 : return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>Request letter of Parenting Capability Assessment</h4>
                    <p>Please download Application from</p>
                    <a href="">Click to download</a>
                </div>
            </div> 
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="">Please submit letter</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="custletter" className="custom-file-input"/>
                                <label htmlFor="custletter" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-secondary">Submit letter</button>
                </div>
            </div>
        </>)
        case 1 : return (<>
          <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Important reminder</h4>
                        <p>Social worker Facilitates interview with the client and home visitation if necessary,</p>
                    </div>
                </div>
            </div>
        </>)
        case 2 : return (<>
        <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Important reminder</h4>
                        <p>Receive the Social Case Study Report with indorsement duly signed by the Department Head</p>
                        <a href="">Click here to download</a>
                    </div>
                </div>
            </div>
        </>)
        case 3 : return (<>
         <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Important reminder</h4>
                        <p> 
                            Schedule Case Conference for discharge and after care
                             monitoring services thru zoom application
                        </p>
                       
                    </div>
                </div>
            </div>
        </>) 
        default: break;
    }
}

export default ParentAssest
