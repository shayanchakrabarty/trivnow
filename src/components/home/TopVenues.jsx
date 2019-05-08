import React, { Component } from 'react';
import './assets/css/top_venues.css';
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


class TopVenues extends Component {
  render() {
    var settings = {
      dots: false,
      arrow: true,
      autoplay: true,
      centerMode: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      centerPadding: '0',
      slidesToShow: 3,
      adaptiveHeight: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    return (
      <React.Fragment>
        <div className="venue-top">
          <div className="cmn_hdr small-after wow fadeInUp text-center">
            <h4>Top Venues</h4>
            <h2>Event venues</h2>
          </div>
          <div className="cmn_p center_p text-center">
            <p>The beer these places serve may severely increase your ability to recall useless information.</p>
          </div>
          <div className="venue-outr">
            {/* <div className="venue-slider"> */}
            <div>
              <Slider {...settings}>
                <div className="venue-slide">
                  <div className="special-pic-bx wow fadeInUp" data-wow-delay="0.2s">
                    <div className="spec-pic">
                      <img src="/assets/images/venue-pic1.jpg" alt="" />
                      <div className="spce-logo">
                        <img src="/assets/images/venue-logo1.png" alt="" />
                      </div>
                    </div>
                    <div className="spec-txt">
                      <h3>Decker's LH Grill</h3>
                      <ul>
                        <li><em><img src="/assets/images/tel.png" alt="" /></em><a href="tel:+1 386-228-4289">+1 386-228-4289</a></li>
                        <li><em><img src="/assets/images/web.png" alt="" /></em><a href="#"><b>https://www.deckerslhgrill.com/</b></a></li>
                        <li><em><img src="/assets/images/location.png" alt="" /></em><strong>493 S Lakeview Dr, Lake Helen, <br /> FL 32744, USA</strong></li>
                      </ul>
                      <div className="btn-space">
                        <div className="leran-more btn btn-primary">28 cash winners played here!</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="venue-slide">
                  <div className="special-pic-bx wow fadeInUp" data-wow-delay="0.4s">
                    <div className="spec-pic">
                      <img src="/assets/images/venue-pic2.jpg" alt="" />
                      <div className="spce-logo">
                        <img src="/assets/images/venue-logo2.png" alt="" />
                      </div>
                    </div>
                    <div className="spec-txt">
                      <h3>Olde Fort Pub</h3>
                      <ul>
                        <li><em><img src="/assets/images/tel.png" alt="" /></em><a href="tel:+1 859-441-1927">+1 859-441-1927</a></li>
                        <li><em><img src="/assets/images/web.png" alt="" /></em><b>NONE</b></li>
                        <li><em><img src="/assets/images/location.png" alt="" /></em><strong>1041 S Ft Thomas Ave, Fort <br /> Thomas, KY 41075, USA</strong></li>
                      </ul>
                      <div className="btn-space">
                        <div className="leran-more btn btn-primary">12 cash winners played here!</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="venue-slide">
                  <div className="special-pic-bx wow fadeInUp" data-wow-delay="0.6s">
                    <div className="spec-pic">
                      <img src="/assets/images/venue-pic3.jpg" alt="" />
                      <div className="spce-logo">
                        <img src="/assets/images/venue-logo3.png" alt="" />
                      </div>
                    </div>
                    <div className="spec-txt">
                      <h3>City Limits Taproom</h3>
                      <ul>
                        <li><em><img src="/assets/images/tel.png" alt="" /></em><a href="tel:+1 386-956-6825">+1 386-956-6825</a></li>
                        <li><em><img src="/assets/images/web.png" alt="" /></em><a href="#"><b>https://m.facebook.com/</b></a></li>
                        <li><em><img src="/assets/images/location.png" alt="" /></em><strong>2620 N Woodland Blvd, DeLand,<br /> FL 32720, USA</strong></li>
                      </ul>
                      <div className="btn-space">
                        <div className="leran-more btn btn-primary">11 cash winners played here!</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="venue-slide">
                  <div className="special-pic-bx wow fadeInUp" data-wow-delay="0.2s">
                    <div className="spec-pic">
                      <img src="/assets/images/venue-pic2.jpg" alt="" />
                      <div className="spce-logo">
                        <img src="/assets/images/venue-logo2.png" alt="" />
                      </div>
                    </div>
                    <div className="spec-txt">
                      <h3>Olde Fort Pub</h3>
                      <ul>
                        <li><em><img src="/assets/images/tel.png" alt="" /></em><a href="tel:+1 859-441-1927">+1 859-441-1927</a></li>
                        <li><em><img src="/assets/images/web.png" alt="" /></em><b>NONE</b></li>
                        <li><em><img src="/assets/images/location.png" alt="" /></em><strong>1041 S Ft Thomas Ave, Fort <br /> Thomas, KY 41075, USA</strong></li>
                      </ul>
                      <div className="btn-space">
                        <div className="leran-more btn btn-primary">12 cash winners played here!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TopVenues; 