import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section py-5 mt-5">
      <div className="container">
        {/* Top Section */}
        <div className="row gy-4 align-items-start">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-title">Indore</h2>
            <p className="footer-subtitle">— nice places to stay —</p>
            <p className="footer-text">
              We offer a choice from more than 400 indore hotels and apartments
              throughout the whole city. Enjoy your stay with comfort and
              elegance.
            </p>
          </div>
          {/* Links */}
          <div className="col-lg-4 col-md-6 d-flex justify-content-lg-center">
            <div className="row w-100">
              <div className="col-6">
                <h5 className="footer-heading">FOR TRAVELLERS</h5>{" "}
                <ul className="footer-links">
                  <li>
                    <Link to="#">Villas</Link>
                  </li>
                  <li>
                    <Link to="#">Apartments</Link>
                  </li>
                  <li>
                    <Link to="#">Hostels</Link>
                  </li>
                  <li>
                    <Link to="#">Bed & Breakfasts</Link>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <h5 className="footer-heading">COMPANY</h5>{" "}
                <ul className="footer-links">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="col-lg-4 col-md-12">
            <h5 className="footer-heading">SUBSCRIBE TO OUR NEWSLETTER</h5>
            <div className="d-flex mt-3">
              <input
                type="email"
                className="form-control footer-input"
                placeholder="Email address"
              />
              {/* <button className="btn btn-warning px-4">Submit</button> */}
              <button
                onClick={() => {
                  alert("Your Email is Submitted ✅ ");
                }}
                className="btn btn-warning px-4"
              >
                Submit
              </button>
            </div>
            {/* Social icons */}
            <div className="social-icons mt-4">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="footer-bottom text-center mt-5 pt-4">
          <p>
            Hotel Reservation Network | 2025 © hotels-indore.com. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
