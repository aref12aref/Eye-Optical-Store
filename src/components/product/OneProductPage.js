import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OneProductStyle.css";

export default function OneProductPage({
  name,
  image,
  measurements,
  rate,
  description,
  price,
  discount,
  setOneProductData,
}) {
  const stars = Math.min(Math.round(rate), 5);
  const showGoldStars = Array.from({ length: stars }).map((_, index) => {
    return <FontAwesomeIcon icon={solidStar} key={index} color="gold" />;
  });
  const showGrayStars = Array.from({ length: 5 - stars }).map((_, index) => {
    return <FontAwesomeIcon icon={regularStar} key={index} />;
  });

  function handleBack() {
    setOneProductData({ oneProduct: false });
  }

  return (
    <div className="oneproduct-main">
      <section className="oneproduct-head">
        <h2>{name}</h2>
        <button onClick={handleBack} className="oneproduct-head-but">
          back
        </button>
      </section>

      <section className="oneproduct-body">
        <div className="oneproduct-body-left">
          <img src={image} alt={name} className="oneproduct-body-left-img" />
        </div>
        <div className="oneproduct-body-right">
          <p>price: {price}</p>
          <p>{discount !== "" ? "discount: " + discount : ""}</p>
          <p>
            {showGoldStars}
            {showGrayStars}
          </p>
          <button className="btn btn-primary">add to cart</button>
        </div>
      </section>

      <section className="oneproduct-foot">
        <p>measurements: {measurements}</p>
        <p>{description}</p>
      </section>
    </div>
  );
}
