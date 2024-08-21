import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SiteFootBar() {
  return (
    <div className="footer-main">
      <div className="footer-left">
        <Link className="footer-links">Privacy Policy</Link>
        <Link className="footer-links">Terms</Link>
        <Link className="footer-links">About</Link>
      </div>

      <div className="footer-mid">
        <h4>Eye Optical</h4>
        <div className="footer-mid-icons">
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <div className="footer-mid-line" />
        <div className="footer-mid-register">
          <p>Weekly News Letter</p>
          <div>
            <input type="email" placeholder="email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <Link className="footer-links">Shipping Info</Link>
        <Link className="footer-links">Returns</Link>
        <Link className="footer-links">Contact</Link>
      </div>
    </div>
  );
}
