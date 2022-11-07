import React from "react";
import {
  Card,
  Button,
  Navbar,
  Nav,
  Container,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import logo from './img/logo.svg';

// This is the function page. Various bootstrap functions should go here
// E.g. our custom Navbars, cards, containers, etc.

export function MakeNavBar() {
  return (
    <Navbar className="mb-4" expand="lg" variant="light" bg="light">
      <Navbar.Brand href="/">
        <img
          src={logo}
          height="75em"
          width="180em"
          alt="Make It Home logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle type="button" aria-controls="navbarNav"></Navbar.Toggle>
      <Navbar.Collapse id="navbarNav">
        <Nav className="navbar-nav ml-auto">
          <Nav.Link href="/"><img src="./img/home.png" height="10em" width="20em" alt="Home icon"></img>Home</Nav.Link>
          <Nav.Link href="forum"><img src="./img/loud-speaker.png" height="10em" width="20em" alt="Loud speaker icon"></img>Alerts</Nav.Link>
          <Nav.Link href="commuting-resources"><img src="./img/walking.png" height="10em" width="20em" alt="Walking person icon"></img>Commute</Nav.Link>
          <Nav.Link href="other-resources"><img src="./img/shield.png" height="10em" width="20em" alt="Safety shield icon"></img>Safety</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export function MakeCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgLink} />
      <Card.Body className="card">
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button className="mint-btn" variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}
