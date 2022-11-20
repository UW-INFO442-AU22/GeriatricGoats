import "./css/Card.css"
import { Card, Button, Row, Col } from "react-bootstrap";
import Calendar from "./img/calendar.png";
import Clock from "./img/clock.png";


// Basic card layout for resource pages

function ResourceCard(props) {
    return (
        <Card className="resource-card">
            <Card.Img className="card-img" src={props.imgLink} alt={props.imgAlt} />
            {/* <Card.Header className="card-header">{props.operationHours}</Card.Header> */}
            {/* <Card.ImgOverlay className="card-overlay"> */}
            <Card.Title className="card-title">{props.title}</Card.Title>
            <Card.Text className="card-text">{props.description}</Card.Text>
            <Row xs={2} md={2} className="operation-hours g-2">
                <Col className="days-block">
                    <ul className="days">
                        {props.days}
                    </ul>
                    <ul>
                        <img src={Calendar} alt="Calendar icon" height={"20px"} weight={"20px"}></img> Days
                    </ul>
                </Col>
                <Col className="time-block">
                    <ul className="hours">
                        {props.hours}
                    </ul>
                    <ul>
                        <img src={Clock} alt="Clock icon" height={"18px"} weight={"18px"}></img> Hours
                    </ul>
                </Col>
            </Row>
            <Button className="card-btn btn-primary btn-md outline" href={props.btnLink} role="button" target="_blank">Learn more</Button>
            {/* </Card.ImgOverlay> */}
        </Card>
    );
}

export default ResourceCard;