import { Link } from "react-router-dom";

export default function SiteSideBar() {
  return (
    <nav className="site-sidebar">
      <div className="site-sidebar-links">
        <Link to={"/"} className="siteSide-link">
          Home
        </Link>

        <Link to={"/products"} className="siteSide-link">
          Products
        </Link>
        <Link to={"/services"} className="siteSide-link">
          Services
        </Link>
        <Link to={"/about"} className="siteSide-link">
          About Us
        </Link>
        <Link to={"/contact"} className="siteSide-link">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
