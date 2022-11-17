import { Container, Nav, Navbar, Button } from "react-bootstrap";
import LogIn from "./LogIn.js";
import "./css/NavbarMenu.css";
import logo from "./img/logo.svg";

// Navigation menu at the top of every page

function NavbarMenu() {
   return (
      <Navbar collaspseOnSelect expand="lg" className="color-nav" variant="dark">
         <Container>
            <Navbar.Brand className='navbar-brand' href="/">
               <img src={logo} alt="Make It Home logo" />
               <span className="logo-text">make it home</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbarNav">
               <Nav className="navbar-nav ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="alerts">Alerts</Nav.Link>
                  <Nav.Link href="commute">Commute</Nav.Link>
                  <Nav.Link href="safety">Safety</Nav.Link>
                  <Nav.Link href="about">About Us</Nav.Link>
                  {/*<Nav.Link href="log-in">Log In</Nav.Link> */}
                  <Button type= "submit" onclick="LogIn()">
                     Log In 
                  </Button>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavbarMenu;