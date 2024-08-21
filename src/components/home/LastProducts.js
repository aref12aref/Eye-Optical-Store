import "./homepProductsStyle.css";
import {
  contactLensesData,
  menGlassesData,
  mensunGlassesData,
  womenGlassesData,
  womenSunGlassesData,
} from "../../website/testData/products/productsData";
import { Card } from "react-bootstrap";

export default function LastProducts() {
  const allProducts = [
    ...menGlassesData,
    ...mensunGlassesData,
    ...womenGlassesData,
    ...womenSunGlassesData,
    ...contactLensesData,
  ];

  const LastProducts = allProducts.slice(-4, -1);

  const showLastProducts = LastProducts.map((item, index) => {
    return (
      <Card
        key={index}
        style={{ height: "450px" }}
        className="lastProducts-card"
      >
        <Card.Img
          variant="top"
          src={item.image}
          className="lastProducts-card-img"
        />
        <Card.Body className="lastProducts-card-text">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.measurements}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <Card.Text>{item.discount}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div className="lastProducts-container">
      <h3>Last Products</h3>
      <div className="lastProducts">{showLastProducts}</div>
    </div>
  );
}
