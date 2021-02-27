import React from 'react'

function ListStepsCwf({curProg}) {
    switch(curProg){
        case 0: return (<>
            <div className="cwf_inputlabel">Please attacth letter of request for assistance</div>   
            <div className="input-group inpt-fld">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile04"
                     aria-describedby="inputGroupFileAddon04"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                </div>
            </div>
            <button className="btn btn-outline-secondary mt-3" type="button">Submit letter</button>
        </>);
        case 1: return (<>
             <div className="cwf_inputlabel">Please attacth necessary documents</div>
             <label className="cwf_label mt-3">Brgy/Police blotter</label>
             <div className="input-group inpt-fld">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile04"
                     aria-describedby="inputGroupFileAddon04"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                </div>
            </div>
            <label className="cwf_label mt-1">Medical Certificate</label>
             <div className="input-group inpt-fld">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile04"
                     aria-describedby="inputGroupFileAddon04"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                </div>
            </div>
            <button className="btn btn-outline-secondary mt-3" type="button">Submit documents</button>
        </>)
        case 2: return (<>
            <div className="cwf_inputlabel">Give accurate information to conducting rescue operations</div>
            <label className="cwf_label mt-3">Please Attach document here</label> 
            <div className="input-group inpt-fld">
                <div className="custom-file ">
                    <input type="file" className="custom-file-input" id="inputGroupFile04"
                     aria-describedby="inputGroupFileAddon04"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                </div>
            </div>
            <button className="btn btn-outline-secondary mt-3" type="button">Submit documents</button>
        </>)
        case 3: return (<>
             <div className="cwf_inputlabel">Assist Client for more information</div>
             <label className="cwf_label mt-3">Informations and attends counselling/stress debriefing</label> 
             <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Feedback message</label>
                <div className="inpt-fld">
                    <textarea className="form-control" id="exampleFormControlTextarea1" 
                    placeholder="Enter feedback (Optional)" rows="3"></textarea>
                </div>
            </div>
            <button className="btn btn-outline-secondary" type="button">Submit</button>
        </>)
        case 4: return (<>
            <div className="cwf_inputlabel">Finish, request</div>
             <label className="cwf_label mt-3">Transfer to temporary shelter, for protective custody, if necessary.</label> 
             <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Feedback and questions</label>
                <div className="inpt-fld">
                <textarea className="form-control" id="exampleFormControlTextarea1" 
                    placeholder="Enter feedback (Optional)" rows="3"></textarea>
                </div>
            </div>
            <button className="btn btn-outline-secondary" type="button">Submit</button>
        </>)
        default: break;
    }
}

export default ListStepsCwf
