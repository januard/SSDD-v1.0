import React from 'react'
import { Link } from 'react-router-dom'

function CwfListLinks({url, auth}) {
    return (<>
        <div className="cwf__ListLinks">
            <Link to={`${url}/protective.services`} onClick={auth.login}>
                PROTECTIVE SERVICE – Rescue Operation/Case Referrence
            </Link>
            <div className="cwf__lblTstep">Step 1 to 5 process</div>
        </div>
        <div className="cwf__ListLinks">
            <Link to={`${url}/child.dev.center-learning.center`} onClick={auth.login}>Recognition to Operate Public/Private (CDC/LC)
            </Link>
            <div className="cwf__lblTstep">Step 1 to 8 process</div>
        </div>
        <div className="cwf__LinkLisks d-flex flex-column w-50 mt-1">
            <label htmlFor="" style={{fontWeight: 'bold'}} className="mb-1">ADOPTION</label>
            <div className="form-group pl-3 mb-1">
                <Link to={`${url}/Adoption/a`} onClick={auth.login}>
                    A. Facilitation of Certificate declaring a child as legally avaliable
                    for adoption (CDCLAA) pursuant to republic act 9523
                </Link>
            </div>
            <div className="form-group pl-3 mt-0">
                <Link to={`${url}/Adoption/b`} onClick={auth.login}>
                B. Facilitation of issuance of Certificate of consent to adoption
                </Link>
            </div>
        </div>  
    </>)
}

export default CwfListLinks
