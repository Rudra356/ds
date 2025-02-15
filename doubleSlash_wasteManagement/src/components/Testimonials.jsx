import React from "react";

function Testimonials() {
  return (
    <section className="py-3 border-bottom" id="testimonials">
      <div className="container px-5 my-5 px-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">What People Say About Us</h2>
          <p className="lead mb-0">
            See how our waste management solutions have made a difference!
          </p>
        </div>
        <div className="row gx-5 justify-content-center">
          {/* Testimonial 1 */}
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <p className="mb-4">
                  "This platform helped me dispose of my household waste properly.
                  I never knew I was throwing away recyclables incorrectly!"
                </p>
                <h5 className="fw-bold mb-0">Amit Sharma</h5>
                <p className="text-muted">Homeowner</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <p className="mb-4">
                  "A fantastic service! I run a small business, and their waste
                  management solutions have helped me to improve
                  sustainability."
                </p>
                <h5 className="fw-bold mb-0">Priya Verma</h5>
                <p className="text-muted">Small Business Owner</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <p className="mb-4">
                  "As an environmental activist, I appreciate the effort in
                  educating people about proper waste disposal. Highly recommended!"
                </p>
                <h5 className="fw-bold mb-0">Rohan Desai</h5>
                <p className="text-muted">Environmental Advocate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
