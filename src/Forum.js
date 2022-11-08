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

            <CardApp/>
        </div>
    )
}


// CardApp takes in both MakeCard and MakePost just so the data can be shared
function CardApp(){
    const [postList, setPostList] = useState([]);

  // event that happens when add post button is clicked
    const clicked = event => {
      setPostList(postList.concat(      
      <MakePost key={postList.length} />));
    };
  // some css work needs to be done in this return statement to make it look like the figma prototypes (: 
    return (
        
<div class="container">
    <h1>Forum Page</h1>
    <Button onClick={clicked}>+</Button>      
    <MakeCard posts={postList}/>

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

