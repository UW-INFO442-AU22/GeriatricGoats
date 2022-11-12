import React, { useState } from 'react';
import {
  Card,
  Row,
  Modal,
  Container,
  Form,
  Button,
  Badge,
  Stack
} from "react-bootstrap";
import "./css/Alerts.css";
import loudSpeaker from "./img/loud-speaker.png"

// Alerts() renders the entire forum page, it is being called in App.js
export function Alerts() {
  return (
    <div>
      <div className="header-container">
      <div className="page-header">
          <img src={loudSpeaker} alt="Loud speaker icon" height="50em" weight="50em"></img>
          <h1>Alerts</h1>
        </div>
        <p>Write brief description about page content</p>
      </div>
      <MakeForm />
      <br/>
    </div>
  )
}


//MakeForm() creates the pop-up with the form, and it sends the data to MakePost() to populate the post information.
// It calls CardApp() which hosts the "Alert Hub", where posts are. It does this so it can send data.

function MakeForm() {
  // these are things to deal with closing, showing the popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // component for forms. stores input. 
  const [titleValue, setTitleValue] = useState('')
  const [incidentValue, setIncidentValue] = useState('')
  const [locationValue, setLocationValue] = useState('')

  // if there's a new input on a form,
  // then set the accompaning useState with the inputted value 
  const handleChange = (event) => {

      let newValue = event.target.value
      // get form which was updated..
    if(event.target.id == 'titleInput'){
      setTitleValue(newValue);
    }
    else if(event.target.id == 'incidentInput'){

      setIncidentValue(newValue);
   }
   else if(event.target.id == 'locationInput'){
    setLocationValue(newValue);
   }

}
  // usestate that is an array and holds the posts
    const [postList, setPostList] = useState([]);

      // event that happens when add post button is clicked
      // sends form data to be MakePost 
const clicked = event => {

    setPostList(postList.concat(
      <MakePost key={postList.length} title={titleValue} location={locationValue} incident={incidentValue} />));
};
        
// returns title, MakeCard (parent component of posts, takes in postList), and button to make new post
// also renders the Modal (popup with forum)
  return (
    <>
    <Stack gap={2} className="col-md-10 mx-auto">
    <h1 >Alert Hub</h1>
      <Button variant="secondary" onClick={handleShow}>
        Make a new post 
      </Button>
      <MakeCard posts={postList} />
    </Stack>






      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new forum post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="titleInput">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Verbal altercation on the ave by Thai Tom" onChange={handleChange} value={titleValue}  />
              <Form.Text className="text-muted">
                Try and be as descriptive as you can!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="incidentInput">
              <Form.Label>Type of incident</Form.Label>
              <Form.Select type="text" placeholder="Crime" onChange={handleChange} value={incidentValue}>
                <option>Crime</option>
                <option>Heads up!</option>
                <option>Beep boop</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="locationInput">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="University Way NE" onChange={handleChange} value={locationValue}  />

            </Form.Group>


          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        <Button variant="secondary" onClick={() => {
          handleClose();
          clicked();
        }}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}


// posts are attached here (basically just a dark container)
// parent component to MakePost
function MakeCard(props) {
 
  const posts = props.posts;
  // <Card.Header as="h5">Night Watch Forum</Card.Header>
  return (
    <Card bg="dark" style={{ width: '100%' }}>
      <Card.Body>
        <Stack gap={3} className="col-md-12 mx-auto">
        {posts}
        </Stack>

      </Card.Body>
    </Card>


  );
}

// Post component
// Child component to MakeCard
function MakePost(props) {

  const title = props.title;
  const location = props.location;
  const incident = props.incident;

  console.log(title);

  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Card.Header>Posted by u/user • 10 minutes ago</Card.Header>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <h4>
                  {title}
                  <Badge bg="secondary">{incident}</Badge>
                </h4>
              </Row>
              <Row>
                <h5>
                  {location}
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

