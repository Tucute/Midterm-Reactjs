import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer pt-5">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-12">
                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-muted" target="_blank">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-muted" target="_blank">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-muted" target="_blank">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-muted" target="_blank">About</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;