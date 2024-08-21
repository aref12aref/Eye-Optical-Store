import "./homepProductsStyle.css";
import { Card } from "react-bootstrap";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  contactLensesData,
  menGlassesData,
  mensunGlassesData,
  womenGlassesData,
  womenSunGlassesData,
} from "../../website/testData/products/productsData";

export default function TopRatedProducts() {
  const allProducts = [
    ...menGlassesData,
    ...mensunGlassesData,
    ...womenGlassesData,
    ...womenSunGlassesData,
    ...contactLensesData,
  ];

  function s(rate) {
    const stars = Math.min(Math.round(rate), 5);
    const showGoldStars = Array.from({ length: stars }).map((_, index) => {
      return <FontAwesomeIcon icon={solidStar} key={index} color="gold" />;
    });
    const showGrayStars = Array.from({ length: 5 - stars }).map((_, index) => {
      return <FontAwesomeIcon icon={regularStar} key={index} />;
    });

    return (
      <>
        {showGoldStars}
        {showGrayStars}
      </>
    );
  }

  const getTopRated = allProducts.filter((item) => {
    return item.rate === "5" ? true : false;
  });

  const TopRated =
    getTopRated.length > 5 ? getTopRated.slice(0, 5) : getTopRated;

  const showTopRated = TopRated.map((item, index) => {
    return (
      <Card key={index} style={{ height: "450px" }} className="topRated-card">
        <Card.Img
          variant="top"
          src={item.image}
          className="topRated-card-img"
        />
        <Card.Body className="topRated-card-text">
          <div>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.measurements}</Card.Text>
            <Card.Text>{item.price}</Card.Text>
            <Card.Text>{item.discount}</Card.Text>
          </div>
          <div>{s(item.rate)}</div>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="topRated-container">
      <h3>Top Rated</h3>
      <div className="topRated">{showTopRated}</div>
    </div>
  );
}
