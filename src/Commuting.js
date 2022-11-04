import React from 'react';
import {MakeNavBar } from './Functions.js';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Commuting Resources go into this page

export function CommutingResources(){
    return(
        <div>
            <MakeNavBar/>
            <Test yeeHaw="bbbbbb" />
            
        </div>
    )
}

function Test(props){

    const goToReturn = props.yeeHaw;

    return(
        <h1>{goToReturn}</h1>
    )

}

