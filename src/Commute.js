import "./css/Commute.css";
import { Col, Row } from "react-bootstrap";
import ResourceCard from "./Card.js";
import nightrideImg from "./img/nightride.jpg"
import nightwalkImg from "./img/nightwalk.jpg"
import walkingIcon from "./img/walking.png"
import lightrailImg from "./img/lightrail.jpg"

// Commuting resources page

export function Commute() {
  return (
    <div>
      <div className="header-container">
        <div className="page-header">
          <img src={walkingIcon} alt="Walking figure icon" height="50em" weight="50em"></img>
          <h1>Commute</h1>
        </div>
        <p>Write brief description about page content</p>
      </div>
      <div className="cards-container">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <ResourceCard
              imgLink={nightrideImg}
              imgAlt={"NightRide shuttle"}
              title="NightRide"
              description="A fare-free, safe and easy way for Husky Card holders to get home at night. NightRide shuttles pick up passengers at eight campus locations and drop off passengers anywhere within one of two zones after the campus location stops."
              btnLink="../alerts" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={nightwalkImg}
              imgAlt={"UW campus at night"}
              title="NightWalk"
              description="Uniformed security guards provide a walking escort to community members within the campus locations and the residential area north of 45th St., and to the UW Tower location. Guards can also assist building and office lockouts, as well as jump start dead car batteries."
              btnLink="../alerts" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={lightrailImg}
              imgAlt={"Lightrail"}
              title="Bus + Light Rail"
              description="With over a dozen bus routes from campus and two light rail stations (U District Station west of campus and the University of Washington station located south of campus), students can leverage their U-Pass to commute at night time instead of walking home by themselves."
              btnLink="../alerts" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
