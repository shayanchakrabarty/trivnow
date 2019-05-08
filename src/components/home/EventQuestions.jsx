import React, { Component } from 'react';
import './assets/css/event_questions.css';

class EventQuestions extends Component {
  render() {
    return (
      <React.Fragment>
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


            </div>

          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default EventQuestions;
