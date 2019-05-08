import React, { Component } from 'react';
import './assets/css/footer.css';
import './assets/css/responsive.css';
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="ftr-outr">
            <div className="container">
              <div className="trivnow-logo text-center"><a href="/"><img src="/assets/images/trivinow-logo.png" alt="" /></a></div>
              <div className="innr-ftr">
                <div className="comm-ftr wow fadeInUp" data-wow-delay="0.2s" >
                  <div className="ftr-hdr">
                    <h3>Menu</h3>
                    <ul>
                      <li><a href="javascript:void(0);">Trivia Tuesday</a></li>
                      <li><a href="javascript:void(0);">Trivia Master</a></li>
                      <li><a href="javascript:void(0);">Special events</a></li>
                      <li><a href="javascript:void(0);">About</a></li>
                      <li><a href="javascript:void(0);">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="comm-ftr wow fadeInUp" data-wow-delay="0.4s">
                  <div className="ftr-hdr address-bx">
                    <h3>Contact us</h3>
                    <ul>
                      <li><a href="javascript:void(0);"> <i className="fas fa-map-marker-alt"></i>T1041 S Ft Thomas Ave, Fort <br />Thomas, KY 41075, USA</a></li>
                      <li><a href="tel:(012)345 6789"> <i className="fas fa-phone-volume"></i>Call Us: (012) 345 6789</a></li>
                      <li><a href="mailto:info@trivia.com"><i className="fas fa-envelope"></i>Email Us: <em>info@trivia.com</em></a></li>
                    </ul>
                  </div>
                </div>
                <div className="comm-ftr wow fadeInUp" data-wow-delay="0.6s">
                  <div className="ftr-hdr">
                    <h3>Other Links</h3>
                    <ul>
                      <li><a href="javascript:void(0);">Home</a></li>
                      <li><a href="javascript:void(0);">Set up a Venue</a></li>
                      <li><a href="javascript:void(0);">Host with Trivnow</a></li>
                      <li><a href="javascript:void(0);">Help</a></li>
                      <li><a href="javascript:void(0);">Customer Support</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-ftr">
              <div className="copy-right text-center">
                <p>Copyright. <a href="/">Trivia</a>. 2019, All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer;