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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="forum">Alerts</Nav.Link>
          <Nav.Link href="commuting-resources">Commute</Nav.Link>
          <Nav.Link href="other-resources">Safety</Nav.Link>
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
        <Button href={props.resourceLink} className="mint-btn" target="_blank">Learn More</Button>
      </Card.Body>
    </Card>
  );
}
