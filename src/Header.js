import React from "react";
import logo from './img/logo.svg';
import {Container, Navbar} from 'react-bootstrap';

// Header at the top of every page
export default function Header() {
    return (
        // <div class="header">
        //     <img src={logo} height="75em" width="180em" alt="Make It home logo" />
        // </div>
        <>
        <Navbar class="header">
        <Container>
          {/* <Navbar.Brand href="#home"> */}
            <img
              alt="Make It Home logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            make it home
          {/* </Navbar.Brand> */}
        </Container>
      </Navbar>
      </>
    )
}