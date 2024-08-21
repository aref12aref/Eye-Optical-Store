import {
  faFacebookF,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import SiteTopBar from "../../components/bars/SiteTopBar";
import "./contactUsStyle.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import SiteSideBar from "../../components/bars/SiteSideBar.js";

export default function ContactUs() {
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  const [massage, setMassage] = useState({
    title: "select title",
    name: "",
    email: "",
    subject: "",
    details: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(massage);
  }

  return (
    <div>
      <SiteTopBar />
      {windowSize < 800 && isOpen && <SiteSideBar />}

      <div className="contact-container">
        <div className="contact-form-sec">
          <h4 className="contact-title">Send a massage</h4>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-item">
              <label className="contact-form-item-label">What Can We Help With?</label>
              <select
                className="contact-form-input"
                value={massage.title}
                onChange={(e) =>
                  setMassage({ ...massage, title: e.target.value })
                }
              >
                <option disabled>select title</option>
                <option value="Product Question">Product Question</option>
                <option value="Product Support">Product Support</option>
                <option value="Feedback / Feature Request">
                  Feedback / Feature Request
                </option>
                <option value="Report Abuse">Report Abuse</option>
              </select>
            </div>

            <div className="contact-form-item">
              <label className="contact-form-item-label">Name:</label>
              <input
                type="text"
                className="contact-form-input"
                value={massage.name}
                onChange={(e) =>
                  setMassage({ ...massage, name: e.target.value })
                }
              />
            </div>

            <div className="contact-form-item">
              <label className="contact-form-item-label">Email:</label>
              <input
                type="email"
                className="contact-form-input"
                value={massage.email}
                onChange={(e) =>
                  setMassage({ ...massage, email: e.target.value })
                }
              />
            </div>

            <div className="contact-form-item">
              <label className="contact-form-item-label">Subject</label>
              <input
                type="text"
                className="contact-form-input"
                value={massage.subject}
                onChange={(e) =>
                  setMassage({ ...massage, subject: e.target.value })
                }
              />
            </div>

            <div className="contact-form-item">
              <label className="contact-form-item-label">Details</label>
              <textarea
                className="contact-form-textarea"
                value={massage.details}
                onChange={(e) =>
                  setMassage({ ...massage, details: e.target.value })
                }
              />
            </div>
            <button className="contact-form-button">Send</button>
          </form>
        </div>
        <div className="contact-social-sec">
          <h4 className="contact-title">contact in our accounts</h4>
          <div className="contact-social-icons">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="contact-icon contact-social-whatsapp"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="contact-icon contact-social-facebook"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact-icon contact-social-email"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contact-icon contact-social-linkedin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
