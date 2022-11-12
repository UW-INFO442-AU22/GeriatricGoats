import "./css/Safety.css";
import { Col, Row } from "react-bootstrap";
import ResourceCard from "./Card.js";
import safecampusImg from "./img/safecampus.jpg";
import uwalertImg from "./img/uwalert.png"
import uwPDImg from "./img/uwpd.jpeg";
import shield from "./img/shield.png";

// Other general safety resources page

export function Safety() {
  return (
    <div>
      <div className="header-container">
        <Row xs={1} md={2} className="g-2">
          <Col>
            <div className="page-header">
              <img src={shield} alt="Shield icon" height="50em" weight="50em"></img>
              <h1>Safety</h1>
            </div>
            <p>Write brief description about page content</p>
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
        <Row xs={1} md={3} className="g-4">
          <Col>
            <ResourceCard
              imgLink={safecampusImg}
              imgAlt={"Drumheller Fountain"}
              title="SafeCampus"
              description="UW’s violence-prevention and response program which can help you navigate many situations, whether they impact you or someone you know — including threats, stalking, sexual assault, relationship violence, harassment, suicide concerns, workplace violence and more."
              btnLink="../alerts" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={uwalertImg}
              imgAlt={"UW Alert logo"}
              title="UW Alert"
              description="A tool that disseminates alert notices to UW students, faculty and staff if there are ever emergencies or activities that may disrupt normal campus operations."
              btnLink="../alerts" />
          </Col>
          <Col>
            <ResourceCard
              imgLink={uwPDImg}
              imgAlt={"UW Police logo"}
              title="UW Police"
              description="To report non-emergencies, contact: 206.685.UWPD (8973). To report anonymous tips, contact: 206.685.TIPS (8477)."
              btnLink="../alerts" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
