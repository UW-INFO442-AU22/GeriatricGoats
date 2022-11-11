import React, { useState }  from 'react';
import {MakeNavBar } from './Functions.js';
import {
    Card,
    Row, Col,
    Button,
    Navbar,
    Nav,
    Container,
    Form,
    Dropdown,
    DropdownButton,
    Table,
    Badge
  } from "react-bootstrap";

// Forum page
export function Alerts(){
    return(
        <div>
            <MakeNavBar/>
            <CardApp/>
            <MakeForm/>
        </div>
    )
}

// this will be the form that populates post data
// need css on container for background
function MakeForm(){
    return(
        <Container >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
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
    
    <Button onClick={clicked} variant="secondary">Create a new post </Button>      
    <h1 >Alert Hub</h1>
    <MakeCard posts={postList}/>

</div>
    );
}
  



  // posts are attached here
  // parent component 
function MakeCard(props){
    const posts = props.posts;
    // <Card.Header as="h5">Night Watch Forum</Card.Header>
    return(
 <Card bg="dark" style={{ width: '100%' }}>
         <Card.Body>
            {posts}
         </Card.Body>
     </Card>
    
 
   );
 }

// Make post
// Child component

// spacing of columns needs to be fixed (button)
function MakePost(){
    return( 
        <div>
    <Card style={{ width: '100%' }}>
    <Card.Header>Posted by u/user • 10 minutes ago</Card.Header>
    <Card.Body>
        <Card.Text> 
            <Container>
                <Row>
                        <h4> 
                    Report of attempted buglary on the ave <Badge bg="secondary">crime</Badge>
                        </h4>
                </Row>
                <Row>
                    <h5>
                        University Way NE • Seattle
                    </h5>
                </Row>
                <Row>
                    <h5>
                    <Badge bg="secondary">upvote image</Badge>  7 upvotes 
                    </h5>
                </Row>
            </Container>
        </Card.Text>
    </Card.Body>
</Card>
        </div>
);
}

