import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./css/NavbarMenu.css";
import logo from "./img/logo.svg";
import { googleSignIn } from "./LogIn";
import { signMeOut } from "./SignOut";

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

                  <Button class="signIn" variant="primary" onClick={googleSignIn}> 
                     Log In
                  </Button>

                  <Button class="signOut" variant="primary" onClick={signMeOut}> 
                     Log Out
                  </Button>

               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavbarMenu;