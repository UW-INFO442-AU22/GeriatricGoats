import React from 'react';
import { Card, Button, Navbar, Nav, Container, Dropdown, DropdownButton, Table} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


// This is the function page. Various bootstrap functions should go here
// E.g. our custom Navbars, cards, containers, etc. 

export function MakeNavBar() {
    return (
        <Navbar className="mb-4" expand="lg" variant="light" bg="light">
            <Navbar.Brand href="/" >
                <img src="./img/Site-logo.png" height="75em" width="180em" alt="sites logo" />
            </Navbar.Brand>
            <Navbar.Toggle type="button" aria-controls="navbarNav">
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarNav">
                <Nav className="navbar-nav ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="commuting-resources">Commuting Resources</Nav.Link>
                    <Nav.Link href="other-resources">Other Resources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
    }

    export function MakeCard(props) {
        const title= props.Title
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
    }
    






