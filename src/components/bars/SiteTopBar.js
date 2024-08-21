import { Link } from "react-router-dom";
import "./siteBarsStyle.css";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Cookie from "cookie-universal";

export default function SiteTopBar() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  const setIsOpen = menu.setIsOpen;

  //cookie
  const cookie = Cookie();
  const orders = cookie.get("cart");

  return (
    <nav className="site-topbar">
      {windowSize > 800 ? (
        <>
          <div className="left-siteTop">
            <img
              src={require("../../assets/siteLogo.jpg")}
              alt="logo"
              className="siteTop-logo"
            />
            <Link to={"/"} className="siteTop-link">
              Home
            </Link>

            <div className="cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="left-siteTop-cart"
                num={orders}
              />

              <p className="left-siteTop-p cartStyle" num={orders}>
                Cart
              </p>
            </div>
          </div>
          <div className="right-siteTop">
            <Link to={"/products"} className="siteTop-link">
              Products
            </Link>
            <Link to={"/services"} className="siteTop-link">
              Services
            </Link>
            <Link to={"/about"} className="siteTop-link">
              About Us
            </Link>
            <Link to={"/contact"} className="siteTop-link">
              Contact Us
            </Link>
          </div>
        </>
      ) : (
        <div className="topbar-sidebar">
          <img
            src={require("../../assets/siteLogo.jpg")}
            alt="logo"
            className="siteTop-logo"
          />
          <FontAwesomeIcon
            icon={faBars}
            fontSize="20px"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="topbar-barsIcon"
          />

          <div className="cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="left-siteTop-cart"
              num={orders}
            />

            <p className="left-siteTop-p cartStyle" num={orders}>
              Cart
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
