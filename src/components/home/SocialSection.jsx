import React, { Component } from 'react';
import './assets/css/social_section.css';

class SocialSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-sec">
          <div className="outr-app">
            <div className="get-app">
              <div className="cmn_hdr text-left">
                <h4>Download</h4>
                <h2>Get Trivnow app</h2>
              </div>
              <div className="app-bx-our  wow fadeInRight">
                <div className="app-bx-innr">
                  <a href="javascript:void(0);" className="app-cm-bx">
                    <div className="app-bx"> <i className="fab fa-apple"></i> </div>
                    <div className="app-info">
                      <h4>Download on the</h4>
                      <h3>App Store</h3>
                    </div>
                  </a>
                </div>
                <div className="app-bx-innr">
                  <a href="javascript:void(0);" className="app-cm-bx">
                    <div className="app-bx">  <i className="fab fa-android"></i></div>
                    <div className="app-info">
                      <h4>Get It on</h4>
                      <h3>Android App</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="get-app get-soci  wow fadeInLeft">
              <div className="cmn_hdr text-left">
                <h4>Follow us</h4>
                <h2>Get Social</h2>
              </div>
              <div className="app-bx-our">
                <div className="app-bx-innr">
                  <a href="javascript:void(0);" className="app-cm-bx">
                    <div className="app-bx"> <i className="fab fa-facebook-f"></i> </div>
                    <div className="app-info">
                      <h4>Follow us on</h4>
                      <h3>Facebook</h3>
                    </div>
                  </a>
                </div>
                <div className="app-bx-innr">
                  <a href="javascript:void(0);" className="app-cm-bx">
                    <div className="app-bx"><i className="fab fa-twitter"></i></div>
                    <div className="app-info">
                      <h4>Follow us</h4>
                      <h3>Twitter</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SocialSection;
