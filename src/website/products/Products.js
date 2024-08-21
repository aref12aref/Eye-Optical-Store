import {
  contactLensesData,
  menGlassesData,
  mensunGlassesData,
  womenGlassesData,
  womenSunGlassesData,
} from "../testData/products/productsData";
import SiteTopBar from "../../components/bars/SiteTopBar";
import "./productsStyle.css";
import { Button, Card } from "react-bootstrap";
import { useContext, useRef, useState } from "react";
import SiteFootBar from "../../components/bars/SiteFootBar";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import SiteSideBar from "../../components/bars/SiteSideBar.js";
import OneProductPage from "../../components/product/OneProductPage.js";

import Cookie from "cookie-universal";

export default function Products() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  const cookie = Cookie();
  let orders = cookie.get("cart");
  const [cart, setCart] = useState(0);

  function handleAddToCart() {
    orders = orders + 1;
    cookie.set("cart", orders);
    setCart((prev) => prev + 1);
  }

  const [search, setSearch] = useState("");
  const [oneProductData, setOneProductData] = useState({
    name: "",
    image: "",
    measurements: "",
    rate: "",
    description: "",
    price: "",
    discount: "",
    oneProduct: false,
  });

  const allProducts = [
    ...menGlassesData,
    ...mensunGlassesData,
    ...womenGlassesData,
    ...womenSunGlassesData,
    ...contactLensesData,
  ];

  const productsCategoriesTitle = [
    "Women Prescription Glasses",
    "Women Sun Glasses",
    "Men Prescription Glasses",
    "Men Sun Glasses",
    "Contact Lenses",
  ];

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

  const fliteredProducts =
    search !== ""
      ? allProducts.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase())
            ? true
            : false;
        })
      : allProducts;

  const showAllProducts = productsCategoriesTitle.map((category, index) => {
    return (
      <div key={index} className="products-item">
        <h3 className="products-item-title">{category}</h3>
        <div className="products-item-cards">
          {fliteredProducts.map((item, index2) => {
            return (
              <>
                {category === item.category && (
                  <Card
                    style={{ height: "500px" }}
                    key={index2}
                    className="products-item-card"
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="products-card-item-img"
                      onClick={() => {
                        setOneProductData({
                          ...oneProductData,
                          name: item.name,
                          image: item.image,
                          measurements: item.measurements,
                          rate: item.rate,
                          description: item.description,
                          price: item.price,
                          discount: item.discount,
                          oneProduct: true,
                        });
                      }}
                    />
                    <Card.Body className="products-card-item-body">
                      <div>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>{item.measurements}</Card.Text>
                        <Card.Text>{item.price}</Card.Text>
                        <Card.Text>{item.discount}</Card.Text>
                        <Card.Text>{item.rate}</Card.Text>
                      </div>

                      <Button variant="primary" onClick={handleAddToCart}>
                        add to cart
                      </Button>
                    </Card.Body>
                  </Card>
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="products">
      <SiteTopBar />
      {windowSize < 800 && isOpen && <SiteSideBar />}

      {oneProductData.oneProduct ? (
        <OneProductPage
          name={oneProductData.name}
          image={oneProductData.image}
          measurements={oneProductData.measurements}
          rate={oneProductData.rate}
          description={oneProductData.description}
          price={oneProductData.price}
          discount={oneProductData.discount}
          setOneProductData={setOneProductData}
        />
      ) : (
        <>
          <div className="products-search-sec">
            <form className="products-search-sec-form">
              <label>Search:</label>
              <input
                type="search"
                placeholder="Search"
                className="products-searcch-sec-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>

          <div className="products-sec">{showAllProducts}</div>
        </>
      )}
      <SiteFootBar />
      <button ref={upBut} onClick={handleUp} className="up-button">
        ^
      </button>
    </div>
  );
}
