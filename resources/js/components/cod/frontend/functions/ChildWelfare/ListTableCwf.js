import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'  

function ListTableCwf({ url, auth }) {
    const redirect = useHistory();  
    useEffect(()=>{
        (function(){
            if(!auth.users.length > 0) redirect.push(url)
            auth.login()
        })()
    },[])
    
    return (
        <>
        <div className="cwf__subtitle">protective service - rescue operation/case referral</div>
        <div className="cwf__table">
            <div className="cwf__buttons">
                <button type="button" className="btn btn-primary btn-sm" onClick={()=>{
                    $("#req-id").modal({keyboard: false})
                }}>
                    Create request
                </button>
            </div>
            <div className="cwf__tables-container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Subject Title</th>
                            <th scope="col">Accomplishment</th>
                            <th scope="col">Request status</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Request for rescue operation</td>
                            <td>Step 1 - 5, accomplished 0</td>
                            <td>For processing, 01-26-2021:19:28
                            <div className="btn-group" style={{"float":"right"}}>
                                <button type="button" className="btn btn-sm btn-default dropdown-toggle" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button" onClick={()=>{
                                        $("#req-id").modal({keyboard: false})
                                    }}>Edit title</button>
                                    <Link className="dropdown-item" type="button" to={`${url}/psr/1?req=Request for rescue operation`}>Proceed</Link>
                                    <button className="dropdown-item" type="button">Delete</button> 
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Request processed</td>
                            <td>Step 1 - 5, accomplished 5</td>
                            <td>Finished, 01-26-2021:12:00
                            <div className="btn-group" style={{"float":"right"}}>
                                <button type="button" className="btn btn-sm btn-default dropdown-toggle" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button" onClick={()=>{
                                        $("#req-id").modal({keyboard: false})
                                    }}>Edit title</button>
                                    <Link className="dropdown-item" type="button" to={`${url}/psr/1?req=Request processed`}>Proceed</Link>
                                    <button className="dropdown-item" type="button">Delete</button> 
                                </div>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4"> 
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                    </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        </>
    )
}

export default ListTableCwf
