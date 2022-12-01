import "./css/About.css";
import { Col, Row } from "react-bootstrap";
import campus from "./img/uw-campus.jpg"
import banner from "./img/sdg11-banner.png"
import jennifer from "./img/jennifer.png";
import stella from "./img/stella.png";
import logo from "./img/logo.svg";

// About Us page

export function AboutUs() {
   return (
      <div>
         <img src={campus} alt="UW campus from a bird's-eye view" width="100%"></img>
         <div className="about-container">
            <h1 className="page-descr-heading">Our Mission</h1>
            <p className="page-description">
               Make It Home aims to reduce feelings of anxiety that have risen amongst University of Washington: Seattle campus students following the recent uptake in violent crime occurring around the UW neighborhood at night. Through Make It Home, we hope to empower students to make safer commuting choices while traversing through the University District by allowing them to share and access timely safety-related information.</p>
            <div className="sdg-container">
               <h2 className="page-descr-subheading">Working Towards Sustainable Cities & Communities</h2>
               <img src={banner} alt="UN SDG 11 banner"></img>
               <p className="page-description">
                  With the aim of increasing safety for UW students in the University District, Make It Home draws inspiration from the eleventh United Nations Sustainable Development Goal (SDG) promoting sustainable cities and communities. According to the UN, the focus of this goal is "making cities and human settlements inclusive, safe, resilient, and sustainable". For more information and documents on UN SDG 11, please watch the video below
                  or <a href="https://sdgs.un.org/goals/goal11">visit this link.</a>
               </p>
               <iframe
                  src="https://www.youtube.com/embed/j7dzyJTw7Tc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
               </iframe>
            </div>
            <h1 className="page-descr-heading">Who Are We?</h1>
            <p className="page-description">We are GeriatricGoats, a team of five University of Washington students who are committed to developing technological solutions that improve the quality of life for all fellow Huskies.</p>
            <div className="profiles-container">
               <h2 className="page-descr-subheading">Meet The Team</h2>
               <Row xs={1} md={3} lg={3} xl={5} className="profile-row g-6 d-flex justify-content-center">
                  <Col className="member-col">
                     <img src={jennifer} alt="Jennifer Do from GeriatricGoats"></img>
                     <h3 className="member-name">Jennifer Do</h3>
                     <h4 className="member-role">UX/UI Designer</h4>
                     <ul>
                        <li>Informatics Student at the University of Washington</li>
                        <li className="grad-year">Class of 2023</li>
                     </ul>
                  </Col>
                  <Col>
                     <img src={stella} alt="Stella Kim from GeriatricGoats"></img>
                     <h3 className="member-name">Stella Kim</h3>
                     <h4 className="member-role">Product Manager</h4>
                     <ul>
                        <li>Informatics Student at the University of Washington</li>
                        <li className="grad-year">Class of 2023</li>
                     </ul>
                  </Col>
                  <Col>
                     <img src={logo} alt="Trinity Martinez from GeriatricGoats"></img>
                     <h3 className="member-name">Trinity Martinez</h3>
                     <h4 className="member-role">Developer</h4>
                     <ul>
                        <li>Informatics Student at the University of Washington</li>
                        <li className="grad-year">Class of 2023</li>
                     </ul>
                  </Col>

                  <Col>
                     <img src={logo} alt="Cassie Nguyen from GeriatricGoats"></img>
                     <h3 className="member-name">Cassie Nguyen</h3>
                     <h4 className="member-role">Project Manager</h4>
                     <ul>
                        <li>Informatics Student at the University of Washington</li>
                        <li className="grad-year">Class of 2023</li>
                     </ul>
                  </Col>
                  <Col>
                     <img src={logo} alt="Thomas Wilson from GeriatricGoats"></img>
                     <h3 className="member-name">Thomas Wilson</h3>
                     <h4 className="member-role">UX Researcher</h4>
                     <ul>
                        <li>Informatics Student at the University of Washington</li>
                        <li className="grad-year">Class of 2023</li>
                     </ul>
                  </Col>
               </Row>
            </div>
         </div>
      </div>
   )
}