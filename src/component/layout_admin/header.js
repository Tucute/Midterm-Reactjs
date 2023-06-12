import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
            <div>
                <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                    <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
                    <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                        <span className="ms-1 font-weight-bold text-white">Admin </span>
                    </a>
                    </div>
                    <hr className="horizontal light mt-0 mb-2" />
                    <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className="nav-link text-white btn bg-gradient-primary " >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">dashboard</i>
                            </div>
                            <span className="nav-link-text ms-1">
                                Home
                            </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/add" className="nav-link text-white" >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">store</i>
                            </div>
                            <span className="nav-link-text ms-1">
                                Add product
                            </span>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/user" className="nav-link text-white" >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">table_view</i>
                            </div>
                            <span className="nav-link-text ms-1">User</span>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white " href="quanlyOrder.php">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">table_view</i>
                            </div>
                            <span className="nav-link-text ms-1">Order</span>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white " href="user.php">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">person</i>
                            </div>
                            <span className="nav-link-text ms-1">User</span>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className="mx-3">
                        <a className="btn bg-gradient-primary mt-4 w-100" href="#" type="button">My Admin</a>
                    </div>
                    </div>
                </aside>
            </div>
            <Outlet />
            </>
        );
    }
}

export default Header;