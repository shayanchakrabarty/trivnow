import React, { Component } from 'react';
import './assets/css/navbar.css';
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="hdr-inn">
            <div className="container">
              <div className="d-sm-flex justify-content-sm-between align-items-center hdr_pad">
                <div className="logo-sec">
                  <a className="logo" href=""><img src="/assets/images/hdr_logo.png" alt="" className="img-fluid" /> </a>
                </div>
                <div className="rght-menu d-sm-flex align-items-center right-side-menu">
                  <div className="navbar-header">
                    <nav className="navbar navbar-expand-md navbar-light">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        {/* <span class="nav-txt">Menu</span> */}
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a className="nav-link active" href="#">Trivia Tuesday</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#why_atm">Trivia Master</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#client_logo">Special events</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#our_fleet">About</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#event_bank">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="hdr-btn">
                    <a href="javascript:void(0);" className="btn btn-primary login">LOGIN</a>
                    <a href="javascript:void(0);" className="btn btn-primary sign-up">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Navbar;