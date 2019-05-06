import React, { Component } from 'react';
import TopVenues from '../home/TopVenues';
import TopPlayers from '../home/TopPlayers';

class Landing extends Component {
  render() {
    return (
      <div>
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

        <section className="players">
          <TopPlayers />
        </section>

        <section className="venues-sec">
          <div className="container"> 

            <TopVenues />

            <div className="venue-bottom">
              <div className="cmn_hdr small-after text-center  wow fadeInUp">
                <h4>Did you get these right?</h4>
                <h2>Event Questions</h2>
              </div>
              
              <div id="horizontalTab">
                <div className="resp-outr">
                  <ul className="resp-tabs-list clearfix">
                    <li> easiest </li>
                    <li> hardest </li>
                  </ul>
                </div>

                <div className="resp-tabs-container">
                  <div className="ques-outr">
                    <p>These were the easiest questions of the night.</p>
                    <div className="ques-innr">
                      <ul>
                        <li className="wow fadeInLeft" data-wow-delay="0.2s">
                          <div className="ques-no">
                            <h5>1.</h5>
                          </div>
                          <div className="ques-ans">
                            <h3>What was the name of the fictional country that was destroyed in Age of Ultron?</h3>
                            <div className="ques-radio">
                              <label className="ques-label">
                                Sokovia
                              <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">Genosha
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">Symkaria
                                                  <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">Latveria
                                                  <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <div className="ques-pic">
                            <img src="/assets/images/ques-pic1.png" alt="" />
                          </div>
                        </li>

                        <li className="wow fadeInRight" data-wow-delay="0.4s">
                          <div className="ques-no">
                            <h5>2.</h5>
                          </div>
                          <div className="ques-ans">
                            <h3>This man is the lead singer for which band?</h3>
                            <div className="ques-radio">
                              <label className="ques-label">Imagine Dragon
                                                  <input type="radio" name="radio1" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">311
                                                  <input type="radio" name="radio1" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">Hootie & The Blowfish
                                                  <input type="radio" name="radio1" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">Soundgarden
                                                  <input type="radio" name="radio1" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <div className="ques-pic">
                            <img src="/assets/images/ques-pic2.png" alt="" />
                          </div>
                        </li>
                        <li className="wow fadeInLeft" data-wow-delay="0.6s">
                          <div className="ques-no">
                            <h5>3.</h5>
                          </div>
                          <div className="ques-ans">
                            <h3>What comes next in this sequence? The Curse of the Black Pearl, Dead Man's Chest,_</h3>
                            <div className="ques-radio">
                              <label className="ques-label">Terror At Sea
                                                  <input type="radio" name="radio2" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">On Stranger Tides
                                                  <input type="radio" name="radio2" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">Dead Men Tell No Tales
                                                  <input type="radio" name="radio2" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="ques-label">At World's End
                                                  <input type="radio" name="radio2" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <div className="ques-pic">
                            <img src="/assets/images/ques-pic3.png" alt="" />
                          </div>
                        </li>
                        
                     

                      </ul>
                    </div>
                  </div>

                  <div className="ques-outr">
                    <p>These were the easiest questions of the night.ggggggggggggggg</p>
                    <div className="ques-innr">
                      <ul>
                        <li className="wow fadeInLeft" data-wow-delay="0.2s">
                          <div className="ques-no">
                            <h5>1.</h5>
                          </div>
                          <div className="ques-ans">
                            <h3>What was the name of the fictional country that was destroyed in Age of Ultron?</h3>
                            <div className="ques-radio">
                              <label className="ques-label">Sokovia
                                                  <input type="radio" name="radio" />
                                  <span className="checkmark"></span>
                                                </label>
                                <label className="ques-label">Genosha
                                                  <input type="radio" name="radio"/>
                                    <span className="checkmark"></span>
                                                </label>
                                  <label className="ques-label">Symkaria
                                                  <input type="radio" name="radio"/>
                                      <span className="checkmark"></span>
                                                </label>
                                    <label className="ques-label">Latveria
                                                  <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                  <div className="ques-pic">
                                    <img src="/assets/images/ques-pic1.png" alt=""/>
                                        </div>
                                     </li>
                                <li className="wow fadeInRight" data-wow-delay="0.4s">
                                  <div className="ques-no">
                                    <h5>2.</h5>
                                  </div>
                                  <div className="ques-ans">
                                    <h3>This man is the lead singer for which band?</h3>
                                    <div className="ques-radio">
                                      <label className="ques-label">Imagine Dragon
                                                  <input type="radio" name="radio1"/>
                                          <span className="checkmark"></span>
                                                </label>
                                        <label className="ques-label">311
                                                  <input type="radio" name="radio1"/>
                                            <span className="checkmark"></span>
                                                </label>
                                          <label className="ques-label">Hootie & The Blowfish
                                                  <input type="radio" name="radio1"/>
                                              <span className="checkmark"></span>
                                                </label>
                                            <label className="ques-label">Soundgarden
                                                  <input type="radio" name="radio1"/>
                                                <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                          <div className="ques-pic">
                            <img src="/assets/images/ques-pic2.png" alt=""/>
                                        </div>
                                     </li>
                                        <li className="wow fadeInLeft" data-wow-delay="0.6s">
                                          <div className="ques-no">
                                            <h5>3.</h5>
                                          </div>
                                          <div className="ques-ans">
                                            <h3>What comes next in this sequence? The Curse of the Black Pearl, Dead Man's Chest,_</h3>
                                            <div className="ques-radio">
                                              <label className="ques-label">Terror At Sea
                                                  <input type="radio" name="radio2" />
                                                  <span className="checkmark"></span>
                                                </label>
                                                <label className="ques-label">On Stranger Tides
                                                  <input type="radio" name="radio2" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                  <label className="ques-label">Dead Men Tell No Tales
                                                  <input type="radio" name="radio2" />
                                                      <span className="checkmark"></span>
                                                </label>
                                                    <label className="ques-label">At World's End
                                                  <input type="radio" name="radio2" />
                                                        <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                                  <div className="ques-pic">
                            <img src="/assets/images/ques-pic3.png" alt=""/>
                                        </div>
                                     </li>
                                 </ul>
                                            </div>
                                          </div>


                </div>

              </div>

            </div>

          </div>
        </section>



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

        <section className="special-event">
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

          <div className="spec-btm-text">Special EveNts</div>
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
        </section>

      </div>
    )
  }
}

export default Landing;