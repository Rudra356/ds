import React from "react";

function Contact() {
  return (
    <section className="py-3 border-bottom text-center" id="contact">
      <div className="container px-5 my-5">
        <h2 className="fw-bold">Need Assistance? Call Now!</h2>
        <p className="text-muted">Contact the waste management authority for help.</p>
        <a href="tel:+919748995046" className="btn btn-outline-dark btn-lg">
          📞 Call Now
        </a>
      </div>
    </section>
  );
}

export default Contact;
