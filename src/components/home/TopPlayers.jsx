import React, { Component } from 'react';
import Slider from "react-slick";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button class="slick-next" aria-label="Next" type="button" onClick={onClick}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button class="slick-prev" aria-label="Next" type="button" onClick={onClick}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
  );
}

class TopPlayers extends Component {
  render() {
    var settings = {
      centerMode: false,
      arrow: true,
      autoplay: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      centerPadding: '0px',
      slidesToShow: 3,
      responsive: [{
        breakpoint: 992,
        settings: {
          centerPadding: '0',
          slidesToShow: 2
        }
      }, {
        breakpoint: 481,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    };

    return (
      <React.Fragment>
        <div className="container">
          <div className="text-center cmn_hdr small-after wow fadeInUp">
            <h4>Top Players</h4>
            <h2>players</h2>
          </div>
        </div>

        <div className="tab_cl text-center">
          <ul className="nav nav-tabs">
            <li className="active">
              <a data-toggle="tab" href="#box1">
                <div className="players_box">
                  <h3>Standings from <br />April24th 2019 - 4am EST</h3>
                </div>
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#box2">
                <div className="players_box">
                  <h3>Standings from <br />April 24th 2019 - 5am EST</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="slidr_outr tab_cl tab-content">

            <div id="box1" className="rgt_innr tab-pane active show in">
              {/* <div className="slick_outer player_slider"> */}
              <div className="player_slider">
                <Slider {...settings}>
                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>FIRST</h3>
                      </div>

                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="sl-img">
                            <div className="slide_img_area"><img src="/assets/images/slider_mid_logo.png" /></div>
                          </div>
                          <div className="slide_txt_area">
                            <h3>YallPantsSquishy</h3>
                            <p>Speed Round, Round 1, <br /> Round 2, Round 4, Round 5</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>SECOND</h3>
                      </div>
                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="sl-img">
                            <div className="slide_img_area"><img src="/assets/images/slider_mid_logo2.png" /></div>
                          </div>
                          <div className="slide_txt_area">
                            <h3>mwtron22</h3>
                            <p>Round 2, Round 4, <br /> Round 5</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$65</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>THIRD</h3>
                      </div>
                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="sl-img">
                            <div className="slide_img_area"><img src="/assets/images/slider_mid_logo.png" /></div>
                          </div>
                          <div className="slide_txt_area">
                            <h3>bearcats</h3>
                            <p>Round 2, Round 4, <br /> Round 5, Round 6</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$45</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>FIRST</h3>
                      </div>
                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="sl-img">
                            <div className="slide_img_area"><img src="/assets/images/slider_mid_logo2.png" /></div>
                          </div>
                          <div className="slide_txt_area">
                            <h3>YallPantsSquishy</h3>
                            <p>Speed Round, Round 1, Round 2, Round 4, Round 5</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div id="box2" className="rgt_innr tab-pane fade">
              {/* <div className="slick_outer player_slider"> */}
              <div className="player_slider">
                <Slider {...settings}>
                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>FIRST</h3>
                      </div>
                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="slide_img_area"><img src="/assets/images/slider_mid_logo.png" /></div>
                          <div className="slide_txt_area">
                            <h3>YallPantsSquishy</h3>
                            <p>Speed Round, Round 1, Round 2, Round 4, Round 5</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>FIRST</h3>
                      </div>
                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="slide_img_area"><img src="/assets/images/slider_mid_logo.png" /></div>
                          <div className="slide_txt_area">
                            <h3>YallPantsSquishy</h3>
                            <p>Speed Round, Round 1, Round 2, Round 4, Round 5</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$100</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>FIRST</h3>
                      </div>
                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="slide_img_area"><img src="/assets/images/slider_mid_logo.png" /></div>
                          <div className="slide_txt_area">
                            <h3>YallPantsSquishy</h3>
                            <p>Speed Round, Round 1, Round 2, Round 4, Round 5</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$100</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="slick_box_outer">
                    <div className="slick_box_inner">
                      <div className="ver_txt">
                        <h3>FIRST</h3>
                      </div>
                      <div className="hhh">
                        <div className="mid_txt">
                          <div className="slide_img_area"><img src="/assets/images/slider_mid_logo.png" /></div>
                          <div className="slide_txt_area">
                            <h3>YallPantsSquishy</h3>
                            <p>Speed Round, Round 1, Round 2, Round 4, Round 5</p>
                          </div>
                        </div>
                        <div className="side_img">
                          <div className="img_bk">
                            <p>$100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

          </div>
        </div>
        <div className="spec-btm-text">Event Players</div>
      </React.Fragment>
    )
  }
}


export default TopPlayers;
