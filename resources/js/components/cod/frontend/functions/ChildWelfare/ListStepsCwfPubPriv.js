import React, { useState } from 'react' 

function ListStepsCwfPubPriv({currProg, sethlprog}) {
   const [checkbox, setCheckbox]=useState(false);
   switch(currProg){
       case 0: return (<>
        <form>
            <div className="form-row">
                <div className="form-group col mb-0">
                    <label htmlFor="nameOfCDC">Name of Child Development Center / Learning Center</label>
                    <div className="inpt-fld">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-check form-check-inline"> 
                        <input type="checkbox" id="publicbox" className="form-check-input" />
                        <label className="form-check-label" htmlFor="publicbox">Public</label>
                    </div>
                    <div className="form-check form-check-inline p-2"> 
                        <input type="checkbox" id="privatebox" onClick={()=>
                            $("#privatebox").prop('checked')?setCheckbox(true):setCheckbox(false)
                        } className="form-check-input"/>
                        <label className="form-check-label" htmlFor="privatebox">Private</label>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="inputState">If Private, indicate type:</label>
                        <div className="inpt-fld">
                            <select id="inputState" className="form-control" disabled={!checkbox}>
                                <option defaultValue>Choose...</option>
                                <option>Church-based</option>
                                <option>Non-government organization / Foundation initiated</option>
                                <option>Community-Based</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group col mb-0">
                    <label htmlFor="inputAddress">Address</label>
                    <div className="inpt-fld">
                        <input type="text" id="inputAddress" className="form-control" aria-describedby="labelAddress"/>
                    </div>
                    <small id="labelAddress" className="form-text text-muted">No / Street / (Brangay/Subdivision)</small>
                    <div className="inpt-fld">
                        <input type="text" id="CityMunicipality" className="form-control" aria-describedby="labelAddress"/>
                    </div>
                    <small id="labelAddress" className="form-text text-muted">
                        (City/Municipality) / Provice / Region</small>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="inputdate">Date Established</label>
                    <div className="inpt-fld">
                        <input type="date" id="inputdate" placeholder="MM/DD/YYYY" className="form-control"/>
                    </div>
                </div>
                <div className="form-group col">
                <label htmlFor="indicate">Early Childhood Programs Offered : </label>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="Infants" value="option1"/>
                        <label className="form-check-label" htmlFor="Infants">Infants</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" 
                        id="Toddlers" value="option1"/>
                        <label className="form-check-label" htmlFor="Toddlers">Toddlers</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" 
                        id="Pre-K1" value="option1"/>
                        <label className="form-check-label" htmlFor="Pre-K1">Pre-K1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" 
                        id="Pre-K2" value="option1"/>
                        <label className="form-check-label" htmlFor="Pre-K2">Pre-K2</label>
                    </div>
                </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="publicCDC">Name of Barangay Captain/Authorized Person (Public CDC)</label>
                    <div className="inpt-fld">
                        <input type="text" id="inputAddress" className="form-control"/>
                    </div>
                </div> 
               <div className="form-group col">
                    <label htmlFor="publicCDC">Name of Administrator/Director/Principal (Private CDC/LC)</label>
                    <div className="inpt-fld">
                        <input type="text" id="inputAddress" className="form-control" disabled={!checkbox} />
                    </div>
               </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="inputAddress">Name/s of Child Development Teacher (s) / Worker (s)</label>
                    <div className="inpt-fld">
                        <input type="text" id="inputAddress" className="form-control" aria-describedby="labelAddress" />
                    </div>
                    <label htmlFor="personcenter" className="mt-2">Telephone/Mobile/Fax No. of the Center</label>
                    <div className="inpt-fld">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group col">
                    <div className="form-group">
                        <label htmlFor="personcenter">Contact Person of the Center</label>
                        <div className="inpt-fld">
                            <input type="text" className="form-control"/>
                        </div>
                        <label htmlFor="personcenter" className="mt-2">E-mail Adress of the Center/Contact Person</label>
                        <div className="inpt-fld">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-outline-secondary mb-4" 
            onClick={()=>sethlprog(1)}>Submit Registration</button>
        </form>
       </>)
       case 1: return (<>
       <h5>REQUIREMENTS</h5>
        <div className="d-flex flex-row">
            <div className="d-flex flex-column w-50">
                <label htmlFor="sec">Photocopy of SEC registration</label>
                <div className="input-group inpt-fld">
                    <div className="custom-file">
                        <input type="file" id="photosec" className="custom-file-input"/>
                        <label htmlFor="photosec" className="custom-file-label">Choose file</label>
                    </div>
                </div>
                <label htmlFor="profile" className="mt-2"> Profile of the center that
                 describes its location, ownership and the goals and objectives and 
                 programs to be offered.</label>
                <div className="input-group inpt-fld">
                    <div className="custom-file">
                        <input type="file" id="photosec" className="custom-file-input"/>
                        <label htmlFor="photosec" className="custom-file-label">Choose file</label>
                    </div>
                </div>
                <label htmlFor="profile" className="mt-2"> Descriptions with pictures of the lot size, 
                indoor and outdoor area, number of buildings/classrooms, facilities, 
                equipment and instructional materials available for effective instruction.</label>
                <div className="input-group inpt-fld">
                    <div className="custom-file">
                        <input type="file" id="photosec" className="custom-file-input"/>
                        <label htmlFor="photosec" className="custom-file-label">Choose file</label>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column w-50 pl-3 pr-3">
                <div className="form-group w-50 mb-2">
                    <label htmlFor="">Number of young children to serve</label>
                    <div className="inpt-fld">
                        <input type="text" className="form-control" placeholder="Enter number"/>
                    </div>
                </div>
                <div className="form-group w-75">
                    <label htmlFor="profile">Attach list of teachers, names of 
                    administrator/principal/director and other staff</label>
                    <div className="input-group inpt-fld">
                        <div className="custom-file">
                            <input type="file" id="photosec" className="custom-file-input"/>
                            <label htmlFor="photosec" className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                </div>
                <div className="form-group w-75">
                    <label htmlFor="">Specific information about the center</label>
                    <div className="inpt-fld">
                        <textarea rows="3" className="form-control"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-outline-secondary mb-4" onClick={()=>sethlprog(2)}>Submit requirements</button>
       </>)
       case 2: return (<>
            <div className="d-flex flex-column">
                <div className="alert alert-light" role="alert">
                    <h4>For Approval</h4>
                    Please wait for approval to issued your e-registrations.
                </div>
                <div className="alert alert-success" role="alert">
                    <h4>Approved!</h4>
                    <p>Your Application submitted has been approved!.</p>
                    <p>Please Proceed to step 3</p>
                </div>
            </div>
       </>)
       case 3: return (<>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="profile" className="mt-2">Request for issuance of permit to operate</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="photosec" className="custom-file-input"/>
                                <label htmlFor="photosec" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-secondary">Submit request</button>
       </>)
       case 4: return (<>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="">Requirements for assessment and evaluation of 
                        the CDC/LC</label>
                        <br/>
                        <a href="/api/evaluation" download>Click here</a>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="profile">Attach and Submit assessment & evaluation checklist</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="photosec" className="custom-file-input"/>
                                <label htmlFor="photosec" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-secondary">Submit</button>
       </>)
       case 5: return (<>
         <div className="d-flex flex-column w-50">
                <div className="alert alert-light" role="alert">
                    <h4>Received permit to Operate</h4>
                    <p>Please see attach file</p>
                    <a href="" download>Click here</a>
                </div>
            </div>
       </>)
       case 6: return (<>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <div className="form-group">
                        <label htmlFor="profile" className="mt-2">Request for issuance of recognition</label>
                        <div className="input-group inpt-fld">
                            <div className="custom-file">
                                <input type="file" id="photosec" className="custom-file-input"/>
                                <label htmlFor="photosec" className="custom-file-label">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-secondary">Submit request</button>
       </>)
       case 7: return (<>
             <div className="d-flex flex-column">
                 
                <div className="d-flex flex-column w-50">
                    <div className="alert alert-light" role="alert">
                        <h4>Received permit to Operate</h4>
                        <p>Please see attach file</p>
                        <div className="form-group">
                            <label htmlFor="">Compliance of the requirements for issuance of recognition</label>
                            <br/>
                            <a href="/api/evaluation" download>Click here</a>
                        </div>
                        <a href="" download>Receive Recognition </a>
                    </div>
                </div>
            </div>
       
       </>)
   }
}

export default ListStepsCwfPubPriv
