import "./css/Commute.css";
import { Col, Row } from "react-bootstrap";
import ResourceCard from "./Card.js";
import buses from "./img/buses.png";
import nightrideImg from "./img/nightride.jpg";
import nightwalkImg from "./img/nightwalk.jpg";
import walkingIcon from "./img/walking.png";
import lightrailImg from "./img/lightrail.jpg";

// Commuting resources page

export function Commute() {
  return (
    <div>
      <div className="header-container">
        <div className="page-header">
          <img src={walkingIcon} alt="Walking figure icon" height="50em" weight="50em"></img>
          <h1>Commute</h1>
        </div>
        <Row xs={1} md={2} className="g-2">
          <Col className="img-col">
            <img className="buses-img" src={buses} alt="Metro buses on the road"></img>
          </Col>
          <Col>
            <h2 className="commute-gradient-text">Play It Safe</h2>
            <p>Campus is quite large—oftentimes it's too big for one person to walk alone at night. Learn more about alternatives to walking home by exploring commuting resources covered by your U-Pass.</p>
          </Col>
        </Row>
      </div>
      <div className="cards-container">
      <h2 className="special-h2 commute-gradient-text">Explore Commuting Options</h2>
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
              imgAlt={"UW campus at night"}
              title="NightWalk"
              description="Uniformed security guards provide a walking escort to community members within the campus locations and the residential area north of 45th St., and to the UW Tower location. Guards can also assist building and office lockouts, as well as jump start dead car batteries."
              btnLink="https://www.google.com/maps/d/viewer?mid=1AvFh3QRT8B2ygMYX6FbAuVh3xCE&ll=47.659230905970134%2C-122.30881695&z=15" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={lightrailImg}
              imgAlt={"Lightrail"}
              title="Bus + Light Rail"
              description="With over a dozen bus routes from campus and two light rail stations (U District Station west of campus and the University of Washington station located south of campus), students can leverage their U-Pass to commute at night time instead of walking home by themselves."
              btnLink="https://pugetsound.onebusaway.org/#75402" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
