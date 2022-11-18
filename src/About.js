import "./css/About.css";
import { Col, Row } from "react-bootstrap";
import logo from "./img/logo.svg";

// About Us page

export function AboutUs() {
   return (
      <div>
         <div className="header-container">
            <h1>Who Are We?</h1>
            <p>We are GeriatricGoats, a team of five University of Washington students who are committed to developing technological solutions to improve the quality of life for all fellow Huskies.</p>

            <div className="profiles-container">
               <h2 className="about-gradient-text">Meet The Team</h2>
               <Row xs={1} md={5} className="g-4 profile-row">
                  <Col className="member-col">
                     <img src={logo} alt="Jennifer Do from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Jennifer Do</h3>
                     <h4 className="member-role">UX/UI Designer</h4>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2022</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Stella Kim from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Stella Kim</h3>
                     <h4 className="member-role">Product Manager</h4>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2023</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Trinity Martinez from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Trinity Martinez</h3>
                     <h4 className="member-role">Role</h4>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2022</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Cassie Nguyen from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Cassie Nguyen</h3>
                     <h4 className="member-role">Role</h4>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2022</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Thomas Wilson from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Thomas Wilson</h3>
                     <h4 className="member-role">Role</h4>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2022</p>
                  </Col>
               </Row>
            </div>

            <h1>Our Mission</h1>
            <p>The goal of Make It Home is to address feelings of anxiety that have risen amongst University of Washington: Seattle campus students with a recent uptake in violent crime occurring around the UW neighborhood, particularly after dark. Through our application, we hope to empower students to make safer commuting choices while traversing through the UW neighborhood by allowing them to share and access timely safety-related information.</p>
         </div>
      </div>
   )
}