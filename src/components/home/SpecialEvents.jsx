import React, { Component } from 'react';
import './assets/css/special_events.css';

class SpecialEvents extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="spe-evt-outr">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="spec-des wow fadeInLeft">
                  <div className="cmn_hdr text-left">
                    <h4>Set up a trivia night like never before.</h4>
                    <h2>Special Events</h2>
                  </div>
                  <p>Setup your own trivia night to sell tickets to generate revenue or collect donations. Select the date/time for your event, tell us the topics/categories you want covered, and we'll setup and run the event. We offer two formats: Theme Nights and Fundraisers. Fundraisers give organizations a fun way to connect and engage with donors. Theme Nights are a great way for bars, restaurants, or companies a way to host a fun trivia night for their community. </p>
                  <a href="javascript:void(0);" className="btn btn-primary commn_btn">schedule your own event today</a>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="innr-special-pic wow fadeInRight">
                  <div className="special-pic-bx">
                    <div className="spec-pic"><img src="/assets/images/special-pic1.jpg" /></div>
                    <div className="spec-txt">
                      <h3>Theme Night</h3>
                      <p>A simple solution to hosting a trivia night at your venue or place of business.</p>
                      <div className="leran-more btn btn-primary">Learn More</div>
                    </div>
                  </div>

                  <div className="special-pic-bx">
                    <div className="spec-pic"><img src="/assets/images/special-pic2.jpg" /></div>
                    <div className="spec-txt">
                      <h3>Fundraiser</h3>
                      <p>Host a trivia night fundraiser to raise awareness for your cause or charity.</p>
                      <div className="leran-more btn btn-primary">Learn More</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default SpecialEvents;
