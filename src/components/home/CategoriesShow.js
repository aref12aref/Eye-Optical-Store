import { Card } from "react-bootstrap";
import "./categoriesStyle.css";

export default function CategoriesShow({ image, title }) {
  return (
    <Card className="home-categories-sec-card" style={{ height: "300px" }}>
      <Card.Img
        variant="top"
        src={image}
        className="home-categories-sec-card-img"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
