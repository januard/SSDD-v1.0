import React from 'react'

function Premarriage({hlProg , setHLprog}) {
   switch(hlProg){
       case 0: return (<>
            <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>Application/Pre-Evaluation</h4>
                    <p>Please download Application from</p>
                    <a href="">Click to download</a>
                </div>
            </div> 
       </>)
       case 1: return (<>
            <div className="d-flex flex-column">
                 <div className="d-flex flex-row">
                      <div className="form-group">
                           <label htmlFor="">Application/Pre-evaluation form</label>
                           <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="appl-pre" className="custom-file-input"/>
                                <label htmlFor="appl-pre" className="custom-file-label">Choose file</label>
                            </div>
                           </div>
                      </div>
                 </div>
                 <div className="d-flex flex-row">
                      <div className="form-group">
                           <label htmlFor="">Application for Marriage License</label>
                           <div className="input-group inpt-fld">
                            <div className="custom-file">
                                    <input type="file" id="app-marriage" className="custom-file-input"/>
                                    <label htmlFor="app-marriage" className="custom-file-label">Choose file</label>
                            </div>
                           </div>
                      </div>
                 </div>
                 <div className="d-flex flex-row">
                      <div className="form-group">
                           <button className="btn btn-outline-secondary">Submit requirements</button>
                    </div>
                 </div>
            </div>
       </>)
       case 2: return (<>
           <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Important reminder</h4>
                        <p>We will wait for your appointment schedule for interview</p>
                    </div>
                </div>
            </div>
       </>)
       case 3: return (<>
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
       case 4: return (<>
           <div className="d-flex flex-column">
                <div className="form-group w-50">
                    <div className="alert alert-success" role="alert">
                        <h4>Receives e-certificate of attendance</h4>
                        <p>Please download this attach file for your reference.</p>
                        <br/>
                        <a href="">Click to download</a>
                    </div>
                </div>
            </div>
       </>)
   }
}

export default Premarriage
