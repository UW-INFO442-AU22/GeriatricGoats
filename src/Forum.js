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

// This is the forum page

export function Forum(){
    return(
        <div>
            <MakeNavBar/>
            <h1>Forum Page</h1>
            <CardApp/>
        </div>
    )
}


// CardApp takes in both MakeCard and MakePost just so the data can be shared
function CardApp(){
    const [postList, setPostList] = useState([]);
  
    const clicked = event => {
      setPostList(postList.concat(<MakePost key={postList.length} />));
    };
  
    return (
      <div>
        <MakeCard posts={postList}/>
        <Button onClick={clicked}>Add input</Button>
      </div>
    );
}
  

  // posts are attached here
  // parent component 
function MakeCard(props){
    const posts = props.posts;
    return(
 
     <Card style={{ width: '50%' }}>
         <Card.Header as="h5">Night Watch Forum</Card.Header>
         <Card.Body>
            {posts}
         </Card.Body>
     </Card>
 
   );
 
   
 }

// Make post
// Child component
function MakePost(){
    return( 
        <div>
    <Card style={{ width: '100%' }}>
    <Card.Header>Post Title</Card.Header>
    <Card.Body>
        <Card.Text> 
            <Container>
                <Row>
                    <Col sm={9}>Ut blanditiis voluptatem dolorem tenetur. Quo dolorum accusamus provident maiores eos.</Col>

                    <Col sm={2} className="d-flex justify-content-end align-items-center">
                        <Button variant="primary">Upvote</Button>{''}
                    </Col>
                </Row>
            </Container>
        </Card.Text>
    </Card.Body>
</Card>
        </div>
);
}

