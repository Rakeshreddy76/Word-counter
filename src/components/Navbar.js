import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.Abouttxt}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" to="/">Action</a></li>
                                    <li><a className="dropdown-item" to="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" to="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
                        </div>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.protoTypes = { Abouttxt: PropTypes.string }
