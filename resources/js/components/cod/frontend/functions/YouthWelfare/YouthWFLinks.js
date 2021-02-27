import React from "react";
import { Link } from "react-router-dom";

function YouthWFLinks({ url , auth}) {
    return (
        <>
            <div className="cwf__ListLinks">
                <Link to={`${url}/educ.assistance`} onClick={auth.login}>Educational Assistance for 
                indigent children and youth</Link>
                <div className="cwf__lblTstep">Step 1 to 5 process</div>
            </div>
            <div className="cwf__ListLinks">
                <Link to={`${url}/community.base`} onClick={auth.login}>Community-based diversion/Intervation program of
                Child-in-Conflict with the law</Link>
                <div className="cwf__lblTstep">Step 1 to 5 process</div>
            </div>
        </>
    );
}

export default YouthWFLinks;
