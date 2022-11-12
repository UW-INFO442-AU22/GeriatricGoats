import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Card.css"

// Basic card layout for resource pages

function ResourceCard(props) {
    return (
        <Card className="resource-card h-100 text-white">
            <Card.Img className="card-img" src={props.imgLink} alt={props.imgAlt} />
            <Card.ImgOverlay className="card-overlay">
                    <Card.Title className="card-title">{props.title}</Card.Title>
                    <Card.Text className="card-text">{props.description}</Card.Text>
                    <Link className="btn btn-primary btn-md" to={props.btnLink} role="button">Learn More</Link>
            </Card.ImgOverlay>
        </Card>
    );
}

export default ResourceCard;