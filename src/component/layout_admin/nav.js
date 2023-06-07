import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
           
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                    <div className="container-fluid py-1 px-3">
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="input-group  input-group-outline">
                                
                                <input type="text" className="form-control" placeholder='Type here...'/>
                                <span class="input-group-text" id="basic-addon2" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>  
                                </span>
                                

                            </div>
                        </div>
                        </div>
                    </div>
                    </nav>
            
        );
    }
}

export default Nav;