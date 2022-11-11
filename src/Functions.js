import React from "react";
import {
  Card,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import logo from './img/logo.svg';

// This is the function page. Various bootstrap functions should go here
// E.g. our custom Navbars, cards, containers, etc.

export function MakeCard(props) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.imgLink} />
      <Card.Body className="card">
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button href={props.resourceLink} className="mint-btn" target="_blank">Learn More</Button>
      </Card.Body>
    </Card>
  );
}
