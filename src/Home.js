import React, { useState }  from 'react';
import {MakeNavBar } from './Functions.js';
import {
    Card,
    Row, Col,
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
            <MakeButton/>

        </div>
    )
}

// next steps:

// This function will create a button that once clicked, will add a new forum post.

// To code this, need to read through here: https://info340.github.io/dom.html
// On click, find BackgroundCard()'s body, and append the result of PostCard() to it

function MakeButton(){

    const [count, setCount] = useState(0);
    const handleClick = function(event) {
        console.log("clicky clicky");
        setCount(count+1);
    }

return(
<Button onClick={handleClick} variant="dark">+1</Button> 
)
}

// This function needs to be split into two. 
// One function should make the first card (the background card), BackgroundCard()
// and the other function should be make the 'post' card, PostCard()
function MakeCard(){
    return(
    <Card style={{ width: '50%' }}>
        <Card.Header as="h5">Night Watch Forum</Card.Header>
        <Card.Body>
            <Card style={{ width: '100%' }}>
                <Card.Header>YEEEEEHAWWWW</Card.Header>
                <Card.Body>
                    <Card.Text> 
                        <Container>
                            <Row>
                                <Col sm={9}>Ut blanditiis voluptatem dolorem tenetur. Quo dolorum accusamus provident maiores eos.</Col>

                                <Col sm={2} className="d-flex justify-content-end align-items-center">
                                    <Button variant="primary">Upvote</Button>{' '}
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Card.Body>
    </Card>

  );
}
