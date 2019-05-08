import React, { Component } from 'react';
import './assets/css/trivia_tuesday.css';

class TriviaTuesday extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="trivia_tuesday" id="tuesday">
          <div className="sec_position">
            <div className="container">
              <div className="text-center cmn_hdr long-after wow fadeInUp">
                <h4>Join us for</h4>
                <h2>Trivia Tuesday</h2>
                <div className="time">
                  <h5>7-9pm EST</h5></div>
                <div className="cmn_p center_p">
                  <p>Meet-up with friends at your favorite bar or restaurant for a weekly trivia night where you play for house and cash prizes. From <span>7-9pm EST every Tuesday</span>. Bring your smartest friends for a night of fun and trivia. Players can join our league which allows them to earn rewards for playing with their trivia crew. The event format is <span>6 rounds of 6 questions each</span>. One event at 7pm EST and another event 8pm EST. Each event covers 6 categories - so 12 categories each night.</p>
                </div>
                <a href="javascript:void(0);" className="btn btn-primary commn_btn">Browse Venues</a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default TriviaTuesday;
