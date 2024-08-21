import { useContext, useRef } from "react";
import SiteTopBar from "../../components/bars/SiteTopBar";
import CategoriesShow from "../../components/home/CategoriesShow.js";
import CustomerOpinionsShow from "../../components/home/CustomerOpinionsShow.js";
import TopRatedProducts from "../../components/home/TopRatedProducts.js";
import LastProducts from "../../components/home/LastProducts.js";
import SiteFootBar from "../../components/bars/SiteFootBar.js";

import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserClock, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import "./homeStyle.css";
import { categoriesData } from "../testData/categories/categoriesData";
import { customerComments } from "../testData/comments/customerOpinions";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import SiteSideBar from "../../components/bars/SiteSideBar.js";

import Cookie from "cookie-universal";

export default function Home() {
  const cookie = Cookie();
  const cookies = cookie.getAll();
  if (!cookies.cart) {
    cookie.set("cart", 0);
  }

  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  const upBut = useRef();

  function handleUp() {
    upBut.current.style.display = "none";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  window.onscroll = function () {
    let y = window.scrollY;
    if (y > 100) {
      if (upBut.current !== null) {
        upBut.current.style.display = "block";
      }
    } else {
      if (upBut.current !== null) {
        upBut.current.style.display = "none";
      }
    }
  };

  const showCategories = categoriesData.map((item, index) => {
    return <CategoriesShow key={index} image={item.image} title={item.name} />;
  });

  const showOpinions = customerComments.map((item, index) => {
    return (
      <CustomerOpinionsShow
        key={index}
        image={
          item.gender === "male"
            ? require("../../assets/male.png")
            : require("../../assets/female.png")
        }
        name={item.name}
        comment={item.comment}
        rate={item.rate}
      />
    );
  });

  return (
    <div className="home">
      <SiteTopBar />
      {windowSize < 800 && isOpen && <SiteSideBar />}

      <section>
        <Carousel data-bs-theme="dark" className="home-first-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 home-first-carousel-img"
              src={require("../../assets/sale1.webp")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-first-carousel-img"
              src={require("../../assets/sale2.png")}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="home-advantages">
        <div className="home-advantages-item">
          <div className="advantages-content">
            <FontAwesomeIcon
              icon={faUserClock}
              className="home-advantages-item-icon"
            />
            <h4>customer services</h4>
            <p>24 hours service</p>
          </div>
        </div>

        <div className="home-advantages-item">
          <div className="advantages-content">
            <FontAwesomeIcon
              icon={faProductHunt}
              className="home-advantages-item-icon"
            />
            <h4>products</h4>
            <p>100% original products</p>
          </div>
        </div>

        <div className="home-advantages-item">
          <div className="advantages-content">
            <FontAwesomeIcon
              icon={faWallet}
              className="home-advantages-item-icon"
            />
            <h4>pays</h4>
            <p>different payment methods</p>
          </div>
        </div>
      </section>

      <section className="home-categories-sec">
        <h2 className="home-sections-titles">Categories</h2>
        <div className="home-categories-sec-cards">{showCategories}</div>
      </section>

      <section className="home-products-sec">
        <h2 className="home-sections-titles">News</h2>
        <div className="home-products-sec-container">
          <TopRatedProducts />

          <LastProducts />
        </div>
      </section>

      <section className="home-opinios-sec">
        <h2 className="home-sections-titles">Customers Opinions</h2>
        <div className="home-opinios-sec-cards">
          <div
            className="home-opinios-sec-slide-track"
            style={{ "--commentsNumber": `${customerComments.length}` }}
          >
            {showOpinions}
            {showOpinions}
          </div>
        </div>
      </section>

      <SiteFootBar />
      <button ref={upBut} onClick={handleUp} className="up-button">
        ^
      </button>
    </div>
  );
}
