import { Link } from "react-router-dom";
import "./siteBarsStyle.css";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SiteTopBar() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  const setIsOpen = menu.setIsOpen;

  return (
    <nav className="site-topbar">
      {windowSize > 800 ? (
        <>
          <div className="left-siteTop">
            <img
              src={require("../../assets/siteLogo.png")}
              alt="logo"
              className="siteTop-logo"
            />
            <Link to={"/"} className="siteTop-link">
              Home
            </Link>
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
            src={require("../../assets/siteLogo.png")}
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
        </div>
      )}
    </nav>
  );
}
