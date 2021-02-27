import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-inverse navbar-expand-md bg-prmry navbar-dark">
            <div className="container">
                <a href="#0" className="navbar-brand">WRD Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNarbar" aria-expanded="true">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNarbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#0" className="nav-link">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
