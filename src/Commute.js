import "./css/Commute.css";
import { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import ResourceCard from "./Card.js";
import nightrideImg from "./img/nightride.jpg";
import nightwalkImg from "./img/nightwalk.jpg";
import walkingIcon from "./img/walking.png";
import lightrailImg from "./img/lightrail.jpg";
import huskyCard from "./img/husky-card.png";

// Commuting resources page

export function Commute() {

  // Unique background image for Commute page
  useEffect(() => { document.querySelector("body").classList.add("commute-body") });

  return (
    <div>
      <div className="header-container">
        <div className="page-header">
          <img src={walkingIcon} alt="Walking figure icon" height="26em" weight="26em"></img>
          <h1 id="page-name">Commute</h1>
        </div>
        <h2 className="header-heading">Play It Safe</h2>
        <p className="page-description">The University of Washington campus is a large place, and attempting to navigate dimly lit pathways and sidewalks in the dark can make it all the more daunting to walk alone at night. Learn more about alternatives to walking home and explore commuting resources covered by your U-Pass.</p>
      </div>
      <div className="content-container">
        <Row xs={1} md={2} className="g-2">
          <Col>
            <img className="header-img" src={huskyCard} alt="Dubs' Husky card" />
          </Col>
          <Col>
            <h3 className="content-subheading">More Than A Bus Pass</h3>
            <p className="page-description">Loaded directly onto the Husky Card, the U-PASS provides members with unlimited rides on regional buses, commuter trains, light rail and water taxis as well as full fare coverage on vanpools.</p>
            <Button className="learn-more-btn btn-primary btn-lg outline" href="https://transportation.uw.edu/getting-here/transit/u-pass" role="button" target="_blank">Learn more</Button>
          </Col>
        </Row>
      </div>
      <div className="cards-container">
        <h2 className="cards-header">Explore Commuting Options</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <ResourceCard
              imgLink={nightrideImg}
              imgAlt={"NightRide shuttle"}
              title="NightRide"
              description="A fare-free, safe and easy way for Husky Card holders to get home at night. NightRide shuttles pick up passengers at eight campus locations and drop off passengers anywhere within one of two zones after the campus location stops."
              btnLink="https://transportation.uw.edu/getting-around/shuttles/nightride" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={nightwalkImg}
              imgAlt={"The Quad at night"}
              title="NightWalk"
              description="Uniformed security guards provide a walking escort to community members within the campus locations and the residential area north of 45th St., and to the UW Tower location. Guards can also assist building and office lockouts, as well as jump start dead car batteries."
              btnLink="https://www.google.com/maps/d/viewer?mid=1AvFh3QRT8B2ygMYX6FbAuVh3xCE&ll=47.659230905970134%2C-122.30881695&z=15" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={lightrailImg}
              imgAlt={"Link Light Rail"}
              title="Bus + Light Rail"
              description="With over a dozen bus routes from campus and two light rail stations (U District Station west of campus and the University of Washington station located south of campus), students can leverage their U-Pass to commute at night time instead of walking home by themselves."
              btnLink="https://pugetsound.onebusaway.org/#75402" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
