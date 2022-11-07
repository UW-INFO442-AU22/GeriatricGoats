import React from 'react';
import logo from './img/logo.svg';

export function Footer() {
    return (
        <footer>
            <p className="footer-text">
                <img src={logo} height="30em" width="50em" alt="Make It home logo" />
                &copy; 2022 UW INFO 442 Team 7: GeriatricGoats • All rights reserved
            </p>
        </footer>
    )
}