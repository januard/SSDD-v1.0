import React from 'react'

function Appbar() {
    return (
     <div className="app-bar">
        <div className="container-fluid">
            <div className="dropdown">
                <button className="btn btn-prmry btn-icn action-button float-right raised-button" data-toggle="dropdown">
                    <i className="fas fa-user"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Logout</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Appbar
