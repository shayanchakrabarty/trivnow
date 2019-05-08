import React, { Component } from 'react';
import './assets/css/home_banner.css';

class HomeBanner extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="banner">
          <div className="banner_content">
            <div className="bnr_ing">
              <img src="/assets/images/banner_area.jpg" alt="" />
            </div>
            <div className="banner_description text-center">
              <div className="container">
                <div className="banner_details wow fadeInLeft">
                  <h1>
                    A community for people <br />who <span>enjoy</span> trivia IRL.
                    </h1>
                  <div className="bnr_txt">
                    <p>Trivia night isn't meant to be played alone.</p>
                  </div>
                  <a href="#tuesday" className="btn btn-primary commn_btn">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}


export default HomeBanner;