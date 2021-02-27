import React from 'react'
import { Link } from 'react-router-dom'

function FamilyLinks({ URL , auth}) {
    return (
        <>
           <div className="cwf__ListLinks">
                <Link to={`${URL}/provision.philhealth`} onClick={auth.login}>PROVISION OF PHILHEALTH</Link>
                <div className="cwf__lblTstep">Step 1 to 4 process</div>
            </div> 
           <div className="cwf__ListLinks">
                <Link to={`${URL}/provision.cert.indegency`} onClick={auth.login}>Provision of certificate of indigency (COI)</Link>
                <div className="cwf__lblTstep">Step 1 to 5 process</div>
            </div> 
           <div className="cwf__ListLinks">
                <Link to={`${URL}/pre-marriage`} onClick={auth.login}>Pre-marriage counseling application</Link>
                <div className="cwf__lblTstep">Step 1 to 5 process</div>
            </div> 
           <div className="cwf__ListLinks">
                <Link to={`${URL}/parenting.assessment`} onClick={auth.login}>Parenting capability assessment report</Link>
                <div className="cwf__lblTstep">Step 1 to 4 process</div>
            </div> 
            
        </>
    )
}

export default FamilyLinks
