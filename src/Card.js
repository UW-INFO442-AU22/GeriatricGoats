import "./css/Card.css"
import { Card, Button } from "react-bootstrap";

// Basic card layout for resource pages

function ResourceCard(props) {
    return (
        <Card className="resource-card">
            <Card.Img className="card-img" src={props.imgLink} alt={props.imgAlt} />
            <Card.Header className="card-header">Days and Times of Operation</Card.Header>
            {/* <Card.ImgOverlay className="card-overlay"> */}
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className="card-text">{props.description}</Card.Text>
                <Button className="card-btn btn-primary btn-md outline" href={props.btnLink} role="button" target="_blank">Learn more</Button>
            {/* </Card.ImgOverlay> */}
        </Card>
    );
}

export default ResourceCard;