import React from "react";
import "../pages/contact.css";

const Contact = () => {
  return (
    <div
      className="container py-5 my-5 rounded-4"
      style={{ maxWidth: "800px", backgroundColor: "#dbd7c4ff" }}
    >
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        Have questions or want to book a table? We’d love to hear from you!
      </p>

      <form className="row g-3 contact-box">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="col-12">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn btn-warning px-4 fw-semibold"
            onClick={(e) => {
              e.preventDefault();
              alert("Message Sent Successfully ✅");
            }}
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Details */}
      <div className="text-center mt-5">
        <p className="mb-1">
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p className="mb-1">
          <strong>Email:</strong> support@indorecafe.com
        </p>
        <p>
          <strong>Location:</strong> CS Naidu Arcade, 204, Greater Kailash Road, Opposite Grotto, Old Palasia, Indore, Madhya Pradesh 452001
        </p>
      </div>
    </div>
  );
};

export default Contact;
