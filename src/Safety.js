import "./css/Safety.css";
import { Col, Row } from "react-bootstrap";
import ResourceCard from "./Card.js";
import safecampusImg from "./img/safecampus.jpg";
import uwalertImg from "./img/uwalert.png"
import safezoneImg from "./img/safezone.png";
import shield from "./img/shield.png";

// Other general safety resources page

export function Safety() {
  return (
    <div>
      <div className="header-container">
        <div className="page-header">
          <img src={shield} alt="Shield icon" height="50em" weight="50em"></img>
          <h1>Safety</h1>
        </div>
        <Row xs={1} md={2} className="g-2">
          <Col>
            <h2 className="safety-gradient-text">Make Your Way Back Home</h2>
            <p>Your safety and well-being are important. Make sure you are always protecting yourself by learning more about general safety tips and UW's additional incident prevention services.</p>
          </Col>
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iD1qJkXlmLI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </div>
      <div className="cards-container">
        <h2 className="special-h2 commute-gradient-text">Explore Additional Resources</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <ResourceCard
              imgLink={safecampusImg}
              imgAlt={"Drumheller Fountain"}
              title="SafeCampus"
              description="UW’s violence-prevention and response program which can help you navigate many situations, whether they impact you or someone you know — including threats, stalking, sexual assault, relationship violence, harassment, suicide concerns, workplace violence and more."
              btnLink="https://www.washington.edu/safecampus/" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={uwalertImg}
              imgAlt={"UW Alert logo"}
              title="UW Alert"
              description="A tool that disseminates alert notices to UW students, faculty and staff if there are ever emergencies or activities that may disrupt normal campus operations."
              btnLink="https://www.washington.edu/safety/alert/" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={safezoneImg}
              imgAlt={"UW SafeZone App"}
              title="UW SafeZone"
              description="The SafeZone mobile app allows UW students to have immediate access to UW police and local emergency services anyhere in the U District. Call for medical assistance, emergencies, and share your location with police officers."
              btnLink="https://police.uw.edu/services/safe-zone-app/" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
