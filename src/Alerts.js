import React, { useState } from 'react';
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

  return (
    <>
        <CardApp title={titleValue} location={locationValue} incident={incidentValue} />
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
                {titleValue}
                Try and be as descriptive as you can!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="incidentInput">
              <Form.Label>Type of incident {incidentValue}</Form.Label>
              <Form.Select type="text" placeholder="Crime" onChange={handleChange} value={incidentValue}>
                <option>Crime</option>
                <option>Heads up!</option>
                <option>Beep boop</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="locationInput">
              <Form.Label>Location {locationValue}</Form.Label>
              <Form.Control type="text" placeholder="University Way NE" onChange={handleChange} value={locationValue}  />

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


// CardApp takes in both MakeCard and MakePost just so the data can be shared
function CardApp(props) {

  // props are taken in from  MakeForm(), used to populate forum posts
  const title = props.title;
  const location = props.location;
  const incident = props.incident;
  // used to track how many posts there are
  const [postList, setPostList] = useState([]);

  // event that happens when add post button is clicked
  const clicked = event => {
    setPostList(postList.concat(
      <MakePost key={postList.length} title={title} location={location} incident={incident} />));
  };
  return (

    <div class="container">

      <Button onClick={clicked} variant="secondary">Create a new post </Button>
      <h1 >Alert Hub</h1>
      <MakeCard posts={postList} />

    </div>
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
        {posts}
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
                  {location} • Seattle
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

