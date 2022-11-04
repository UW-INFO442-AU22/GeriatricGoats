import React from 'react';
import { Card, Button, Navbar, Nav, Container, Dropdown, DropdownButton, Table} from 'react-bootstrap';

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
