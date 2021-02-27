import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom"; 
import Notification from "./Notification";

function Header({ setActive, users, menulist }) {
    const [menu, setMenu] = useState({}); 
    useEffect(() => {
        (function() {
            setMenu(setActive);
        })();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/qc.cod">
                Logo
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className={`nav-item${menu.cwf ? " active" : ""}`}>
                        <Link
                            className="nav-link"
                            to="/qc.cod/child-welfare"
                            onClick={() => setMenu({ ...menulist(), cwf: true })}
                        >
                            Child Welfare
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className={`nav-item${menu.ywf ? " active" : ""}`}>
                        <Link
                            className="nav-link"
                            to="/qc.cod/youth-welfare"
                            onClick={() => setMenu({ ...menulist(), ywf: true })}
                        >
                            Youth Welfare
                        </Link>
                    </li>
                    <li className={`nav-item${menu.fyf ? " active" : ""}`}>
                        <Link
                            className="nav-link"
                            to="/qc.cod/family-welfare"
                            onClick={() => setMenu({ ...menulist(), fyf: true })}
                        >
                            Family Welfare
                        </Link>
                    </li>
                </ul>
            </div>
            <Notification users={users} />
            {users.length > 0 ? (
                <div className="nav-item dropdown">
                    <a
                        className="nav-link user-action"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <div className="d-flex justify-content-start align-items-center">
                            <img 
                                src="/api/usericon"
                                width="30"
                                height="30"
                                alt=""
                            />
                            <span className="dropdown-toggle ml-2">
                                Mark Joseph ...
                            </span>
                        </div>
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <a className="dropdown-item" href="#">
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            Logout
                        </a>
                    </div>
                </div>
            ) : (
                <form className="form-inline">
                    <button
                        className="btn btn-outline-success"
                        type="submit"
                        onClick={evt => {
                            evt.preventDefault();
                            $("#Dialoglogin-id").modal({
                                keyboard: false
                            });
                        }}
                    >
                        Sign in
                    </button>
                </form>
                
            )}
        </nav>
    );
}

export default Header;
