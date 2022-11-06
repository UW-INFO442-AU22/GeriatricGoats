import React from 'react';
import {MakeNavBar } from './Functions.js';
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

// This is the home page. The forum goes here.

export function Home(){
    return(
        <div>
            <MakeNavBar/>
            <h1>Home Page</h1>
            <MakeCard/>
        </div>
    )
}


// This function will eventually have to be split into two differnet functions:
// one to make the "background" card,
//  and one to create a new "forum post" card, which injects the forum post    card into the background card 
// This should be done when we have the "make forum post" buttom created
function MakeCard(){
    return(
    <Card style={{ width: '50%' }}>
        <Card.Header as="h5">Night Watch Forum</Card.Header>
        <Card.Body>
            <Card style={{ width: '100%' }}>
                <Card.Header as="h12">YEEEEEHAWWWW</Card.Header>
                <Card.Body>
                    <Card.Text> 
                    Ut blanditiis voluptatem dolorem tenetur. Quo dolorum accusamus provident maiores eos. Voluptatem cum possimus sunt tenetur est ea. Assumenda nihil unde non sed minima veritatis architecto.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Card.Body>
    </Card>

  );
}
// make background component

// make "post" component 
