import { Route, Routes } from "react-router-dom";
import Home from "./website/home/Home";
import Services from "./website/services/Services";
import AboutUs from "./website/aboutUs/AboutUs";
import ContactUs from "./website/contact/ContactUs";
import Products from "./website/products/Products";
import "./globalCss/media.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
