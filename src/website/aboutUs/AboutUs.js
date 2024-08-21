import SiteTopBar from "../../components/bars/SiteTopBar";
import "./aboutUsStyle.css";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import SiteSideBar from "../../components/bars/SiteSideBar.js";
import { useContext } from "react";

export default function AboutUs() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  return (
    <div>
      <SiteTopBar />
      {windowSize < 800 && isOpen && <SiteSideBar />}

      <div className="aboutus-main">
        <h2 className="aboutus-head">
          <img
            src={require("../../assets/aboutus_background.jpg")}
            alt=""
            className="aboutus-head-img"
          />
        </h2>
        <div className="aboutus-container">
          <p className="aboutus-text">
            Welcome to Eye Optical! We are an online store specialized in
            providing the best lenses and glasses for your daily needs. We
            founded Eye Optical in order to provide a unique and convenient
            shopping experience, where our customers can choose distinctive
            products that meet their needs.
          </p>
          <p className="aboutus-text">
            Our store was established in 2020, and since then, we have been
            offering a wide range of high-quality products that include:
          </p>
          <ul className="aboutus-ul">
            <li className="aboutus-li">Women Prescription Glasses</li>
            <li className="aboutus-li">Women Sun Glasses</li>
            <li className="aboutus-li">Men Prescription Glasses</li>
            <li className="aboutus-li">Men Sun Glasses</li>
            <li className="aboutus-li">Contact Lenses</li>
          </ul>
          <p className="aboutus-text">
            We are committed to providing the best customer service and
            comfortable shopping experience, and we pride ourselves on using the
            latest technology to ensure lens accuracy and product quality.
          </p>
        </div>
      </div>
    </div>
  );
}
