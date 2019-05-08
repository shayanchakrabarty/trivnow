import React, { Component } from 'react';
import TopVenues from '../home/TopVenues';
import TopPlayers from '../home/TopPlayers';
import HomeBanner from '../home/HomeBanner';
import TriviaTuesday from '../home/TriviaTuesday'; 
import EventQuestions from '../home/EventQuestions';
import TriviaMaster from '../home/TriviaMaster';
import SpecialEvents from '../home/SpecialEvents';
import SocialSection from '../home/SocialSection';

class Landing extends Component {
  render() {
    return (
      <React.Fragment>

        <HomeBanner />
        <TriviaTuesday />
        <TopPlayers />
       
        <section className="venues-sec">
          <div className="container"> 
            <TopVenues />
            <EventQuestions />
          </div>
        </section>

        <TriviaMaster />

        <section className="special-event">
          <SpecialEvents/>
          <div className="spec-btm-text">Special EveNts</div>
          <SocialSection/>
        </section>

      </React.Fragment>
    )
  }
}

export default Landing;