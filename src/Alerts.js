import React, { useState }  from 'react';
import {
    Card,
    Row,
    Col,
    Button,
    Modal,
    Container,
    Form,
    Dropdown,
    DropdownButton,
    Table,
    Badge
  } from "react-bootstrap";
  import "./css/Alerts.css";

// Forum page
export function Alerts(){
    return(
        <div>
            <CardApp/>
            <MakeForm/>
        </div>
    )
}


// pop-up
function MakeForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new forum post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
        <Form.Group className="mb-3" controlId="formInput">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Verbal altercation on the ave by Thai Tom " />
          <Form.Text className="text-muted">
            Try and be as descriptive as you can!
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formInput">
          <Form.Label>Type of incident</Form.Label>
          <Form.Select type="text" placeholder="Crime">
          <option>Crime</option>
          <option>Heads up!</option>
          <option>Beep boop</option>
          </Form.Select>


        </Form.Group>
        <Form.Group className="mb-3" controlId="formInput">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="University Way NE" />
        </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



// this will be the form that populates post data
// need css on container for background
function ExampleForm(){
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

// Make Post component
// Child component
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

