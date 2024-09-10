import { useContext, useRef, useState } from "react";
import SiteTopBar from "../../components/bars/SiteTopBar";
import CategoriesShow from "../../components/home/CategoriesShow.js";
import CustomerOpinionsShow from "../../components/home/CustomerOpinionsShow.js";
import SiteFootBar from "../../components/bars/SiteFootBar.js";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import "./homeStyle.css";
import { categoriesData } from "../testData/categories/categoriesData";
import { customerComments } from "../testData/comments/customerOpinions";

import { WindowSize } from "../../context/screenContext.js";
import { Menu } from "../../context/menuContext.js";
import SiteSideBar from "../../components/bars/SiteSideBar.js";

export default function Home() {
  //states
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    gender: "Select Gender",
    time: "Select Time",
  });

  const [dataError, setDataError] = useState({
    exist: false,
    text: "",
  });

  const [opinionData, setOpinionData] = useState({
    name: "",
    gender: "Select Gender",
    comment: "",
    rate: "",
  });

  const [opinions, setOpinions] = useState(customerComments);

  //responsive
  const windowContext = useContext(WindowSize);
  const windowSize = windowContext.windowSize;

  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  //refs
  const upBut = useRef();

  //showers
  const showCategories = categoriesData.map((item, index) => {
    return <CategoriesShow key={index} image={item.image} title={item.name} />;
  });

  const showOpinions = opinions.map((item, index) => {
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

  //handlers
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

  function handleUp() {
    upBut.current.style.display = "none";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleAppointmentSubmit(e) {
    e.preventDefault();

    // check data
    if (appointmentData.age < 12 || appointmentData.age > 100) {
      setDataError({
        ...dataError,
        exist: true,
        text: "please enter a valid age",
      });
      return;
    } else if (
      appointmentData.phoneNumber.length < 10 ||
      appointmentData.phoneNumber.length > 15
    ) {
      setDataError({
        ...dataError,
        exist: true,
        text: "please enter a valid phone number",
      });
      return;
    }

    // Create the WhatsApp message
    const message = `Appointment Details:\nName: ${appointmentData.name}\nAge: ${appointmentData.age}\nPhone: ${appointmentData.phoneNumber}\nGender: ${appointmentData.gender}\nAppointment Time: ${appointmentData.time}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
  }

  function handleOpinionSubmit(e) {
    e.preventDefault();

    customerComments.push({
      name: opinionData.name,
      gender: opinionData.gender,
      comment: opinionData.comment,
      rate: opinionData.rate,
    });

    setOpinionData({
      ...opinionData,
      name: "",
      gender: "",
      comment: "",
      rate: "",
    });

    setOpinions(customerComments);
  }

  return (
    <div className="home">
      <SiteTopBar />
      {windowSize < 800 && isOpen && <SiteSideBar />}

      <section>
        <Carousel data-bs-theme="dark" className="home-first-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 home-first-carousel-img"
              src={require("../../assets/home_caroussel1.jpeg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-first-carousel-img"
              src={require("../../assets/home_caroussel2.webp")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-first-carousel-img"
              src={require("../../assets/home_caroussel3.jpeg")}
              alt="third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-first-carousel-img"
              src={require("../../assets/home_caroussel4.jpeg")}
              alt="fourth slide"
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

        <a className="home-advantages-item" href="#Appointment">
          <div className="advantages-content">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="home-advantages-item-icon"
            />
            <h4>get appointment</h4>
          </div>
        </a>
      </section>

      <section className="home-categories-sec">
        <h2 className="home-sections-titles">Categories</h2>
        <div className="home-categories-sec-cards">{showCategories}</div>
      </section>

      <section className="home-Appointment-sec" id="Appointment">
        <h2 className="home-sections-titles">Get Appointment</h2>
        <form
          className="home-Appointment-form"
          onSubmit={handleAppointmentSubmit}
        >
          <div className="Appointment-form-item">
            <label className="Appointment-form-label">Name</label>
            <input
              type="text"
              value={appointmentData.name}
              onChange={(e) =>
                setAppointmentData({ ...appointmentData, name: e.target.value })
              }
              placeholder="Name..."
              required
              className="Appointment-form-input"
            />
          </div>

          <div className="Appointment-form-item">
            <label className="Appointment-form-label">Age</label>
            <input
              type="number"
              value={appointmentData.age}
              onChange={(e) => {
                setAppointmentData({ ...appointmentData, age: e.target.value });
                setDataError({ ...dataError, exist: false });
              }}
              placeholder="Age..."
              required
              className="Appointment-form-input"
            />
          </div>
          {dataError.exist && dataError.text.includes("age") && (
            <p style={{ color: "red", fontSize: "10px" }}>{dataError.text}</p>
          )}

          <div className="Appointment-form-item">
            <label className="Appointment-form-label">Phone Number</label>
            <input
              type="number"
              value={appointmentData.phoneNumber}
              onChange={(e) => {
                setAppointmentData({
                  ...appointmentData,
                  phoneNumber: e.target.value,
                });
                setDataError({ ...dataError, exist: false });
              }}
              placeholder="Phone Number..."
              required
              className="Appointment-form-input"
            />
          </div>
          {dataError.exist && dataError.text.includes("phone") && (
            <p style={{ color: "red", fontSize: "10px" }}>{dataError.text}</p>
          )}

          <div className="Appointment-form-item">
            <label className="Appointment-form-label">Gender</label>
            <select
              required
              value={appointmentData.gender}
              onChange={(e) =>
                setAppointmentData({
                  ...appointmentData,
                  gender: e.target.value,
                })
              }
              className="Appointment-form-input"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="Appointment-form-item">
            <label className="Appointment-form-label">Appointment Time</label>
            <select
              value={appointmentData.time}
              onChange={(e) =>
                setAppointmentData({ ...appointmentData, time: e.target.value })
              }
              className="Appointment-form-input"
            >
              <option value="Select Time">Select Time</option>
              <option value="8am">8am</option>
              <option value="9">9am</option>
              <option value="10am">10am</option>
              <option value="11am">11am</option>
              <option value="12am">12am</option>
              <option value="1pm">1pm</option>
              <option value="2pm">2pm</option>
              <option value="3pm">3pm</option>
              <option value="4pm">4pm</option>
              <option value="5pm">5pm</option>
              <option value="6pm">6pm</option>
              <option value="7pm">7pm</option>
              <option value="8pm">8pm</option>
            </select>
          </div>
          <button className="Appointment-form-button">Submit</button>
        </form>
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

        <div className="personal-opinion">
          <form
            className="personal-opinion-form"
            onSubmit={handleOpinionSubmit}
          >
            <h3>give us your opinion</h3>
            <div className="opinion-form-item">
              <label className="opinion-form-label">Name:</label>
              <input
                type="text"
                className="opinion-form-input"
                value={opinionData.name}
                onChange={(e) =>
                  setOpinionData({ ...opinionData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="opinion-form-item">
              <label className="opinion-form-label">Gender</label>
              <select
                required
                value={opinionData.gender}
                onChange={(e) =>
                  setOpinionData({
                    ...opinionData,
                    gender: e.target.value,
                  })
                }
                className="opinion-form-input"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="opinion-form-item">
              <label className="opinion-form-label">Comment:</label>
              <input
                type="text"
                className="opinion-form-input"
                value={opinionData.comment}
                onChange={(e) =>
                  setOpinionData({ ...opinionData, comment: e.target.value })
                }
                required
              />
            </div>
            <div className="opinion-form-item">
              <label className="opinion-form-label">Rate:</label>
              <input
                type="number"
                className="opinion-form-input"
                value={opinionData.rate}
                onChange={(e) =>
                  setOpinionData({ ...opinionData, rate: e.target.value })
                }
                required
              />
            </div>
            <button className="opinion-form-button">Submit</button>
          </form>
        </div>
      </section>

      <SiteFootBar />
      <button ref={upBut} onClick={handleUp} className="up-button">
        ^
      </button>
    </div>
  );
}
