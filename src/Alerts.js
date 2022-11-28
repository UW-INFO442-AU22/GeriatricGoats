import React, { useState, useEffect } from 'react';
import {
  Card,
  Row,
  Modal,
  Form,
  Button,
  Badge,
  Stack,
} from "react-bootstrap";
import "./css/Alerts.css";
import loudSpeaker from "./img/loud-speaker.png";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import "firebase/compat/storage";
import { googleSignIn } from "./LogIn";

// Initializes firebase app
const firebaseConfig = {
  apiKey: "AIzaSyC3_6IAbYBbJiGzXGK8WVOXIkxAmtUoY0w",
  authDomain: "make-it-home-app.firebaseapp.com",
  projectId: "make-it-home-app",
  storageBucket: "make-it-home-app.appspot.com",
  messagingSenderId: "1003220503069",
  appId: "1:1003220503069:web:2e51d240ecd85cbf6754f4"
};
firebase.initializeApp(firebaseConfig);

// Alerts() renders the entire forum page, it is being called in App.js
export function Alerts() {

  // update - this was causing compiler error: const [show, setShow] = useState(false); // included here to compile app
  // update - this was causing compiler error: const handleShow = () => setShow(true); // included here to compile app 

  // Unique background image for Alerts page
  useEffect(() => { document.querySelector("body").classList.add("alerts-body") });

  return (
    <div>
      <div className="page-header">
        <img src={loudSpeaker} alt="Loud speaker icon" height="26em" weight="26em"></img>
        <h1 id="page-name">Alerts</h1>
      </div>
      <div className="page-content">
        <MakeForm />
      </div>
    </div>
  )
}


// MakeForm() creates the pop-up with the form, and it sends the data to MakePost() to populate the post information.
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
  const [timeValue, setTimeValue] = useState('')

  // if there's a new input on a form,
  // then set the accompaning useState with the inputted value 
  const handleChange = (event) => {
    let newValue = event.target.value
    // get form which was updated..
    if (event.target.id === 'titleInput') {
      setTitleValue(newValue);
    }
    else if (event.target.id === 'incidentInput') {

      setIncidentValue(newValue);
    }
    else if (event.target.id === 'locationInput') {
      setLocationValue(newValue);
    }
    else if (event.target.id === 'timeInput') {
      setTimeValue(newValue);
    }
  }

  // event that happens when add post button is clicked
  // sends filled in form data to firebase
  const clicked = (event) => {
    // once clicked, send data to firebase
    const newPostObj = {
      title: titleValue,
      incident: incidentValue,
      location: locationValue,
      time: timeValue
    }
    const postRef = firebase.database().ref('post');
    postRef.push(newPostObj); // push to firebase database
  }

  // trying to wrangle the firebase data to make it usable
  // useState that is an array and holds the posts
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const postRef = firebase.database().ref('post')
    postRef.on('value', (snapshot) => {

      const thePosts = snapshot.val() // convert to js value
      let objectKeyArray = Object.keys(thePosts)
      let postsArray = objectKeyArray.map((key) => {
        let singlePost = thePosts[key]
        singlePost.key = key
        return (singlePost);
      })
      setPostList(postsArray);
    });
  }, []);

  console.log(postList);

  let singlePosts = []
  singlePosts = postList.map((postItem) => {
    console.log(postItem);
    return <MakePost key={postItem.key} title={postItem.title} location={postItem.location} incident={postItem.incident} time={postItem.time} />
  });

  // returns title, MakeCard (parent component of posts, takes in postList), and button to make new post
  // also renders the Modal (popup with forum)
  return (
    <div>
      <h2 className="header-heading">Stay Informed</h2>
      <p className="page-description">Do you see suspicious activity or something unusual? Are you planning for your next commute home? Help keep yourself and other students safe and in the loop by using the Alerts forum. Report and view any updates about non-life threatening incidents that occur on and around campus after dark.</p>
      <div className="btn-container">
        <Button variant="primary" className="btn btn-primary btn-lg outline" onClick={handleShow}>Create a new post ＋</Button>
      </div>
      {/* <Button variant="primary" className="btn btn-primary btn-lg outline" onClick={handleShow}>Create a new post ＋</Button> */}
      <div className="posts-container">
        <h2 className="posts-header">What's Happening Now</h2>
        <p className="posts-description">View real-time reports from students about advisories, crime, and other safety related situations.</p>
        <Stack gap={2} className="col-md-12 mx-auto">
          <MakeCard posts={singlePosts} />
        </Stack>
      </div>
      <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a new post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="titleInput">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Verbal altercation on the Ave" onChange={handleChange} value={titleValue} />
              <Form.Text className="text-muted">
                Try to be as descriptive as you can!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="incidentInput">
              <Form.Label>Type of incident</Form.Label>
              <Form.Select type="text" placeholder="Select one" onChange={handleChange} value={incidentValue}>
                <option></option>
                <option>Advisory</option>
                <option>Crime</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="locationInput">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="University Way NE" onChange={handleChange} value={locationValue} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="timeInput">
              <Form.Label>Current Time</Form.Label>
              <Form.Control type="text" placeholder="6:30 PM" onChange={handleChange} value={timeValue} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className="cancel-btn" variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="submit-btn" variant="success" onClick={() => {
            var user = firebase.auth().currentUser;
            if (user) {
              // User is signed in.
              handleClose();
              clicked();
            } else {
              // No user is signed in.
              window.alert("Error! Must be signed in to use all features.");
              googleSignIn();
            }
          }}>
            Submit post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


// posts are attached here (basically just a dark container)
// parent component to MakePost
function MakeCard(props) {

  const posts = props.posts;

  return (
    <Card className="post-cards-container" bg="transparent" style={{ width: '100%' }}>
      <Card.Body className="post-cards-body" >
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
  const time = props.time;

  return (
    <div>
      <Card className="post-card" style={{ width: '100%' }}>
        <Card.Header className="post-header">Posted by u/anonhusky • {time}</Card.Header>
        <Card.Body>
          <Card.Text className="post-text">
            <Row className="post-title-container">
              <span className="post-title">
                {title}
                <Badge className="post-tag" bg="#D6E4E2">{incident}</Badge>
              </span>
            </Row>
            <Row>
              <div className="post-location">
                {location}
              </div>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}