import React from "react";
import logo from './img/logo.svg';
import { Container, Navbar } from 'react-bootstrap';

// Header at the top of every page
export default function Header() {
    return (
        <div class="header">
            <img src={logo} height="50em" width="80em" alt="Make It home logo" />
            make it home
        </div>
    )
}