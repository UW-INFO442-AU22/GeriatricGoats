import { Navbar, Nav } from "react-bootstrap";
import './NavbarMenu.css';
import logo from './img/logo.svg';

// Navigation menu at the top of every page

function NavbarMenu() {
    return (
      <Navbar className="color-nav" variant="dark">
        <Navbar.Brand className='navbar-brand' href="/">
          <img src={logo} height="50em" width="50em" alt="Make It Home logo" />
          make it home
        </Navbar.Brand>
        <Navbar.Toggle type="button" aria-controls="navbarNav"></Navbar.Toggle>
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="alerts">Alerts</Nav.Link>
            <Nav.Link href="commute">Commute</Nav.Link>
            <Nav.Link href="safety">Safety</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

export default NavbarMenu;