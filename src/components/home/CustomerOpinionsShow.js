import "./CustomerOpinionsStyle.css";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomerOpinionsShow({ image, name, comment, rate }) {
  const stars = Math.min(Math.round(rate), 5);
  const showGoldStars = Array.from({ length: stars }).map((_, index) => {
    return <FontAwesomeIcon icon={solidStar} key={index} color="gold" />;
  });
  const showGrayStars = Array.from({ length: 5 - stars }).map((_, index) => {
    return <FontAwesomeIcon icon={regularStar} key={index} />;
  });

  return (
    <div className="home-opinios-sec-card">
      <div className="home-opinios-sec-card-top">
        <img src={image} alt="customer" className="home-opinios-sec-img" />
        <h6>{name}</h6>
      </div>
      <div className="home-opinios-sec-card-bottom">
        <p>{comment}</p>
        {showGoldStars}
        {showGrayStars}
      </div>
    </div>
  );
}
