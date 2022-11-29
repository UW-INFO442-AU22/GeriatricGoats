import "./css/About.css";
import { Col, Row } from "react-bootstrap";
import logo from "./img/logo.svg";

// About Us page

export function AboutUs() {
   return (
      <div>
         <div className="header-container">
            <h1>About Us</h1>
            <p>With the aim to increase safety for UW students in the University District, Make It Home was inspired by the 11th United Nations Sustainable Development Goal (SDG) promoting sustainable cities and communities. 
               Specifically, this SDG centers around "making cities and human settlements inclusive, <em>safe</em>, resilient, and sustainable" [1]. </p>
               
            <h2>Our Mission</h2>
            <p>The goal of Make It Home is to address feelings of anxiety that have risen amongst University of Washington: Seattle campus students with a recent uptake in violent crime occurring around the UW neighborhood, particularly after dark. 
            Through Make It Home, we hope to empower students to make safer commuting choices while traversing through the University District by allowing them to share and access timely safety-related information.</p>
            
            <h1>Who Are We?</h1>
            <p>We are GeriatricGoats, a team of five University of Washington students who are committed to developing digital solutions to improve the quality of life for all fellow Huskies.</p>

            <div className="profiles-container">
               <h2 className="about-gradient-text">Meet The Team</h2>
               <Row xs={1} md={5} className="g-4 profile-row">
                  <Col className="member-col">
                     <img src={logo} alt="Jennifer Do from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Jennifer Do</h3>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2023</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Stella Kim from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Stella Kim</h3>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2023</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Trinity Martinez from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Trinity Martinez</h3>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2023</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Cassie Nguyen from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Cassie Nguyen</h3>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2023</p>
                  </Col>
                  <Col>
                     <img src={logo} alt="Thomas Wilson from GeriatricGoats" height="100px" width="100px"></img>
                     <h3 className="member-name">Thomas Wilson</h3>
                     <p className="student-profile">Informatics Student at the University of Washington</p>
                     <p className="student-profile">Class of 2023</p>
                  </Col>
               </Row>
            </div>

            
            
            <p className="student-profile">[1] The United Nations. (n.d.). Cities - United Nations Sustainable Development Action 2015. United Nations Sustainable Development. Retrieved October 11, 2022, from https://www.un.org/sustainabledevelopment/cities/.</p>
         </div>
      </div>
   )
}