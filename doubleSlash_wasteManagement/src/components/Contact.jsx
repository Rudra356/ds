import React from "react";

function Contact() {
  return (
    <section className="bg-light py-3">
      <div className="container px-5 my-5 px-5">
        <div className="text-center mb-5">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-envelope"></i>
          </div>
          <h2 className="fw-bolder">Get in touch</h2>
          <p className="lead mb-0">We'd love to hear from you</p>
        </div>
        <div className="row gx-5 justify-content-center">
          <button className="btn btn-dark">Call us</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
