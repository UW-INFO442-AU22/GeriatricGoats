import "./css/NavbarMenu.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "./img/logo.svg";
import { googleSignIn } from "./LogIn";
import { signMeOut } from "./SignOut";
import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import "firebase/compat/storage";

// Initializing FB app:
const firebaseConfig = {
   apiKey: "AIzaSyC3_6IAbYBbJiGzXGK8WVOXIkxAmtUoY0w",
   authDomain: "make-it-home-app.firebaseapp.com",
   projectId: "make-it-home-app",
   storageBucket: "make-it-home-app.appspot.com",
   messagingSenderId: "1003220503069",
   appId: "1:1003220503069:web:2e51d240ecd85cbf6754f4"
};
const app = initializeApp(firebaseConfig);


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
               <Nav className="navbar-nav mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="alerts">Alerts</Nav.Link>
                  <Nav.Link href="commute">Commute</Nav.Link>
                  <Nav.Link href="safety">Safety</Nav.Link>
                  <Nav.Link href="about">About Us</Nav.Link>
                  <Button className="sign-in" variant="primary" onClick={googleSignIn}>
                     Log In
                  </Button>
                  <Button className="sign-out" variant="secondary" onClick={signMeOut}> 
                     Log Out
                  </Button>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavbarMenu;