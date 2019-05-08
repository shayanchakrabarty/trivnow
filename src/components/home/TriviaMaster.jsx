import React, { Component } from 'react';
import './assets/css/trivia_master.css';

class TriviaMaster extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="event-sec">
          <div className="container">
            <div className="event-outr">
              <div className="row">
                <div className="col-md-6">
                  <div className="event-innr wow fadeInLeft">
                    <div className="event-pic-outr">
                      <div className="eve-outr">
                        <div className="eve-pic">
                          <img src="/assets/images/event-pic1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="eve-outr">
                        <div className="eve-pic">
                          <img src="/assets/images/event-pic2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="eve-outr">
                        <div className="eve-pic">
                          <img src="/assets/images/event-pic3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="event-innr wow fadeInRight">
                    <div className="cmn_hdr">
                      <h4>Host your own trivia events like a pro</h4>
                      <h2>Trivia Master</h2>
                    </div>
                    <div className="event-list">
                      <ul>
                        <li>
                          <div className="event-list-outr">
                            <h4>1 in 6 bars and restaurants in the U.S. host a weekly trivia night.</h4>
                            <p>Trivia night is a very common marketing tool for bars and restaurants to engage with their patrons and generate recurring business.</p>
                          </div>
                        </li>
                        <li>
                          <div className="event-list-outr">
                            <h4>Engagement with patrons is the strongest driver to growing your trivia night.</h4>
                            <p>Trivnow will handle the tallying of answers, allow players to submit answers from their device, and keep you from having to monitor for cheaters - leaving you with more time to engage with players and grow your crowd!</p>
                          </div>
                        </li>
                        <li>
                          <div className="event-list-outr">
                            <h4>Get paid to have fun at bars and restaurants.</h4>
                            <p>A typical trivia night costs a bar or restaurant $150. That's about <span>$7,000/year in supplemental income </span>for 2 hrs per week of fun!</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <a href="javascript:void(0);" className="btn btn-primary commn_btn">Become a TrivMaster</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    )
  }
}

export default TriviaMaster;