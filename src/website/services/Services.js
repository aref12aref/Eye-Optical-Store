import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteTopBar from "../../components/bars/SiteTopBar";
import "./servicesStyle.css";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faMedal,
  faScrewdriverWrench,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import SiteSideBar from "../../components/bars/SiteSideBar.js";
import { useContext } from "react";

export default function Services() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  return (
    <div>
      <SiteTopBar />
      {windowSize < 800 && isOpen && <SiteSideBar />}
      <div className="services-main">
        <div className="services-head">
          <h2>Services</h2>
          <p>
            At Eye Optical, we offer a range of services designed to meet your
            visual needs:
          </p>
        </div>

        <section className="services-container">
          <div className="service service1">
            <div className="service-title-div">
              <h4 className="service-title">
                <FontAwesomeIcon icon={faTruckFast} /> Fast shipping
              </h4>
            </div>
            <div className="service-text-div">
              <p className="service-text">
                We offer fast and reliable shipping options to ensure products
                are delivered to customers as quickly as possible.
              </p>
            </div>
          </div>

          <div className="service service2">
            <div className="service-title-div">
              <h4 className="service-title">
                <FontAwesomeIcon icon={faMedal} /> Warranty
              </h4>
            </div>
            <div className="service-text-div">
              <p className="service-text">
                A flexible return policy that allows customers to return
                products if they do not meet their expectations.
              </p>
            </div>
          </div>

          <div className="service service3">
            <div className="service-title-div">
              <h4 className="service-title">
                <FontAwesomeIcon icon={faScrewdriverWrench} /> Eyeglass
                maintenance
              </h4>
            </div>
            <div className="service-text-div">
              <p className="service-text">
                We offer eyeglass maintenance and repair services, such as
                adjusting frames or replacing lenses.
              </p>
            </div>
          </div>

          <div className="service service4">
            <div className="service-title-div">
              <h4 className="service-title">
                <FontAwesomeIcon icon={faHandshake} /> Offers and discounts
              </h4>
            </div>
            <div className="service-text-div">
              <p className="service-text">
                We organize periodic offers and discounts to attract customers
                and increase sales.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
