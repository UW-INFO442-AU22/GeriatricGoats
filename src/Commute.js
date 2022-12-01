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
      <div className="page-info-container">
        <div className="page-header">
          <img src={walkingIcon} alt="Walking figure icon" height="26em" weight="26em"></img>
          <h1 className="page-name">Commute</h1>
        </div>
        <h1 className="page-descr-heading">Play It Safe</h1>
        <p className="page-description">Campus is a large place—trying to navigate dimly lit pathways and sidewalks in the dark can make it all the more daunting to walk alone at night. Learn more about alternatives to walking home and explore commuting resources covered by your U-Pass.</p>
      </div>
      <div className="upass-container">
        <Row xs={1} md={1} lg={2} className="g-0">
          {/* <Col className="upass-card d-flex justify-content-center"> */}
          <Col className="upass-card">
            <img className="upass-img" src={huskyCard} alt="Dubs' Husky card" />
          </Col>
          <Col className="upass-info">
            <h2 className="upass-heading">More Than A Bus Pass</h2>
            <p className="upass-description">Loaded directly onto the Husky Card, the U-PASS provides members with unlimited rides on regional buses, commuter trains, light rail and water taxis as well as full fare coverage on vanpools.</p>
            <Button className="learn-more-btn btn-primary btn-lg outline" href="https://transportation.uw.edu/getting-here/transit/u-pass" role="button" target="_blank">Learn more</Button>
          </Col>
        </Row>
      </div>
      <div className="cards-container">
        <h1 className="cards-header">Explore Commuting Options</h1>
        <p className="cards-description">From NightRide to Husky NightWalk, find a commuting option that works for you.</p>
        <Row sm={1} md={2} lg={3} className="cards-stack g-4">
          <Col>
            <ResourceCard
              imgLink={nightrideImg}
              imgAlt={"NightRide shuttle"}
              header="Mon - Fri • 8:00 pm - 1:30 am"
              title="NightRide"
              description="NightRide shuttles pick up passengers at eight campus locations and drop off passengers anywhere within one of two zones after the campus location stops."
              btnLink="https://transportation.uw.edu/getting-around/shuttles/nightride" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={nightwalkImg}
              imgAlt={"The Quad at night"}
              header="Sun - Sat • 6:30 pm - 2:00 am"
              title="Husky NightWalk"
              description="Uniformed security guards provide a walking escort to community members within the campus locations and the residential area north of 45th St., and to the UW Tower location."
              btnLink="https://www.google.com/maps/d/viewer?mid=1AvFh3QRT8B2ygMYX6FbAuVh3xCE&ll=47.659230905970134%2C-122.30881695&z=15" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={lightrailImg}
              imgAlt={"Link Light Rail"}
              header="Sun - Sat • 5:00 am - 1:00 am"
              title="Bus + Light Rail"
              description="Students can access over a dozen bus routes from campus and two light rail stations (U District Station west of campus and the University of Washington station located south of campus)."
              btnLink="https://www.soundtransit.org/" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
