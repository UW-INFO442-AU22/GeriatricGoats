import React, { useState, useEffect } from 'react';
import {
  Card,
  Col,
  Row,
  Modal,
  Form,
  Button,
  Badge,
  Stack,
} from "react-bootstrap";
import "./css/Alerts.css";
import loudSpeaker from "./img/loud-speaker.png";
import quadWalk from "./img/quad-walk.png"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import "firebase/compat/storage";
import { googleSignIn } from "./LogIn";
// Initializing FB app:
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

  const [show, setShow] = useState(false); // included here to compile app
  const handleShow = () => setShow(true); // included here to compile app

  return (
    <div>
      <div className="header-container">
        <div className="page-header">
          <img src={loudSpeaker} alt="Loud speaker icon" height="50em" weight="50em"></img>
          <h1>Alerts</h1>
        </div>
        <Row xs={1} md={2} className="g-2">
          <Col>
            <h2 className="alerts-gradient-text">Stay Informed</h2>
            <p className="page-description">Do you see suspicious activity or something unusual? Planning for your commute home? Help keep yourself and other students safe and in the loop by using the Alerts forum. Report or view any updates about non-life threatening incidents that occur on and around campus after dark.</p>
          </Col>
          <Col>
            <img className="quad-walk-img" src={quadWalk} alt="People walking across the Quad"></img>
          </Col>
        </Row>
        
      {/* margins need to be reduced perhaps */}
        <div className="page-content">

          <MakeForm />
        </div>
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
    if (event.target.id == 'titleInput') {
      setTitleValue(newValue);
    }
    else if (event.target.id == 'incidentInput') {

      setIncidentValue(newValue);
    }
    else if (event.target.id == 'locationInput') {
      setLocationValue(newValue);
    }
    else if (event.target.id == 'timeInput') {
      setTimeValue(newValue);
    }
  }


  // event that happens when add post button is clicked
  // sends filled in form data to firebase
  const clicked = (event) => {
    // once clicked, send data to firebase
    const newPostObj = { title:titleValue,
      incident:incidentValue,
      location:locationValue,
      time: timeValue
    } 
    const postRef = firebase.database().ref('post')
    postRef.push(newPostObj) // push to firebase database
  }

// trying to wrangle the firebase data to make it useable
  // usestate that is an array and holds the posts
  const [postList, setPostList] = useState([]);

  useEffect(() => {  
  const postRef = firebase.database().ref('post')
   postRef.on('value', (snapshot) => {
  
    const thePosts = snapshot.val() // convert to js value
    let objectKeyArray = Object.keys(thePosts)
    let postsArray = objectKeyArray.map((key) =>{
      let singlePost = thePosts[key]
      singlePost.key = key
      return(singlePost);
    })
    setPostList(postsArray)
  })
}, [])

console.log(postList);

let singlePosts = []
singlePosts = postList.map((postItem) => {
  console.log(postItem);
    return <MakePost key ={postItem.key} title={postItem.title} location={postItem.location} incident={postItem.incident} time={postItem.time}/>

  })
  /*
    setPostList(postList.concat(
      <MakePost key={postList.length} title={titleValue} location={locationValue} incident={incidentValue} />));
  };
  */ 

  // returns title, MakeCard (parent component of posts, takes in postList), and button to make new post
  // also renders the Modal (popup with forum)
  return (
    <div >
            <Button variant="primary" className="btn btn-primary btn-lg outline" onClick={handleShow}>Create a new post ＋</Button>
            <h2 className="alerts-gradient-text">What's Happening Now</h2>

      <Stack gap={2} className="col-md-12 mx-auto">
        <MakeCard posts={singlePosts} />
      </Stack>

      <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="titleInput">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Verbal altercation on the ave by Thai Tom" onChange={handleChange} value={titleValue} />
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
            //handleClose();
            //clicked();
            var user = firebase.auth().currentUser;
            if (user) {
              // User is signed in.
              handleClose();
              clicked();
            } else {
              // No user is signed in.
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
    <Card bg="transparent" style={{ width: '100%' }}>
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
  const time = props.time;

  return (
    <div>
      <Card className="post-card" style={{ width: '100%' }}>
        <Card.Header className="post-header">Posted by u/anonHusky • {time}</Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <span className="post-title">
                {title}
                <Badge className="post-tag" bg="info">{incident}</Badge>
              </span>
            </Row>
            <Row>
              <div className="post-location">
                {location}
              </div>
            </Row>
            <Row>
              <span className="post-upvote">
                <Button className="upvote-btn" variant="light" size="sm">Upvote</Button>
                7 upvotes
              </span>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}